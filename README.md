# Techorbit-IT Backend

This Course Management API provides a complete solution for:

- User authentication and authorization with JWT
- Course creation and management (admin only)
- Course browsing and purchasing system
- Secure payment tracking and user purchase history

Roles:
- Admin: Create, view, and delete courses
- User: Browse courses, purchase courses, view purchase history

##  Installation Guide
- Clone the repository
```bash
git clone https://github.com/Reyad02/Techorbit-IT-backend.git
cd Techorbit-IT-backend
```
- Install dependencies
```bash
npm install
```
- Environment setup
```env
PORT=3000
MONGOOSE_URL=
SALT_ROUNDS=
JWT_SECRET=
JWT_ACCESS_TOKEN_EXPIRED=
JWT_REFRESH_TOKEN_EXPIRED=
```
- Start the application
``` bash
npm run dev
```

##  API Endpoints
### Authentication Endpoints
- Register User
-- POST ```api/user/register```
``` json
// Request Body
{
  "name": "reyad",
  "email": "reyad@example.com",
  "password": "123456",
  "role": "user" // Optional, defaults to "user"
}

// Response (201 Created)
{
    "success": true,
    "message": "User registered in successfully",
    "data": {
        "name": "reyad",
        "email": "reyad@example.com",
        "password": "$2b$10$jhCA5hWseKz7mpp.b2uwQ.DNoKQpjuFytGDVTQ0kp027Kn2klyVPO",
        "role": "user",
        "_id": "68c05ff0308a8c5c08b93670",
        "createdAt": "2025-09-09T17:12:16.827Z",
        "updatedAt": "2025-09-09T17:12:16.827Z",
        "__v": 0
    }
}
```

- Login user
-- POST ```api/user/login```
``` json
{
    "success": true,
    "message": "User logged in successfully",
    "data": {
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGV4YW1wbGUuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzU3NDQxNDc0LCJleHAiOjE3NTc0NDIwNzR9.LoIM9qlE1oy3nLaUB0QJvVpg0Kz5h8kcr9UZq1OSHzo",
        "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGV4YW1wbGUuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzU3NDQxNDc0LCJleHAiOjE3NTgzMDU0NzR9.MMbhN3JUKAmbkzU6N5AYb9BYS4IhPPGOquUWNl9KE_M"
    }
}
```

- Refresh Token
-- POST ```api/user/refresh-token```
``` json
{
    "success": true,
    "message": "Access token refreshed",
    "data": {
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGV4YW1wbGUuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzU3NDQxNjI1LCJleHAiOjE3NTc0NDIyMjV9.WC9vrg0WfVGT5rfRSpiBEvNgAojLGE3g-ZW3hKvek_E"
    }
}
```
- Logout
-- POST ```api/user/logout```
``` json
{
    "success": true,
    "message": "User logged out successfully"
}
```

### Course Endpoints
- Create Course
-- POST ```/api/course/create-course```
``` json
// Request Body
{
  "title": "Introduction to Web Development 3",
  "description": "Learn the fundamentals of web development including HTML, CSS, and JavaScript. Build your first website from scratch!",
  "price": 23,
  "instructor": "Sarah Johnson3"
}

// Response (201 Created)
{
    "success": true,
    "message": "Course created successfully",
    "data": {
        "title": "Introduction to Web Development 3",
        "description": "Learn the fundamentals of web development including HTML, CSS, and JavaScript. Build your first website from scratch!",
        "price": 23,
        "instructor": "Sarah Johnson3",
        "_id": "68c0615a0317af68f957b0e3",
        "createdAt": "2025-09-09T17:18:18.752Z",
        "updatedAt": "2025-09-09T17:18:18.752Z",
        "__v": 0
    }
}
```

- Get all courses
-- GET ```api/course/```
``` json
{
    "success": true,
    "message": "All course retrieved successfully",
    "data": [
        {
            "_id": "68c033c2db54711888ba491b",
            "title": "Introduction to Web Development",
            "description": "Learn the fundamentals of web development including HTML, CSS, and JavaScript. Build your first website from scratch!",
            "price": 49.99,
            "instructor": "Sarah Johnson",
            "createdAt": "2025-09-09T14:03:46.117Z",
            "updatedAt": "2025-09-09T14:03:46.117Z",
            "__v": 0
        },
        {
            "_id": "68c0615a0317af68f957b0e3",
            "title": "Introduction to Web Development 3",
            "description": "Learn the fundamentals of web development including HTML, CSS, and JavaScript. Build your first website from scratch!",
            "price": 23,
            "instructor": "Sarah Johnson3",
            "createdAt": "2025-09-09T17:18:18.752Z",
            "updatedAt": "2025-09-09T17:18:18.752Z",
            "__v": 0
        }
    ]
}
```
- Get single course
-- GET ```api/course/:id```
``` json
{
    "success": true,
    "message": "Course retrieved successfully",
    "data": {
        "_id": "68c0615a0317af68f957b0e3",
        "title": "Introduction to Web Development 3",
        "description": "Learn the fundamentals of web development including HTML, CSS, and JavaScript. Build your first website from scratch!",
        "price": 23,
        "instructor": "Sarah Johnson3",
        "createdAt": "2025-09-09T17:18:18.752Z",
        "updatedAt": "2025-09-09T17:18:18.752Z",
        "__v": 0
    }
}
```

- Delete single course
-- DELETE ```api/course/:id```
``` json
{
    "success": true,
    "message": "Course deleted successfully",
    "data": {}
}
```

### Purchase Endpoints
- Purchase Course
-- POST ```api/purchase```
``` json
// Request Body
{
  "courseId": "67a1b2c3d4e5f67890abcd12",
  "amount": 49.99,
}

// Response (201 Created)
{
  "success": true,
  "message": "Course purchased successfully",
  "data": {
    "_id": "67d8e9f0a1b2c3d4e5f67890",
    "user": "67a1b2c3d4e5f67890abcd13",
    "course": "67a1b2c3d4e5f67890abcd12",
    "amount": 49.99,
    "date": "2024-09-20T10:30:45.123Z",
    "status": "completed"
  }
}
```

- Get User Purchases
-- GET ```api/purchase```
``` json 
{
    "success": true,
    "message": "Your purchased course retrieved successfully",
    "data": [
        {
            "_id": "68c061ff0317af68f957b0ed",
            "userId": {
                "_id": "68c05ff0308a8c5c08b93670",
                "name": "reyad",
                "email": "reyad@example.com",
                "password": "$2b$10$jhCA5hWseKz7mpp.b2uwQ.DNoKQpjuFytGDVTQ0kp027Kn2klyVPO",
                "role": "user",
                "createdAt": "2025-09-09T17:12:16.827Z",
                "updatedAt": "2025-09-09T17:12:16.827Z",
                "__v": 0
            },
            "courseId": {
                "_id": "68c0615a0317af68f957b0e3",
                "title": "Introduction to Web Development 3",
                "description": "Learn the fundamentals of web development including HTML, CSS, and JavaScript. Build your first website from scratch!",
                "price": 23,
                "instructor": "Sarah Johnson3",
                "createdAt": "2025-09-09T17:18:18.752Z",
                "updatedAt": "2025-09-09T17:18:18.752Z",
                "__v": 0
            },
            "amount": 20,
            "date": "2025-09-09T17:21:03.320Z",
            "createdAt": "2025-09-09T17:21:03.320Z",
            "updatedAt": "2025-09-09T17:21:03.320Z",
            "__v": 0
        },
        {
            "_id": "68c062290317af68f957b0f1",
            "userId": {
                "_id": "68c05ff0308a8c5c08b93670",
                "name": "reyad",
                "email": "reyad@example.com",
                "password": "$2b$10$jhCA5hWseKz7mpp.b2uwQ.DNoKQpjuFytGDVTQ0kp027Kn2klyVPO",
                "role": "user",
                "createdAt": "2025-09-09T17:12:16.827Z",
                "updatedAt": "2025-09-09T17:12:16.827Z",
                "__v": 0
            },
            "courseId": {
                "_id": "68c0615a0317af68f957b0e3",
                "title": "Introduction to Web Development 3",
                "description": "Learn the fundamentals of web development including HTML, CSS, and JavaScript. Build your first website from scratch!",
                "price": 23,
                "instructor": "Sarah Johnson3",
                "createdAt": "2025-09-09T17:18:18.752Z",
                "updatedAt": "2025-09-09T17:18:18.752Z",
                "__v": 0
            },
            "amount": 20,
            "date": "2025-09-09T17:21:45.574Z",
            "createdAt": "2025-09-09T17:21:45.574Z",
            "updatedAt": "2025-09-09T17:21:45.574Z",
            "__v": 0
        }
    ]
}
```

## Features Explanation

### 1. JWT Authentication
- **Secure token-based authentication** using access and refresh tokens
- **Role-based authorization** (user/admin) with middleware protection
- **Protected routes** with authentication validation

### 2. Course Management
- **Admin privileges**: Create and delete courses
- **User access**: Browse all courses and view specific course details
- **Data integrity** with proper schema validation and references

### 3. Purchase System
- **Purchase history tracking** with user and course references
- **Historical accuracy** by storing purchase amount separately from course price

### 4. Security Features
- **Password hashing** with bcrypt for secure credential storage
- **HTTP-only cookies** for refresh tokens to prevent XSS attacks
- **Environment variable configuration** for sensitive data protection
- **Input validation** with Zod to prevent injection attacks
- **Centralized error handling** for consistent error responses

### 5. Bonus Features Implemented
- **Access Token and Refresh Token** implementation for enhanced security
- **Secure logout** with token invalidation on server side
- **Comprehensive error handling** with appropriate HTTP status codes
- **Input validation and sanitization** to prevent malformed data


## Note: 
I was thinking of keeping the access token on the frontend, maybe in localStorage or some client-side storage, since it’s mainly used for making API requests.
For the refresh token, I’d keep it in an HTTP-only cookie set by the server, so it’s safer and not directly accessible from JavaScript.
