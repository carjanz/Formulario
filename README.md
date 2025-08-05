<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario de Registro con Validaciones Dinámicas</title>
    <style>
        :root {
            --primary-color: #4a6fa5;
            --secondary-color: #166088;
            --accent-color: #4fc3f7;
            --error-color: #e74c3c;
            --success-color: #2ecc71;
            --text-color: #333;
            --light-gray: #f5f5f5;
            --border-radius: 8px;
            --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            --transition: all 0.3s ease;
            --card-bg: #ffffff;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: var(--text-color);
            background-color: #f0f2f5;
            padding: 20px;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr;
            gap: 30px;
        }

        @media (min-width: 992px) {
            .container {
                grid-template-columns: 1fr 1fr;
            }
        }

        .project-card {
            background: var(--card-bg);
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            padding: 30px;
            margin-bottom: 30px;
        }

        .project-header {
            margin-bottom: 25px;
            border-bottom: 2px solid var(--light-gray);
            padding-bottom: 15px;
        }

        .project-header h1 {
            color: var(--primary-color);
            margin-bottom: 10px;
            font-size: 28px;
        }

        .project-header p {
            color: #666;
            font-size: 16px;
        }

        .features-list {
            margin: 20px 0;
        }

        .feature-item {
            display: flex;
            align-items: center;
            margin-bottom: 12px;
            font-size: 15px;
        }

        .feature-item::before {
            content: "✅";
            margin-right: 10px;
        }

        .tech-badges {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin: 20px 0;
        }

        .badge {
            background-color: var(--light-gray);
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 500;
        }

        .preview-image {
            width: 100%;
            border-radius: var(--border-radius);
            margin: 20px 0;
            box-shadow: var(--box-shadow);
            border: 1px solid #ddd;
        }

        .code-block {
            background-color: #f8f9fa;
            border-radius: var(--border-radius);
            padding: 15px;
            margin: 15px 0;
            font-family: 'Courier New', monospace;
            font-size: 14px;
            overflow-x: auto;
        }

        .structure-tree {
            background-color: #f5f5f5;
            padding: 15px;
            border-radius: var(--border-radius);
            font-family: monospace;
            line-height: 1.8;
        }

        .validations-table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }

        .validations-table th, .validations-table td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
        }

        .validations-table th {
            background-color: var(--primary-color);
            color: white;
        }

        .validations-table tr:nth-child(even) {
            background-color: #f2f2f2;
        }

        .contribution-steps {
            margin: 20px 0;
            padding-left: 20px;
        }

        .contribution-steps li {
            margin-bottom: 10px;
        }

        .license-info {
            background-color: var(--light-gray);
            padding: 15px;
            border-radius: var(--border-radius);
            margin-top: 20px;
            font-size: 14px;
        }

        .section-title {
            color: var(--secondary-color);
            margin: 25px 0 15px;
            font-size: 22px;
            border-bottom: 2px solid var(--light-gray);
            padding-bottom: 8px;
        }

        @media (max-width: 768px) {
            .project-card {
                padding: 20px;
            }
            
            .project-header h1 {
                font-size: 24px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="project-card">
            <div class="project-header">
                <h1>Formulario de Registro con Validaciones Dinámicas</h1>
                <p>Este es un formulario de registro interactivo desarrollado con Angular que implementa validaciones avanzadas en tiempo real. El formulario incluye campos para información personal con validaciones específicas para cada tipo de dato.</p>
            </div>

            <h2 class="section-title">Características Destacadas</h2>
            <div class="features-list">
                <div class="feature-item">Validaciones dinámicas que cambian según el tipo de documento seleccionado</div>
                <div class="feature-item">Retroalimentación inmediata al usuario con mensajes de error claros</div>
                <div class="feature-item">Diseño responsive que se adapta a diferentes dispositivos</div>
                <div class="feature-item">Validación de formato para nombres, apellidos y correo electrónico</div>
                <div class="feature-item">Experiencia de usuario mejorada con estados visuales para campos válidos/inválidos</div>
            </div>

            <h2 class="section-title">Vista Previa</h2>
            <img src="https://i.imgur.com/ejemplo.png" alt="Vista previa del formulario" class="preview-image">
            <p><em>Imagen ilustrativa</em></p>

            <h2 class="section-title">Tecnologías Utilizadas</h2>
            <div class="tech-badges">
                <span class="badge">Angular 17+</span>
                <span class="badge">Reactive Forms Module</span>
                <span class="badge">Validadores personalizados</span>
                <span class="badge">CSS moderno con variables</span>
                <span class="badge">TypeScript</span>
            </div>

            <h2 class="section-title">Instalación</h2>
            <div class="code-block">
                git clone https://github.com/tu-usuario/formulario-angular.git<br>
                cd formulario-angular<br>
                npm install<br>
                ng serve
            </div>

            <h2 class="section-title">Estructura del Código</h2>
            <div class="structure-tree">
                src/<br>
                ├── app/<br>
                │   ├── formulario/<br>
                │   │   ├── formulario.component.ts    # Lógica del formulario<br>
                │   │   ├── formulario.component.html  # Template del formulario<br>
                │   │   └── formulario.component.scss  # Estilos específicos<br>
                │   └── app.module.ts                  # Módulo principal
            </div>

            <h2 class="section-title">Validaciones Implementadas</h2>
            <table class="validations-table">
                <thead>
                    <tr>
                        <th>Campo</th>
                        <th>Validaciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Nombre/Apellido</td>
                        <td>Solo letras y caracteres especiales (ñ, acentos)</td>
                    </tr>
                    <tr>
                        <td>Tipo Documento</td>
                        <td>Selección obligatoria</td>
                    </tr>
                    <tr>
                        <td>N° Documento</td>
                        <td>Formato dinámico según tipo seleccionado</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>Formato válido de correo electrónico</td>
                    </tr>
                </tbody>
            </table>

            <h2 class="section-title">Contribuciones</h2>
            <p>Las contribuciones son bienvenidas. Por favor sigue estos pasos:</p>
            <ol class="contribution-steps">
                <li>Haz un fork del proyecto</li>
                <li>Crea una rama para tu feature (<code>git checkout -b feature/AmazingFeature</code>)</li>
                <li>Haz commit de tus cambios (<code>git commit -m 'Add some AmazingFeature'</code>)</li>
                <li>Haz push a la rama (<code>git push origin feature/AmazingFeature</code>)</li>
                <li>Abre un Pull Request</li>
            </ol>

            <h2 class="section-title">Licencia</h2>
            <div class="license-info">
                Distribuido bajo la licencia MIT. Consulta el archivo <code>LICENSE</code> para más información.
            </div>
        </div>
    </div>
</body>
</html>
