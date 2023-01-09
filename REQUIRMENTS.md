nd backend have agreed meet the requirements of the application.

## API Endpoints

#### Products

- Index 'products/' [GET]
- Show 'products/:id' [GET]
- Create 'products/' [POST](token)
- Products by category 'products/cat/:category' [GET]
- Delete: 'products/:id [DELETE]

#### Users

- Index 'users/' [GET](token)
- Show 'users/:id' [GET](token)
- Create 'users/create' [POST](token)
- Delete [token required]: 'users/:id' [DELETE](token)

#### Orders

-Index [token required]: 'orders/:user_id' [GET](token)
Current Order by user [token required]: 'orders/current/:user_id' [GET](token)
Completed Orders by user [token required]: 'orders/completed/:user_id' [GET](token)
Active Orders by user [token required]: 'orders/active/:user_id' [GET](token)
Update order's status [token required]: 'orders?status=<status>&orderId=<order id> [PUT](token)
Delete [token required]: 'orders/:id [DELETE](token)

## Data Shapes

#### Product

- id
- name
- price
- category

#### User

- id
- firstName
- lastName
- password

#### Orders

- id
- id of each product in the order
- quantity of each product in the order
- user_id
- status of order (active or complete)
