# JWT Basics
Secure your routes with JWT. You are able to add, modify & delete only if your JWT token is valid.

### Installation
- ```npm install```

### Postman
- http://localhost:3000/api/agents or http://localhost:3000/api/agents/id
- Click header tab
  - Authorization
  - Bearer (your JWT Token)
- Click on Send
- You should get user data if there's one in your DB

### cURL

#### Replace User IDs accordingly

##### Create A User
```
curl -i -H "Content-Type: application/json" -d '{
  "name" : "Irvin",
  "codename": 123

}' http://localhost:3000/api/agents
```

##### View a User
```
curl http://localhost:3000/api/agents/5705ddee3a443a574aa63b26 --header "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiSmFtZXMgQm9uZCIsImNvZGVuYW1lIjoiMDA3IiwiaWQiOiI1NzA1Y2ZmODY2NzFjZThkNDc5ZWRkNzYiLCJpYXQiOjE0NjAwMDIyMjB9.uvMa-EjrlcJp1bgNNg73uuLlJt_55z_ygHQIYDGNEJs"
```

##### Delete a User
```
curl -X "DELETE" --header "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiSmFtZXMgQm9uZCIsImNvZGVuYW1lIjoiMDA3IiwiaWQiOiI1NzA1Y2ZmODY2NzFjZThkNDc5ZWRkNzYiLCJpYXQiOjE0NjAwMDIyMjB9.uvMa-EjrlcJp1bgNNg73uuLlJt_55z_ygHQIYDGNEJs" http://localhost:3000/api/agents/570de9f89d254d06d16c0af0
```
