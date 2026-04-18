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

    - Agregar dependencias
        -  Environment vars
            $ yarn add @nestjs/config
        - TypeORM (Postgres)
            $ yarn add @nestjs/typeorm typeorm pg
        - Class-Validator and Class-Transformer
            $ yarn add class-validator class-transformer

    - Eliminar dependencias
        + Pritter, Eslint-Config-Prettier Eslint-Plugin-Prettier (optional)
            $ yarn remove prettier eslint-config-prettier eslint-plugin-prettier

    - Nest CLI
        + Crear un nuevo resource (sin archivos de test)
            $ nest g res products --no-spec
                > ? What transport layer do you use? REST API
                > ? Would you like to generate CRUD entry points? (Y/n) y

    - Postgres (Docker)
        + Run commands
            $ docker compose up -d          // Construir, re-crear e iniciar todo los servicios

    - TablePlus
        + Create new connection for Postgres DB (Click '+' | New Connection)
            > Name: Teslo Shop API
            > PostgreSQL
            > DB host/socket: localhost                 > Post: 5432 (by default) 
            > DB's user: postgres (by default)          > Password: {{POSTGRES_PASSWORD}} (.env file)
            > DB's name: {{POSTGRES_DB}} (.env file)
            CLick 'Test' | 'Save' | 'Connect'

    - Postman
        + Crete a new Workspace (Click "New" | "Workspace" > "Blank workspace")
            > Name: "Ax2CDev"
              Click "Create"
        + Create a new collection (Click "+" | "Blank collection")
            > Name: "nestjs-car-dealership-api"

        + HTTP requests
            * TEST
                > GET: http://localhost:3000                                Click 'Send'
            * Product (Click "..." > Add folder > Name: "Product")
                - Create Product
                    > POST: http://localhost:3000/api/products                      Click "Send"
                        > Body | raw (JSON)
                            {
                                "title": "Adriano's shirt",
                                "sizes": ["SM", "M", "L"],
                                "gender": "men",
                                "price": 151.99
                            }
                - Get All Products
                    > GET: http://localhost:3000/api/products                       Click "Send"
                - Get One Product
                    > GET: http://localhost:3000/api/products/{{UUID}}              Click "Send"
                - Delete Product
                    > DELETE: http://localhost:3000/api/products/{{UUID}}           Click "Send"

* VSCODE
    - Shortcuts
        + Recargar la ventana (CTRL + SHIFT + P > Search..."Developer: Reload Window")