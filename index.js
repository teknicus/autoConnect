config = {
    "db": "mongodb://localhost:27017",
    "endpoint_root": "server",
    "server": {
        "port": 3000,
        "address": "0.0.0.0"
    },
    "accessControl": {
        "allowOrigin": "*",
        "allowMethods": "GET,POST,PUT,DELETE,HEAD,OPTIONS",
        "allowCredentials": false
    },
    "dbAccessControl": {
        "foo_database": ["collection1", "collection2"],
        "bar_database": ["collection2", "collection3"],
        "zoo_database": [],
    },
    "mongoOptions": {
        "serverOptions": {
        },
        "dbOptions": {
            "w": 1
        }
    },
    "humanReadableOutput": true,
    "urlPrefix": "",
    "schema": {
        "foo_database": {
            "collection1": {
                "definitions": {},
                "$schema": "http://json-schema.org/draft-06/schema#",
                "$id": "http://json-schema.org/draft-06/schema#",
                "type": "object",
                "properties": {
                    "value": {
                        "$id": "/properties/value",
                        "type": "boolean",
                        "title": "Foo boolean value",
                        "description": "An explanation about the purpose of this instance.",
                        "default": false,
                        "examples": [
                            false
                        ]
                    }
                }
            }
        }
    }
}	

var mongodbRest = require('mongodb-rest/server.js');
mongodbRest.startServer(config);