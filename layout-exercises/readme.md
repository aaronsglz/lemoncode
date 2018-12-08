# Layout exercises

1. Crear una paleta de colores dinámica.
    - Usar el lenguaje SASS para crear distintos temas de paletas de colores.
    - La idea es partir de un color base, y a partir de ese color generar 4 colores más oscuros de manera gradual, y cuatro colores más claros de manera gradual.
    - Para comprobar que todo esta funcionando como se espera utilizar el siguiente html:

    ```html
    <div>Darken 4</div>
    <div>Darken 3</div>
    <div>Darken 2</div>
    <div>Darken 1</div>
    <div>Base color</div>
    <div>Lighten 1</div>
    <div>Lighten 2</div>
    <div>Lighten 3</div>
    <div>Lighten 4</div>
    ```

> Para este ejercicio se puede utilizar cualquier estructura de SASS que se considere necesaria. El html para mostrar resultados deberá ser modificado con clases.

2. Crear dos temas distintos y mostrar los resultados en una página. Los cambios en el tema afectan a las siguientes características:
    - Color
    - Fuente
    - Border radius
    - Shadow box

> Para visualizar los cambios debería ser suficiente importar un tema u otro en el fichero de estilos principal.

3. Crear la barra de navegación de la imagen usando flexbox.
    - El html es abierto completamente, es decir crear las estructuras necesarias que se crean convenientes.
    - La barra de navegación responde a distintas resoluciones. Utilizar media queries para conseguir este resultado.

4. Usar el CSS grid y flexbox para implementar el patrón layout shifter: [https://www.lukew.com/ff/entry.asp?1514](https://www.lukew.com/ff/entry.asp?1514)
    - Se valorará el uso de SASS.
    - Los break points de las media queries están abiertos. Se valorará el uso de unidades relativas para las mismas.
    - Pensar en el espacio que se distribuye, no en el contenido.

