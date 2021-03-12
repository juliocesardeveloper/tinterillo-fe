let initialState = {
    "body": {
        "took": 26,
        "timed_out": false,
        "_shards": {
            "total": 1,
            "successful": 1,
            "skipped": 0,
            "failed": 0
        },
        "hits": {
            "total": {
                "value": 5,
                "relation": "eq"
            },
            "max_score": 0.12907705,
            "hits": [
                {
                    "_index": "constitucion_politica_de_colombia",
                    "_type": "_doc",
                    "_id": "const01000001",
                    "_score": 0.12907705,
                    "_source": {
                        "headline": {
                            "title": "TITULO I",
                            "name": "DE LOS PRINCIPIOS FUNDAMENTALES"
                        },
                        "chapter": {
                            "title": "null",
                            "name": "null"
                        },
                        "article": {
                            "name": "Artículo 1",
                            "content": [
                                "Artículo 1. Colombia es un Estado social de derecho, organizado en forma de República unitaria, descentralizada, con autonomía de sus entidades territoriales, democrática, participativa y pluralista, fundada en el respeto de la dignidad humana, en el trabajo y la solidaridad de las personas que la integran y en la prevalencia del interés general."
                            ]
                        }
                    }
                },
            ]
        }
    },
    "statusCode": 200,
    "headers": {
        "content-type": "application/json; charset=UTF-8",
        "content-length": "5256"
    },
    "meta": {
        "context": null,
        "request": {
            "params": {
                "method": "POST",
                "path": "/constitucion_politica_de_colombia/_search",
                "body": "{\"query\":{\"simple_query_string\":{\"query\":\"derechos\"}}}",
                "querystring": "",
                "headers": {
                    "user-agent": "elasticsearch-js/7.11.0 (linux 4.4.0-19041-Microsoft-x64; Node.js v15.4.0)",
                    "x-elastic-client-meta": "es=7.11.0,js=15.4.0,t=7.11.0,hc=15.4.0",
                    "content-type": "application/json",
                    "content-length": "54"
                },
                "timeout": 30000
            },
            "options": {

            },
            "id": 4
        },
        "name": "elasticsearch-js",
        "connection": {
            "url": "http://localhost:9200/",
            "id": "http://localhost:9200/",
            "headers": {

            },
            "deadCount": 0,
            "resurrectTimeout": 0,
            "_openRequests": 0,
            "status": "alive",
            "roles": {
                "master": true,
                "data": true,
                "ingest": true,
                "ml": false
            }
        },
        "attempts": 0,
        "aborted": false
    }
}

export default initialState;