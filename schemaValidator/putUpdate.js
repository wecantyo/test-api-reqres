const schemaUpdate = {
    "definitions": {},
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$id": "http://example.com/root.json",
    "type": "object",
    "title": "The Root Schema",
    "required": [
      "name",
      "job",
      "updatedAt"
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
          "zion resident"
        ],
        "pattern": "^(.*)$"
      },
      "updatedAt": {
        "$id": "#/properties/updatedAt",
        "type": "string",
        "title": "The Updatedat Schema",
        "default": "",
        "examples": [
          "2019-12-22T06:32:25.638Z"
        ],
        "pattern": "^(.*)$"
      }
    }
  }

  module.exports = {
      schemaUpdate,
  }