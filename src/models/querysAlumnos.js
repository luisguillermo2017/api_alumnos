export const querys = {

    //CRUD

    //C
    create : "EXEC sp_alumno_insertar @nombreValor, @apellidosValor, @estadoValor",

    //Read simple
    getAll : "EXEC SP_LIST_ALUMNOS",

    //Read con parametro
    getById : "EXEC sp_alumno_by_id @idValor",

    //U
    update : "EXEC sp_alumno_actualizar @nombreValor, @apellidosValor, @estadoValor, @idValor", 
  

    //D Fisico
    deleteFisico : "EXEC sp_alumno_borrar_fisico @idValor",

    //D Logico
    deleteLogico : "EXEC sp_alumno_borrar_logico @idValor",

}