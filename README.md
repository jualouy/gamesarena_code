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
(Esto ya esta en este repositiorio, pero es para tener en cuenta)

En npm de Bootswatch copiamos el codigo de estilos sass:

https://www.npmjs.com/package/bootswatch
@import "~bootswatch/dist/darkly/variables";\n
@import "~bootstrap/scss/bootstrap";\n
@import "~bootswatch/dist/darkly/bootswatch";\n

En bootswatch se pueden elegir diferentes themes
https://bootswatch.com/
@import "~bootswatch/dist/[theme]/variables";\n
@import "~bootstrap/scss/bootstrap";\n
@import "~bootswatch/dist/[theme]/bootswatch";\n

(Esto también ya está)
Editar el angular.json en scripts:

"scripts": [
              "node_modules/jquery/dist/jquery.min.js",
              "node_modules/@popperjs/core/dist/umd/popper.min.js",
              "node_modules/bootstrap/dist/js/bootstrap.min.js"
            ]
