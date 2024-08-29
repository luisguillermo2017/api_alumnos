USE [Matricula]
GO
/****** Object:  StoredProcedure [dbo].[sp_alumno_by_id]    Script Date: 28/08/2024 08:56:52 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE OR ALTER  PROCEDURE [dbo].[sp_alumno_by_id]
(@id int)
AS
BEGIN  

		--Comprobar si existen registros
		IF EXISTS (SELECT * FROM alumnos a WHERE a.id_alumno = @id)
		BEGIN
			--Si hay datos, devolver dicha información
			SELECT * FROM alumnos a WHERE a.id_alumno = @id
 
			SELECT 'success' AS msj_tipo, 'Exito al realizar la acción.' AS msj_texto;  
		END

		ELSE
		BEGIN
			--Si no hay datos, se devuelve un mensaje indicandolo
			SELECT ''
 
			SELECT 'warning' AS msj_tipo, 'No hay datos para mostrar con el id proporcionado.' AS msj_texto; 
		END
END

--EXEC sp_alumno_by_id 10

--SELECT * FROM alumnos

--EXEC SP_ALUMNO_BY_ID idValor