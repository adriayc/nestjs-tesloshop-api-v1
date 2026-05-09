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
        - UUID
            $ yarn add uuid
        - Multer types
            $ yarn add -D @types/multer
        - UUID
            $ yarn add uuid
        - Serve static content
            $ yarn add @nestjs/serve-static
        - BCrypt
            $ yarn add bcrypt
            $ yarn add -D @types/bcrypt
        - Passport (authentication)
            $ yarn add @nestjs/passport passport
            $ yarn add @nestjs/jwt passport-jwt
            $ yarn add -D @types/passport-jwt

    - Eliminar dependencias
        + Pritter, Eslint-Config-Prettier Eslint-Plugin-Prettier (optional)
            $ yarn remove prettier eslint-config-prettier eslint-plugin-prettier

    - Nest CLI
        + Crear un nuevo resource (sin archivos de test)
            $ nest g res products --no-spec
                > ? What transport layer do you use? REST API
                > ? Would you like to generate CRUD entry points? (Y/n) y
        + Crear un nuevo module
            $ nest g mo common
        + Crear un nuevo resource (sin archivos de test)
            $ nest g res seed --no-spec
                > ? What transport layer do you use? REST API
                > ? Would you like to generate CRUD entry points? (Y/n) y
        + Crear un nuevo resource (sin archivos de prueba)
            $ nest g res files --no-spec
                > ? What transport layer do you use? REST API
                > ? Would you like to generate CRUD entry points? (Y/n) y
        + Crear un nuevo resource (sin archivos de prueba)
            $ nest g res auth --no-spec
                > ? What transport layer do you use? REST API
                > ? Would you like to generate CRUD entry points? (Y/n) y
        + Crear un nuevo guard (sin archivos de test)
            $ nest g gu auth/guards/userRole --no-spec
        + Crear un nuevo decorator (sin archivos de test y no genera un folder)
            $ nest g d auth/decorators/roleProtected --no-spec --flat

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
                    > POST: http://localhost:3000/api/products                                      Click "Send"
                        > Body | raw (JSON)
                            {
                                "title": "Adriano's shirt",
                                "sizes": ["SM", "M", "L"],
                                "gender": "men",
                                "price": 151.99,
                                "tags": ["shirt", "shirt2"]
                                "images": [
                                    "http://image1.jpg",
                                    "http://image2.jpg"
                                ]
                            }
                - Get All Products
                    > GET: http://localhost:3000/api/products                                       Click "Send"
                    > GET: http://localhost:3000/api/products?limit=10&offset=0                     Click "Send"
                - Get One Product
                    > GET: http://localhost:3000/api/products/{{UUID}}                              Click "Send"
                - Update Product
                    > PATCH: http://localhost:3000/api/products/{{UUID}}                            Click "Send"
                        > Body | raw (JSON)
                            {
                                "price": 200.99,
                                "title": "Adriano's shirtN10",
                                "tags": ["shirt", "shirt2", "shirt3"]
                            }
                - Delete Product
                    > DELETE: http://localhost:3000/api/products/{{UUID}}                           Click "Send"
            * SEED (Click "..." > Add folder > Name: "SEED")
                - Execute Seed
                    > POST: http://localhost:3000/api/seed                                          Click "Send"
                        > Body | raw (JSON)
                            { }
            * Upload (Click "..." > Add folder > Name: "Upload")
                - Upload Product Image
                    > POST: http://localhost:3000/api/files/products                                Click "Send"
                        > Body | Multipart Form
                            Key             Value
                            file > File     {{Select File}}
                - Get Image By Name
                    > GET: http://localhost:3000/api/files/products/{{IMAGE_NAME}}                  Click "Send"
            * User (Click "..." > Add folder > Name: "User")
                - Create User
                    > POST: http://localhost:3000/api/auth/register                                 Click "Send"
                        > Body | raw (JSON)
                            {
                                "email": "adriano@mail.com",
                                "password": "secret123",
                                "fullName": "adriano ayala"
                            }
                - Login User
                    > POST: http://localhost:3000/api/auth/login                                    Click "Send"
                        > Body | raw (JSON)
                            {
                                "email": "adriano@mail.com",
                                "password": "secret123",
                            }
                - Route Private
                    > GET: http://localhost:3000/api/auth/private                                   Click "Send"
                        > Auth > Type: {{BEARER_TOKEN}}
                - Route Private 2
                    > GET: http://localhost:3000/api/auth/private2                                  Click "Send"
                        > Auth > Type: {{BEARER_TOKEN}}

* VSCODE
    - Shortcuts
        + Recargar la ventana (CTRL + SHIFT + P > Search..."Developer: Reload Window")