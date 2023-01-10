# storefrontBackend-udacity

### run "npm install" to download all necessary packages

### run "npm run build" to build the project

### run "npm run test" for the unit tests

### run "npm run db-up" and "npm run db-down" for up and down migrations

### run "npm run lint" and "npm run prettier" for linting

## .env variables

{
POSTGRES_HOST = 127.0.0.1
POSTGRES_DB = storefront
POSTGRES_TEST_DB = storefront_test
POSTGRES_USER = user1
POSTGRES_PASSWORD = 123
ENV = dev
BCRYPT_PASSWORD = 123
SALT_ROUNDS = 10
TOKEN_SECRET = 123
}

### access the main api route on 'localhost:3000/api/(the endpoint you want to access)'

####To create a user

send a post request to "localhost:3000/api/users/create"
and send the body as a json object for example :
{
"firstName": "omar",
"lastName": "hashem",
"userName": "omar1",
"password": "123"
}

the id will be auto added
and the token will automatically be signed

you can then copy the token string, set the auth type to "Bearer token" and paste the token string

then you can send a get request to "localhost:3000/api/users"
and it should display all created users

the rest of the api endpoints can be tested out with this method
refer to the REQUIRMENTS.md for more information about the data shapes and request types



![image](https://user-images.githubusercontent.com/108857901/211616318-12c4703e-a5eb-4a26-b8b7-6a29a338a5b3.png)

