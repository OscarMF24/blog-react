
![Logo](https://res.cloudinary.com/practicaldev/image/fetch/s--Qhu3PUis--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/y63ie8bmktwik5w3mhlg.png)


# API Node and React

This project consists of an API developed with Node.js and a user interface created with React to perform CRUD operations (Create, Read, Update, Delete) the blog posts

## Installation

Before you start, make sure to have installed:
- [MongoDB](https://www.mongodb.com/docs/manual/installation/)
- [Node](https://nodejs.org/en/download)
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file in the server folder.

Copy the .env.example file and rename it to .env located in the server folder.

`PORT`

`SECRET_KEY`

`MONGO_URI`


## Run Locally

Clone the project

```bash
  git clone https://github.com/OscarMF24/blog-react.git
```

Go to the project directory

```bash
  cd your_route/blog-react
```

1. **Install dependencies of the server:**

```bash
  cd sever
  npm install
```

*Backend server running:*
```bash
  npm run dev
```
2. **Install dependencies of the client:**
```bash
  cd client
  npm install
```
*Frontend server running:*
```bash
  npm run dev
```
Both servers must be running.
## Tech Stack

**Client:** React, TailwindCSS

**Server:** Node, Express


## API Reference

#### Get all post

```http
  GET http://localhost:3000/api/posts
```


#### Get post

```http
  GET http://localhost:3000/api/post/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. ID of the post to search |


#### Save post

```http
  POST http://localhost:3000/api/posts
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | **Required**.|
| `author`      | `string` | **Required**.|
| `description`      | `string` | **Required**.|
| `createAt`      | `timestamps` | **Default**.|
| `updateAt`      | `timestamps` | **Default**.|


#### Update post

```http
  PATCH http://localhost:3000/api/post/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. ID of the post to updated |

#### Destroy post

```http
  DELETE http://localhost:3000/api/post/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. ID of the post to deleted |

#### Search post
*It only works to query the api (It must have at least one parameter)*
```http
  GET http://localhost:3000/api/posts/search
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | **Optional**. for search |
| `author`      | `string` | **Optional**. for search |
| `description`      | `string` | **Optional**. for search |
