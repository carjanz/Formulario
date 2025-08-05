Formulario de Registro con Validaciones Dinámicas

Descripción del Proyecto
Este es un formulario de registro interactivo desarrollado con Angular que implementa validaciones avanzadas en tiempo real. El formulario incluye campos para información personal con validaciones específicas para cada tipo de dato.

Características Destacadas

✅ Validaciones dinámicas que cambian según el tipo de documento seleccionado

✅ Retroalimentación inmediata al usuario con mensajes de error claros

✅ Diseño responsive que se adapta a diferentes dispositivos

✅ Validación de formato para nombres, apellidos y correo electrónico

✅ Experiencia de usuario mejorada con estados visuales para campos válidos/inválidos

Tecnologías Utilizadas
- Angular 17+
- Reactive Forms Module
- Validadores personalizados
- CSS moderno con variables y anidamiento
- TypeScript para la lógica de validación

Instalación
- bash
- git clone https://github.com/carjanz/Formulario.git
- cd formulario-angular
- npm install
- ng serve

Validaciones Implementadas
- Nombre/Apellido:	Solo letras y caracteres especiales (ñ, acentos)
- Tipo Documento:	Selección obligatoria
- N° Documento:	Formato dinámico según tipo seleccionado
- Email:	Formato válido de correo electrónico
