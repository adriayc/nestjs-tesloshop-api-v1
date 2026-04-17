TESLO-SHOP API (NestJS, Postgres with TypeORM, JWT and OpenAPI with Swagger)

* Inilizar la app (Back-End)
    - Instalar Nest CLI
        $ npm i -g @nestjs/cli
    
    - Crear un nuevo proyecto
        $ nest new tesloshop-api
            > ? Which package manager would you ❤️  to use? yarn
        $ cd tesloshop-api
        $ yarn install                  // Install dependencies
        $ yarn run start                // Development
        $ yarn run start:dev            // Watch mode

    - Eliminar dependencias
        + Pritter, Eslint-Config-Prettier Eslint-Plugin-Prettier (optional)
            $ yarn remove prettier eslint-config-prettier eslint-plugin-prettier

    - Postman
        + Crete a new Workspace (Click "New" | "Workspace" > "Blank workspace")
            > Name: "Ax2CDev"
              Click "Create"
        + Create a new collection (Click "+" | "Blank collection")
            > Name: "nestjs-car-dealership-api"

        + HTTP requests
            * TEST
                > GET: http://localhost:3000                                Click 'Send'

* VSCODE
    - Shortcuts
        + Recargar la ventana (CTRL + SHIFT + P > Search..."Developer: Reload Window")