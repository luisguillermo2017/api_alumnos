USE [Matricula]
GO
/****** Object:  StoredProcedure [dbo].[sp_alumno_insertar]    Script Date: 28/08/2024 08:58:07 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE OR ALTER     procedure [dbo].[sp_alumno_insertar]
(@nombre nvarchar(100), @apellidos nvarchar(100), @estado bit)
as
begin
set nocount on

BEGIN TRY

	IF LEN(@nombre) = 0 OR LEN(@apellidos) = 0 OR LEN(@estado) = 0
	BEGIN

		SELECT 'warning' AS msj_tipo, 'Debes ingresar todos los datos solicitados.' AS msj_texto; 

	END
	ELSE
	BEGIN
		
		insert into alumnos values
		(@nombre, @apellidos, @estado)

		SELECT 'success' AS msj_tipo, 'Exito al realizar la acción.' AS msj_texto;  

	END

	

END TRY

BEGIN CATCH

	SELECT 'error' AS msj_tipo, ERROR_MESSAGE() AS msj_texto; 

END CATCH




end

--EXEC sp_alumno_insertar 'Maria Fernanda', 'Badilla Solano'
--EXEC sp_alumno_insertar 'Maria Fernanda', null
--EXEC sp_alumno_insertar 'Maria Fernanda', ''
--select * from alumnos

--Intentar insertar un registro
--Si falla capturar el error