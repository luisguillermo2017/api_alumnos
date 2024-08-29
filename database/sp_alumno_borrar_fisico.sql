USE [Matricula]
GO
/****** Object:  StoredProcedure [dbo].[sp_alumno_borrar_fisico]    Script Date: 28/08/2024 08:55:32 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE OR ALTER     procedure [dbo].[sp_alumno_borrar_fisico]
(@id int)
as
begin
set nocount on

BEGIN TRY

		IF LEN(@id) = 0 OR	@id <= 0
		BEGIN

			SELECT 'warning' AS msj_tipo, 'Debes ingresar todos los datos solicitados.' AS msj_texto; 

		END
		ELSE IF EXISTS (SELECT 1 FROM alumnos a WHERE a.id_alumno = @id)
		BEGIN
			--Si hay datos, devolver dicha información
			delete alumnos where id_alumno = @id
 
			SELECT 'success' AS msj_tipo, 'Exito al realizar la acción.' AS msj_texto;  
		END

		ELSE
		BEGIN
			--Si no hay datos, se devuelve un mensaje indicandolo
			SELECT 'warning' AS msj_tipo, 'No existe un registro con el id proporcionado.' AS msj_texto; 
		END

	END TRY

	BEGIN CATCH

		SELECT 'error' AS msj_tipo, ERROR_MESSAGE() AS msj_texto; 

	END CATCH

end

--select * from alumnos 
--select * from Matricula
--EXEC sp_alumno_borrar_fisico 26