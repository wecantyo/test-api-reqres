const schemaSingleUser = {
  "definitions": {},
  "type": "object",
  "title": "The Root Schema",
  "required": [
    "data"
  ],
  "properties": {
    "data": {
      "$id": "#/properties/data",
      "type": "object",
      "title": "The Data Schema",
      "required": [
        "id",
        "email",
        "first_name",
        "last_name",
        "avatar"
      ],
      "properties": {
        "id": {
          "$id": "#/properties/data/properties/id",
          "type": "integer",
          "title": "The Id Schema",
          "default": 0,
          "examples": [
            2
          ]
        },
        "email": {
          "$id": "#/properties/data/properties/email",
          "type": "string",
          "title": "The Email Schema",
          "default": "",
          "examples": [
            "janet.weaver@reqres.in"
          ],
          "pattern": "^(.*)$"
        },
        "first_name": {
          "$id": "#/properties/data/properties/first_name",
          "type": "string",
          "title": "The First_name Schema",
          "default": "",
          "examples": [
            "Janet"
          ],
          "pattern": "^(.*)$"
        },
        "last_name": {
          "$id": "#/properties/data/properties/last_name",
          "type": "string",
          "title": "The Last_name Schema",
          "default": "",
          "examples": [
            "Weaver"
          ],
          "pattern": "^(.*)$"
        },
        "avatar": {
          "$id": "#/properties/data/properties/avatar",
          "type": "string",
          "title": "The Avatar Schema",
          "default": "",
          "examples": [
            "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
          ],
          "pattern": "^(.*)$"
        }
      }
    }
  }
}



const schemaListUser = {
  "definitions": {},
  "type": "object",
  "title": "The Root Schema",
  "required": [
    "page",
    "per_page",
    "total",
    "total_pages",
    "data"
  ],
  "properties": {
    "page": {
      "$id": "#/properties/page",
      "type": "integer",
      "title": "The Page Schema",
      "default": 0,
      "examples": [
        2
      ]
    },
    "per_page": {
      "$id": "#/properties/per_page",
      "type": "integer",
      "title": "The Per_page Schema",
      "default": 0,
      "examples": [
        6
      ]
    },
    "total": {
      "$id": "#/properties/total",
      "type": "integer",
      "title": "The Total Schema",
      "default": 0,
      "examples": [
        12
      ]
    },
    "total_pages": {
      "$id": "#/properties/total_pages",
      "type": "integer",
      "title": "The Total_pages Schema",
      "default": 0,
      "examples": [
        2
      ]
    },
    "data": {
      "$id": "#/properties/data",
      "type": "array",
      "title": "The Data Schema",
      "items": {
        "$id": "#/properties/data/items",
        "type": "object",
        "title": "The Items Schema",
        "required": [
          "id",
          "email",
          "first_name",
          "last_name",
          "avatar"
        ],
        "properties": {
          "id": {
            "$id": "#/properties/data/items/properties/id",
            "type": "integer",
            "title": "The Id Schema",
            "default": 0,
            "examples": [
              7
            ]
          },
          "email": {
            "$id": "#/properties/data/items/properties/email",
            "type": "string",
            "title": "The Email Schema",
            "default": "",
            "examples": [
              "michael.lawson@reqres.in"
            ],
            "pattern": "^(.*)$"
          },
          "first_name": {
            "$id": "#/properties/data/items/properties/first_name",
            "type": "string",
            "title": "The First_name Schema",
            "default": "",
            "examples": [
              "Michael"
            ],
            "pattern": "^(.*)$"
          },
          "last_name": {
            "$id": "#/properties/data/items/properties/last_name",
            "type": "string",
            "title": "The Last_name Schema",
            "default": "",
            "examples": [
              "Lawson"
            ],
            "pattern": "^(.*)$"
          },
          "avatar": {
            "$id": "#/properties/data/items/properties/avatar",
            "type": "string",
            "title": "The Avatar Schema",
            "default": "",
            "examples": [
              "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
            ],
            "pattern": "^(.*)$"
          }
        }
      }
    }
  }
}



  module.exports = {
    schemaSingleUser, schemaListUser,
  };