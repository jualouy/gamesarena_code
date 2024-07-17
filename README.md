# Games Arena

Develop a front end application which would let the users help list and browse
games developed for different platforms conveniently.
Minimum Requirement
● Use of Web API to fetch games details.
○ Utilise Response Parameters:
[ title, platform, score, genre, editors_choice ].
○ Implement functionality to list games in a web page.
● Visually interactive responsive design listing all the games.
● Submit Screenshot, Source code & Instructions.
Plus Points
● A feature to Search (via name).
● Implement Sort feature (to filter through ‘score’ in ascending and descending
order).

Extra Work
● Implement feature to sort games based on platform.(List on PS games or any
other platforms).
● Add autocomplete feature to Search games conveniently .
● Custom elegant design, fonts and icons to make web app more user-friendly.
● Use your imagination and add features which would make things easier for
end users.

Guide
● Games API: http://starlord.hackerearth.com/gamesarena
● Ideal Frontend Stack:
● Angular, HTML, CSS.

Coding Challenge

● Good if you can work around Bootstrap or Material Design.
Application can be built with use of client-side scripting and need not require any
backend.

Wireframe MVP / Reference Structure
Mockup image with instructions:
App Page I — Home page comprising list of games.

Note: Mockup design is just a reference made available to kickstart the design
process, you are free to come up with your own design, we always admire creativity.
Structure / Data Parameters:
● title, platform, score, genre, editors_choice
● title — ‘title of the game’
● platform — name of the platform for which this game is designed.
● score — games rating score.
● genre — genre of the game.
● editors_choice — A value indicating whether this game was editor’s choice
or not.

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
