const schemaSingleResource = {
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
          "name",
          "year",
          "color",
          "pantone_value"
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
          "name": {
            "$id": "#/properties/data/properties/name",
            "type": "string",
            "title": "The Name Schema",
            "default": "",
            "examples": [
              "fuchsia rose"
            ],
            "pattern": "^(.*)$"
          },
          "year": {
            "$id": "#/properties/data/properties/year",
            "type": "integer",
            "title": "The Year Schema",
            "default": 0,
            "examples": [
              2001
            ]
          },
          "color": {
            "$id": "#/properties/data/properties/color",
            "type": "string",
            "title": "The Color Schema",
            "default": "",
            "examples": [
              "#C74375"
            ],
            "pattern": "^(.*)$"
          },
          "pantone_value": {
            "$id": "#/properties/data/properties/pantone_value",
            "type": "string",
            "title": "The Pantone_value Schema",
            "default": "",
            "examples": [
              "17-2031"
            ],
            "pattern": "^(.*)$"
          }
        }
      }
    }
  }

const schemaListResource = {
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
          1
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
            "name",
            "year",
            "color",
            "pantone_value"
          ],
          "properties": {
            "id": {
              "$id": "#/properties/data/items/properties/id",
              "type": "integer",
              "title": "The Id Schema",
              "default": 0,
              "examples": [
                1
              ]
            },
            "name": {
              "$id": "#/properties/data/items/properties/name",
              "type": "string",
              "title": "The Name Schema",
              "default": "",
              "examples": [
                "cerulean"
              ],
              "pattern": "^(.*)$"
            },
            "year": {
              "$id": "#/properties/data/items/properties/year",
              "type": "integer",
              "title": "The Year Schema",
              "default": 0,
              "examples": [
                2000
              ]
            },
            "color": {
              "$id": "#/properties/data/items/properties/color",
              "type": "string",
              "title": "The Color Schema",
              "default": "",
              "examples": [
                "#98B2D1"
              ],
              "pattern": "^(.*)$"
            },
            "pantone_value": {
              "$id": "#/properties/data/items/properties/pantone_value",
              "type": "string",
              "title": "The Pantone_value Schema",
              "default": "",
              "examples": [
                "15-4020"
              ],
              "pattern": "^(.*)$"
            }
          }
        }
      }
    }
  }

  
  module.exports = {
    schemaSingleResource, schemaListResource,
  };