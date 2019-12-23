const schemaCreate = {
    "definitions": {},
    "type": "object",
    "title": "The Root Schema",
    "required": [
      "name",
      "job",
      "id",
      "createdAt"
    ],
    "properties": {
      "name": {
        "$id": "#/properties/name",
        "type": "string",
        "title": "The Name Schema",
        "default": "",
        "examples": [
          "morpheus"
        ],
        "pattern": "^(.*)$"
      },
      "job": {
        "$id": "#/properties/job",
        "type": "string",
        "title": "The Job Schema",
        "default": "",
        "examples": [
          "leader"
        ],
        "pattern": "^(.*)$"
      },
      "id": {
        "$id": "#/properties/id",
        "type": "string",
        "title": "The Id Schema",
        "default": "",
        "examples": [
          "651"
        ],
        "pattern": "^(.*)$"
      },
      "createdAt": {
        "$id": "#/properties/createdAt",
        "type": "string",
        "title": "The Createdat Schema",
        "default": "",
        "examples": [
          "2019-12-18T07:42:23.055Z"
        ],
        "pattern": "^(.*)$"
      }
    }
  }

  module.exports = {
    schemaCreate,
  };