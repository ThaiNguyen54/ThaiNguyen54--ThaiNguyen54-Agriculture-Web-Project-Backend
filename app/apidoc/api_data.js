define({ "api": [
  {
    "type": "POST",
    "url": "/register",
    "title": "Create a new user account",
    "version": "1.0.0",
    "name": "AddUserAccount",
    "group": "User",
    "description": "<p>User use this api to create a new account</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "UserName",
            "description": "<p>Name of a user</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "loginName",
            "description": "<p>a unique string</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>unique email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>a string</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/register",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Something from the server</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>Information of created users</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"message\": \"Created Successfully\",\n  \"User\": [\n      {\n          \"UserName\": \"Trong\",\n          \"LoginName\": \"Trong\",\n          \"Password\": \"$2a$10$prj7fTAILea2kUhptzGAf.jJe3.asOaRP62i0ATdZRQRVb0.rTzge\",\n          \"Email\": \"trong123@gmail.com\",\n          \"_id\": \"63424a31bfeed9be13fd9e65\"\n      }\n  ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "409_Conflict",
            "description": "<p>Incorrect Email/Password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 409 Conflict\n{\n  \"message\": \"Incorrect Email/Password\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "/users",
    "title": "Get a list of all users",
    "version": "1.0.0",
    "name": "GetAllUser",
    "group": "User",
    "permission": [
      {
        "name": "administrator"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>json web token to access to data</p>"
          }
        ]
      }
    },
    "description": "<p>Get all users</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/users",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>state of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>something from the server</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>the list of all users' data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"success\": true,\n \"message\": \"List of all users\",\n \"users\": [\n     {\n         \"_id\": \"633e90e356881a06993559f3\",\n         \"UserName\": \"Thanh Le\",\n         \"LoginName\": \"ThanhVe\",\n         \"Password\": \"$2b$10$hkrkTOixirx/4g/bEbgWru.gVfjOYdtq3yirQxDdxAGFEenKqriPC\",\n         \"Email\": \"ThanhVe@gmail.com\"\n     },\n  ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "400_Bad_Request",
            "description": "<p>invalid input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"result\": \"fail\",\n  \"message\": \"invalid input\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "/users/:UserID",
    "title": "Get a user by ID",
    "version": "1.0.0",
    "name": "GetUserById",
    "group": "User",
    "permission": [
      {
        "name": "Every type of user"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>json web token to access to data</p>"
          }
        ]
      }
    },
    "description": "<p>Get one user</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "UserID",
            "description": "<p>ID of a user, on params</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/users/633eb8f0069528b78658b656",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>state of the request</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>something from the server</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>the list of all users' data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n     \"success\": true,\n     \"message\": \"Found one user with id: 633eb8f0069528b78658b656\",\n     \"users\": {\n                 \"_id\": \"633eb8f0069528b78658b656\",\n                 \"UserName\": \"Trong\",\n                 \"LoginName\": \"Trong\",\n                 \"Password\": \"$2a$10$BqqeoYnYcZLGXrK89JHju.j9Ymy1mi3.GrrLpIM1CN6xIUORaMNuS\",\n                 \"Email\": \"trong@gmail.com\"\n     }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500_Internal_Server_Error",
            "description": "<p>Not Found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n     \"success\": false,\n     \"message\": \"Not Found.\",\n     \"error\": \"Cast to ObjectId failed for value \\\"633eb8f0069528b78658b65\\\" (type string) at path \\\"_id\\\" for model \\\"users\\\"\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "routers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/login",
    "title": "Login",
    "version": "1.0.0",
    "name": "login",
    "group": "User",
    "permission": [
      {
        "name": "Every one"
      }
    ],
    "description": "<p>login and get access token</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "loginName",
            "description": "<p>a string</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>a string</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost:3001/login",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>access token of a user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID of a user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "LoginName",
            "description": "<p>login name of a user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "UserName",
            "description": "<p>Name of a user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"token\": \"abc\",\n     \"id\": \"633e90e356881a06993559f3\",\n     \"LoginName\": \"ThanhVe\",\n     \"UserName\": \"Thanh Le\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404_Not_Found",
            "description": "<p>Can not find the login name in the databse</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n     \"code\": 8,\n     \"mess\": \"unavailable\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "routers/user.js",
    "groupTitle": "User"
  }
] });
