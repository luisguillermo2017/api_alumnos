USE [Matricula]
GO
/****** Object:  StoredProcedure [dbo].[sp_alumno_actualizar]    Script Date: 28/08/2024 08:53:57 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE OR ALTER   procedure [dbo].[sp_alumno_actualizar]
(@nombre nvarchar(100), @apellidos nvarchar(100), @estado bit, @id int)
as
begin
set nocount on

--Comprobar si existen registros

	BEGIN TRY

		IF LEN(@nombre) = 0 OR LEN(@apellidos) = 0 OR LEN(@estado) = 0 OR LEN(@id) = 0
		BEGIN

			SELECT 'warning' AS msj_tipo, 'Debes ingresar todos los datos solicitados.' AS msj_texto; 

		END
		ELSE IF EXISTS (SELECT 1 FROM alumnos a WHERE a.id_alumno = @id)
		BEGIN
			--Si hay datos, actualizar dicha información
			update alumnos 
			set nombre = @nombre, apellidos = @apellidos, estado = @estado
			where id_alumno = @id
 
			SELECT 'success' AS msj_tipo, 'Exito al realizar la acción.' AS msj_texto;  
		END

		ELSE
		BEGIN
			--Si no hay datos, se devuelve un mensaje indicandolo
			SELECT 'warning' AS msj_tipo, 'No hay datos para mostrar con el id proporcionado.' AS msj_texto; 
		END

	END TRY

	BEGIN CATCH

		SELECT 'error' AS msj_tipo, ERROR_MESSAGE() AS msj_texto; 

	END CATCH


end

--select * from alumnos

--EXEC sp_alumno_actualizar 'Sofia Veronica', 'Valverde Quiros', true, 3