const schemaRegisterSuccessful = {
    "definitions": {},
    "type": "object",
    "title": "The Root Schema",
    "required": [
      "id",
      "token"
    ],
    "properties": {
      "id": {
        "$id": "#/properties/id",
        "type": "integer",
        "title": "The Id Schema",
        "default": 0,
        "examples": [
          4
        ]
      },
      "token": {
        "$id": "#/properties/token",
        "type": "string",
        "title": "The Token Schema",
        "default": "",
        "examples": [
          "QpwL5tke4Pnpja7X4"
        ],
        "pattern": "^(.*)$"
      }
    }
  }

  const schemaRegisterUnsuccessful ={
    "definitions": {},
    "type": "object",
    "title": "The Root Schema",
    "required": [
      "error"
    ],
    "properties": {
      "error": {
        "$id": "#/properties/error",
        "type": "string",
        "title": "The Error Schema",
        "default": "",
        "examples": [
          "Missing password"
        ],
        "pattern": "^(.*)$"
      }
    }
  }

  module.exports = {
    schemaRegisterSuccessful, schemaRegisterUnsuccessful,
  };