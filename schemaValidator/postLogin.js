const schemaLoginSuccessful = {
    "definitions": {},
    "type": "object",
    "title": "The Root Schema",
    "required": [
      "token"
    ],
    "properties": {
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

  const schemaLoginUnsuccessful = {
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
    schemaLoginSuccessful,
    schemaLoginUnsuccessful,
  };