# NGO Backend API

## Setup

1. **Clone**  
  ```
   git clone https://github.com/sanku351/ngo-backend.git
   cd ngo-backend
   ```

2. **Install**
  ```
    npm install
  ```

3. **ENV**
```
cp .env
# edit .env with your MONGO_URI and ADMIN_TOKEN
```

4. **Run**
  ```
    npm run dev
  ```

## API Endpoints
1. **Register user**
```
POST /api/register
Content-Type: application/json

Body:
{
  "name": "Alice",
  "email": "alice@example.com",
  "phone": "1234567890",
  "role": "volunteer"
}
```

**Response**
```
{
  "name": "Alice",
  "email": "alice@example.com",
  "phone": "1234567890",
  "role": "volunteer"
}
```

2. **Get all users (admin only)**
```
GET /api/users?adminToken=yoursecrettoken
```

**Response**
```
{
  "count": 3,
  "users": [
    {
      "_id": "68919369be9de14995133d32",
      "name": "Alice",
      "email": "alice@example.com",
      "phone": "1234567890",
      "role": "volunteer",
      "createdAt": "2025-08-05T05:15:21.027Z",
      "__v": 0
    },
    {
      "_id": "6891896a410fcbd206a5f596",
      "name": "Xyz",
      "email": "xyz@gmail.com",
      "phone": "9004002417",
      "role": "volunteer",
      "createdAt": "2025-08-05T04:32:42.897Z",
      "__v": 0
    },
    {
      "_id": "68918957410fcbd206a5f592",
      "name": "Abc",
      "email": "abc@gmail.com",
      "phone": "9004002418",
      "role": "intern",
      "createdAt": "2025-08-05T04:32:23.508Z",
      "__v": 0
    }
  ]
}
```
