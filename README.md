Formulario de Registro con Angular
Este proyecto es un formulario de registro reactivo desarrollado con Angular que implementa validaciones avanzadas y retroalimentación en tiempo real para el usuario.

Características principales
Formulario reactivo con validaciones en tiempo real

Validaciones personalizadas para cada campo

Cambio dinámico de validaciones según el tipo de documento seleccionado

Mensajes de error claros y específicos para cada caso

Diseño responsive y accesible

Deshabilitación del botón de envío cuando el formulario es inválido

Campos del formulario
Nombre:

Validación de solo letras (incluye caracteres especiales en español)

Campo obligatorio

Apellido:

Mismas validaciones que el campo Nombre

Tipo de Documento:

Selección entre DNI, Cédula o Pasaporte

Campo obligatorio

Número de Documento:

Validación dinámica según el tipo de documento seleccionado:

DNI: exactamente 8 dígitos

Cédula: entre 6 y 10 dígitos

Pasaporte: entre 6 y 12 caracteres alfanuméricos

Campo obligatorio

Email:

Validación de formato de email estándar

Campo obligatorio

Tecnologías utilizadas
Angular 17+

Reactive Forms

Validaciones personalizadas

CSS moderno con anidamiento

Instalación y uso
Clona el repositorio

Instala las dependencias con npm install

Ejecuta la aplicación con ng serve

Abre tu navegador en http://localhost:4200
