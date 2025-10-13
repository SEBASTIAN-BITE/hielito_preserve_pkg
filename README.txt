PAQUETE para preservar tu INDEX original y agregar estructura sin borrar nada.

Qué hay aquí:
- index.html  <-- COPIA EXACTA de tu index original (no modificada)
- css/style_extra.css  <-- Estilos nuevos para marketing (se aplican si añades link o inyectas el JS)
- js/main.js  <-- Inyecta style_extra.css automáticamente y añade fallback de imágenes
- images/  <-- imágenes copiadas del zip + placeholder.png
- php/  <-- archivos config/conexion para usar más adelante

Cómo activar mejoras sin tocar index (recomendado):
1) Solo añade esta línea ANTES de </body> en tu index.html:
   <script src="js/main.js"></script>
   (eso inyectará style_extra.css y las mejoras sin borrar nada)

Si quieres, lo hago yo: inserto esa línea al final de index.html y te devuelvo la versión modificada (sólo agrego ese <script>). Dime 'sí, insértalo' y lo hago.

Importante sobre imágenes:
- Asegúrate de que los nombres en index.html coincidan exactamente con los archivos en /images (mayúsculas/minúsculas).
- Si trabajas con Live Server usa rutas relativas 'images/archivo.jpg'. Si con XAMPP puedes usar '/hielito-spring-ice/images/archivo.jpg'.

Descomprimir en C:\xampp\htdocs\hielito-spring-ice\ y abrir http://localhost/hielito-spring-ice/index.html
