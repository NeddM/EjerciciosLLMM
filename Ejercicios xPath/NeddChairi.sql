-- 1. Crea la función is_free que devuelve verdadero si la bici cuyo identificador se pasa como primer parametro
-- está alquilada en el instante que se pasa como segundo parámetro.

delimiter $$
drop function if exists is_free $$
create function is_free(par_bike_id int(5), par_datetime datetime)
returns boolean
begin 
    return (
        select if(par_datetime < end_dt && par_datetime > ini_dt, True, False)
        from rental
        where par_bike_id = bike_id
    );
end $$
delimiter ;


-- 2. Crea una función count_free que recibe como parámetro
-- un color y devuelve el número de bicis de ese color libres
-- (no alquiladas) ahora (en el instante actual)

delimiter $$
drop function if exists count_free $$
create function count_free(par_color varchar(40))
returns int
begin
    return (
        select count(bike_id)
        from rental r, bike b
        where r.bike_id = b.bike_id
        and par_color = b.color
        and instante between ini_dt and ifnull(end_dt, CURRENT_TIMESTAMP)
    );
end $$
delimiter ;


-- 3. Crea el procedimiento devolution que se ejecutará cada vez que se devuelve una bici y
-- recibe como parámetro el identificador de la bici. Si la bici está alquilada en el instante
-- actual, se actualiza el campo end_dt con la fecha-hora actual. Pero si la bici no está
-- alquilada, entonces no se actualiza nada. Un parámetro de salida devuelve 0 si no se
-- actualiza nada y 1 en caso contrario

delimiter $$
drop procedure if exists devolution $$
create procedure devolution(par_bike_id int(5), out ret_trueorfalse boolean)
    begin
    if par_bike_id is not null then
        insert into rental (email, bike_id, ini_dt, end_dt)
        values (null, par_bike_id, null, current_timestamp )
        set ret_trueorfalse = true
        select ret_trueorfalse;
    else
        set ret_trueorfalse = false
        select ret_trueorfalse;
    end if;
end $$
delimiter ;


-- 4. Crea el disparador no_overlapping que impide que al actualizar un alquiler, la fecha-hora
-- de inicio sea posterior o igual a la de fin. Sí se admite que la fecha-hora de fin sea nula

delimiter $$
drop trigger if exists no_overlapping $$
create trigger no_overlapping
before update on rental
for each row 
begin
    if new.ini_dt >= old.end_dt then 
        signal sqlstate '45000'
        set message_text = 'No se ha podido realizar la operación';
    else 
        insert into new.ini_dt
        set new.end_dt = null;
    end if;
end $$
delimiter ;


-- 5. Crea el disparador only_one_rent que impide que al insertar un alquiler, el cliente tenga
-- ya una bici prestada en ese instante.

delimiter $$
drop trigger if exists only_one_rent $$
create trigger only_one_rent
before insert on rental
for each row
begin
    if new.email = true then
    signal sqlstate '45000'
    set message_text = 'Este cliente ya tiene una bici prestada';
    end if;
end $$
delimiter ;
