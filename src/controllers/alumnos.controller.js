import { getConnection, querys, sql } from "../models/index.js";



//Create
export const create = async ( request, result ) => {

    const { nombre, apellidos, estado } = request.body;
    // console.log('nombre: ' + nombre);
    // console.log('apellidos: ' + apellidos);
    // console.log('estado: ' + estado);

    try {
        
        const pool = await getConnection();

        const resultCreate = await pool
        .request()
        .input( "nombreValor", sql.NVarChar, nombre )
        .input( "apellidosValor", sql.NVarChar, apellidos )
        .input( "estadoValor", sql.Bit, estado )
        .query(querys.create);

        //console.log("resultCreate : " + JSON.stringify(resultCreate) );
        //console.log(resultCreate.recordset[0].msj_tipo);

        if(resultCreate.recordset[0].msj_tipo === "success"){

            const completeResult = 
            {
                "respuesta_tipo" : resultCreate.recordset[0].msj_tipo,
                "respuesta_detalle" :resultCreate.recordset[0].msj_texto,
            }

            return result.json(completeResult);

        }
        else if(resultCreate.recordset[0].msj_tipo === "warning"){
            
            const completeResult = 
            {
                "respuesta_tipo" : resultCreate.recordset[0].msj_tipo,
                "respuesta_detalle" :resultCreate.recordset[0].msj_texto,
            }

            return result.json(completeResult);
        }
        else if(resultCreate.recordset[0].msj_tipo === "error"){
            
            const completeResult = 
            {
                "respuesta_tipo" : resultCreate.recordset[0].msj_tipo,
                "respuesta_detalle" :resultCreate.recordset[0].msj_texto,
            }

            return result.json(completeResult);
        }

    } catch (error) {
        result.status(500);
        result.send(error.message);
    }

}

//Read simple
export const getAll = async (request, result) => {

    try{

        const pool = await getConnection();

        const resultAlumnos = await pool
        .request()
        .query(querys.getAll);

        console.log(resultAlumnos.recordsets)
        //console.log(resultAlumnos.recordset)
        if( resultAlumnos.recordsets[1][0].msj_tipo === "success"){

            const completeResult = 
            {
                "respuesta_tipo" : resultAlumnos.recordsets[1][0].msj_tipo,
                "respuesta_detalle" : resultAlumnos.recordsets[1][0].msj_texto,
                "datos" : resultAlumnos.recordset
            }

            return result.json(completeResult);

        }else if( resultAlumnos.recordsets[1][0].msj_tipo === "warning"){

            const completeResult = 
            {
                "respuesta_tipo" : resultAlumnos.recordsets[1][0].msj_tipo,
                "respuesta_detalle" : resultAlumnos.recordsets[1][0].msj_texto,
                "datos" : ''
            }

            return result.json(completeResult);

        }    

    }
    catch(error){
        result.status(500);
        result.send(error.message);
    }

}


//Read con parametro
export const getById = async (request, result) => {

    const { id_alumno } = request.body;

    // console.log(id_alumno);

    try {

        const pool = await getConnection();

        const resultAlumno = await pool
        .request()
        .input( "idValor", sql.Int, id_alumno  )
        .query(querys.getById);

        console.log("resultAlumno : "  + resultAlumno);

        if(resultAlumno.recordsets[1][0].msj_tipo === "success" ){

            const completeResult = 
            {
                    "respuesta_tipo" : resultAlumno.recordsets[1][0].msj_tipo,
                    "respuesta_detalle" : resultAlumno.recordsets[1][0].msj_texto,
                    "datos" : resultAlumno.recordset
            }

            return result.json(completeResult)

        }
        else if(resultAlumno.recordsets[1][0].msj_tipo === "warning" ){

            const completeResult = 
            {
                    "respuesta_tipo" : resultAlumno.recordsets[1][0].msj_tipo,
                    "respuesta_detalle" : resultAlumno.recordsets[1][0].msj_texto,
                    "datos" : []
            }

            return result.json(completeResult)

        }


        
    } catch (error) {

        result.status(500);
        result.send(error.message);
        
    }



}

//U
export const update = async( request, result ) => {

    try {
        
        const { nombre, apellidos, estado, id } = request.body;

        const pool = await getConnection();

        const resultUpdate = await pool
        .request()
        .input("nombreValor", sql.NVarChar, nombre)
        .input("apellidosValor", sql.NVarChar, apellidos)
        .input("estadoValor", sql.Bit, estado)
        .input("idValor", sql.Int, id )
        .query(querys.update);

        // console.log(resultUpdate);

        if(resultUpdate.recordset[0].msj_tipo === "success"){

            const resultComplete = 
            {
                "respuesta_tipo" : resultUpdate.recordset[0].msj_tipo,
                "respuesta_detalle" :resultUpdate.recordset[0].msj_texto,
            }

            return result.json(resultComplete);

        }
        else if(resultUpdate.recordset[0].msj_tipo === "warning"){

            const resultComplete = 
            {
                "respuesta_tipo" : resultUpdate.recordset[0].msj_tipo,
                "respuesta_detalle" :resultUpdate.recordset[0].msj_texto,
            }

            return result.json(resultComplete);

        }
        else if(resultUpdate.recordset[0].msj_tipo === "error"){

            const resultComplete = 
            {
                "respuesta_tipo" : resultUpdate.recordset[0].msj_tipo,
                "respuesta_detalle" :resultUpdate.recordset[0].msj_texto,
            }

            return result.json(resultComplete);

        }
        
        
        
    } catch (error) {

        result.status(500);
        result.send(error.message);
    }

}

//D Fisico
export const deleteAlumnoFisico = async ( request, result ) => {

    try {

        const { id } = request.body;
        
        const pool = await getConnection();

        const resultDelete = await pool
        .request()
        .input("idValor", sql.Int, id )
        .query(querys.deleteFisico);

        //console.log(resultDelete);


        if(resultDelete.recordset[0].msj_tipo === "success"){

            const resultComplete = 
            {
                "respuesta_tipo" : resultDelete.recordset[0].msj_tipo,
                "respuesta_detalle" :resultDelete.recordset[0].msj_texto,
            }

            return result.json(resultComplete);

        }
        else if(resultDelete.recordset[0].msj_tipo === "warning"){

            const resultComplete = 
            {
                "respuesta_tipo" : resultDelete.recordset[0].msj_tipo,
                "respuesta_detalle" :resultDelete.recordset[0].msj_texto,
            }

            return result.json(resultComplete);

        }
        else if(resultDelete.recordset[0].msj_tipo === "error"){

            const resultComplete = 
            {
                "respuesta_tipo" : resultDelete.recordset[0].msj_tipo,
                "respuesta_detalle" :resultDelete.recordset[0].msj_texto,
            }

            return result.json(resultComplete);

        }


    } catch (error) {
        result.status(500);
        result.send(error.message);
    }

}

//D Logico
export const deleteAlumnoLogico = async ( request, result ) => {

    try {

        const { id } = request.body;
        
        const pool = await getConnection();

        const resultDelete = await pool
        .request()
        .input("idValor", sql.Int, id )
        .query(querys.deleteLogico);

        //console.log(resultDelete);


        if(resultDelete.recordset[0].msj_tipo === "success"){

            const resultComplete = 
            {
                "respuesta_tipo" : resultDelete.recordset[0].msj_tipo,
                "respuesta_detalle" :resultDelete.recordset[0].msj_texto,
            }

            return result.json(resultComplete);

        }
        else if(resultDelete.recordset[0].msj_tipo === "warning"){

            const resultComplete = 
            {
                "respuesta_tipo" : resultDelete.recordset[0].msj_tipo,
                "respuesta_detalle" :resultDelete.recordset[0].msj_texto,
            }

            return result.json(resultComplete);

        }
        else if(resultDelete.recordset[0].msj_tipo === "error"){

            const resultComplete = 
            {
                "respuesta_tipo" : resultDelete.recordset[0].msj_tipo,
                "respuesta_detalle" :resultDelete.recordset[0].msj_texto,
            }

            return result.json(resultComplete);

        }


    } catch (error) {
        result.status(500);
        result.send(error.message);
    }

}




