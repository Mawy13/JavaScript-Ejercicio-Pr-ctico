onclick="nuevoParrafo()"

function nuevoParrafo() {
     var contenido = document.getElementById('contenido');
     var texto = document.getElementById("texto").value;
     contenido.innerHTML = contenido.innerHTML + '<p>' + texto + '</p>';}

     document.getElementById('imagen').onchange = function(evt) {
        var entradaArchivo = evt.target,
            archivos = entradaArchivo.files;
        if (FileReader && archivos && archivos.length) {
            var imagen = new FileReader();
            imagen.onload = function() {
                var etiquetaImg = document.createElement("img");
                etiquetaImg.setAttribute('src', imagen.result);
                etiquetaImg.setAttribute('width', '200px');
                etiquetaImg.setAttribute('height', '180px');
                var contenido = document.getElementById('contenido');
                contenido.appendChild(etiquetaImg);
            }
            imagen.readAsDataURL(archivos[0]);
        }
    }
    function imprimir(){
        var divContents = document.getElementById("contenido").innerHTML;
        var a = window.open('', '', 'height=500, width=500');
        a.document.write('<html>');
        a.document.write('<link rel="stylesheet" href="css/bootstrap.min.css" type="text/css" />');
        a.document.write('<body > <h1>Resultado</h1> <br>');
        a.document.write(divContents);
        a.document.write('</body></html>');
        a.document.close();
        a.print();
        }
            
        function crearTitulo(texto) {
            let titulo = document.createElement("h1"); 
            titulo.textContent = texto; 
            document.body.appendChild(titulo); 
        }

        function crearEnlace(url, texto) {
            let enlace = document.createElement("a"); // Crear un elemento a
            enlace.href = url; // Asignar la URL
            enlace.textContent = texto; // Asignar el texto del enlace
            enlace.target = "_blank"; // Abrir en una nueva pestaña
            document.body.appendChild(enlace); // Agregarlo al cuerpo del documento
            document.body.appendChild(document.createElement("br")); // Salto de línea
        }