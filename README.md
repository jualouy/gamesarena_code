# Link de Producción 
https://jualouy.github.io/gamesarena_prod/
(se puede ver el demo funcionando)

# Link de Repositorio:
https://github.com/jualouy/gamesarena_code

# Dependencias Utilizadas

# Angular Cli
https://angular.io/cli

# Bootswatch
https://www.npmjs.com/package/bootswatch

Como bootstrap todavía depende de jquery instalar así:
npm i bootswatch bootstrap jquery @popperjs/core

# ngx-pagination:
https://www.npmjs.com/package/ngx-pagination

# Datos a tener en cuenta para correr en localhost:
(Esto ya está en este repositiorio, pero es para tener en cuenta)

En npm de Bootswatch copiamos el código de estilos sass:

https://www.npmjs.com/package/bootswatch

@import "~bootswatch/dist/darkly/variables";

@import "~bootstrap/scss/bootstrap";

@import "~bootswatch/dist/darkly/bootswatch";

En bootswatch se pueden elegir diferentes themes

https://bootswatch.com/

@import "~bootswatch/dist/[theme]/variables";

@import "~bootstrap/scss/bootstrap";

@import "~bootswatch/dist/[theme]/bootswatch";

(Esto también ya está)

Editar el angular.json en scripts:

"scripts": [
              "node_modules/jquery/dist/jquery.min.js",
              "node_modules/@popperjs/core/dist/umd/popper.min.js",
              "node_modules/bootstrap/dist/js/bootstrap.min.js"
            ]
# Funcionalidades:

Los filtros funcionan anidados y en el input se puede buscar por nombre y plataforma, para buscar por plataforma se puede escribir por ejemplo PC y luego enter, y también se pueden utilizar los filtros de ASC y DESC por puntaje junto con la búsqueda PC, lo mismo por nombre.
