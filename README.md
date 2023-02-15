# storefrontBackend-udacity

### run "npm install" to download all necessary packages

### run "npm run build" to build the project

### run "npm run test" for the unit tests
![image](https://user-images.githubusercontent.com/108857901/219094329-0fa6bb05-7649-4651-b1f0-af8df3d3cde2.png)


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

server running on port 3000
db server running on port 5432

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

![image](https://user-images.githubusercontent.com/108857901/211616742-5501a17f-a176-4f48-80ef-dd460ec20e6d.png)

![image](https://user-images.githubusercontent.com/108857901/211616847-bea4ec1c-980e-42db-8451-d6dfd06a29f0.png)


#unit testing results

### running 'npm run test'

![image](https://user-images.githubusercontent.com/108857901/219094709-1cc77ec7-fe16-4b32-ad7a-693489e2e4e7.png)
![image](https://user-images.githubusercontent.com/108857901/219094875-65c0a116-3244-4945-bff1-4a9c614c06c3.png)




