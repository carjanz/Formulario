<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario de Registro con Validaciones Dinámicas</title>
</head>
<body style="font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f5f5f5;">

    <div style="max-width: 800px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <!-- Encabezado -->
        <header style="border-bottom: 1px solid #eee; padding-bottom: 20px; margin-bottom: 30px;">
            <h1 style="color: #2c3e50; margin-bottom: 10px;">Formulario de Registro con Validaciones Dinámicas</h1>
            <p style="color: #7f8c8d; font-size: 16px; line-height: 1.5;">
                Este es un formulario de registro interactivo desarrollado con Angular que implementa validaciones avanzadas en tiempo real.
            </p>
        </header>

        <!-- Características -->
        <section style="margin-bottom: 30px;">
            <h2 style="color: #3498db; border-bottom: 2px solid #eee; padding-bottom: 8px;">Características Destacadas</h2>
            <ul style="padding-left: 20px;">
                <li style="margin-bottom: 8px;">✅ Validaciones dinámicas según tipo de documento</li>
                <li style="margin-bottom: 8px;">✅ Retroalimentación inmediata al usuario</li>
                <li style="margin-bottom: 8px;">✅ Diseño responsive para todos los dispositivos</li>
                <li style="margin-bottom: 8px;">✅ Validación de formatos específicos</li>
                <li style="margin-bottom: 8px;">✅ Mejor experiencia de usuario</li>
            </ul>
        </section>

        <!-- Vista previa -->
        <section style="margin-bottom: 30px;">
            <h2 style="color: #3498db; border-bottom: 2px solid #eee; padding-bottom: 8px;">Vista Previa</h2>
            <img src="https://i.imgur.com/ejemplo.png" alt="Vista previa del formulario" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
            <p style="font-style: italic; color: #95a5a6; text-align: center;">Imagen ilustrativa</p>
        </section>

        <!-- Tecnologías -->
        <section style="margin-bottom: 30px;">
            <h2 style="color: #3498db; border-bottom: 2px solid #eee; padding-bottom: 8px;">Tecnologías Utilizadas</h2>
            <div>
                <span style="display: inline-block; background: #ecf0f1; padding: 5px 10px; border-radius: 15px; margin: 5px;">Angular 17+</span>
                <span style="display: inline-block; background: #ecf0f1; padding: 5px 10px; border-radius: 15px; margin: 5px;">Reactive Forms</span>
                <span style="display: inline-block; background: #ecf0f1; padding: 5px 10px; border-radius: 15px; margin: 5px;">TypeScript</span>
                <span style="display: inline-block; background: #ecf0f1; padding: 5px 10px; border-radius: 15px; margin: 5px;">CSS Moderno</span>
            </div>
        </section>

        <!-- Instalación -->
        <section style="margin-bottom: 30px;">
            <h2 style="color: #3498db; border-bottom: 2px solid #eee; padding-bottom: 8px;">Instalación</h2>
            <pre style="background: #f8f9fa; padding: 15px; border-radius: 5px; overflow-x: auto;">
git clone https://github.com/tu-usuario/formulario-angular.git
cd formulario-angular
npm install
ng serve</pre>
        </section>

        <!-- Estructura -->
        <section style="margin-bottom: 30px;">
            <h2 style="color: #3498db; border-bottom: 2px solid #eee; padding-bottom: 8px;">Estructura del Código</h2>
            <pre style="background: #f8f9fa; padding: 15px; border-radius: 5px;">
src/
├── app/
│   ├── formulario/
│   │   ├── formulario.component.ts
│   │   ├── formulario.component.html
│   │   └── formulario.component.scss
│   └── app.module.ts</pre>
        </section>

        <!-- Validaciones -->
        <section style="margin-bottom: 30px;">
            <h2 style="color: #3498db; border-bottom: 2px solid #eee; padding-bottom: 8px;">Validaciones Implementadas</h2>
            <table style="width: 100%; border-collapse: collapse;">
                <thead>
                    <tr style="background: #3498db; color: white;">
                        <th style="padding: 10px; text-align: left;">Campo</th>
                        <th style="padding: 10px; text-align: left;">Validaciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 10px;">Nombre/Apellido</td>
                        <td style="padding: 10px;">Solo letras y caracteres especiales</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 10px;">Tipo Documento</td>
                        <td style="padding: 10px;">Selección obligatoria</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 10px;">N° Documento</td>
                        <td style="padding: 10px;">Formato dinámico</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px;">Email</td>
                        <td style="padding: 10px;">Formato válido</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <!-- Contribuciones -->
        <section style="margin-bottom: 30px;">
            <h2 style="color: #3498db; border-bottom: 2px solid #eee; padding-bottom: 8px;">Contribuciones</h2>
            <ol>
                <li style="margin-bottom: 8px;">Haz un fork del proyecto</li>
                <li style="margin-bottom: 8px;">Crea una rama para tu feature</li>
                <li style="margin-bottom: 8px;">Haz commit de tus cambios</li>
                <li style="margin-bottom: 8px;">Haz push a la rama</li>
                <li style="margin-bottom: 8px;">Abre un Pull Request</li>
            </ol>
        </section>

        <!-- Licencia -->
        <section>
            <h2 style="color: #3498db; border-bottom: 2px solid #eee; padding-bottom: 8px;">Licencia</h2>
            <p style="background: #ecf0f1; padding: 15px; border-radius: 5px;">
                Distribuido bajo la licencia MIT. Consulta el archivo <code>LICENSE</code> para más información.
            </p>
        </section>
    </div>

</body>
</html>
