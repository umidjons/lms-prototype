# QA

#@ Administration

### Create

Request:

```bash
curl -X PUT \
  http://localhost:3333/questions-manage/ \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -d '{
	"question": "Fourth Question",
	"answers": [
		{
			"text": "Answer 1"
		},
		{
			"text": "Answer 2"
		},
		{
			"text": "Answer 3",
			"isCorrect": true
		}
	]
}'
```

Response:

```json
{
    "error": null,
    "result": {
        "id": "5cac3566806612070e567cc1"
    }
}
```

### Update

Request:

```bash
curl -X POST \
  http://localhost:3333/questions-manage/ \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -d '{
    "id": "5cac2f6b93ebf03e451be665",
    "question": "Third Question",
    "answers": [
        {
            "text": "Answer 1"
        },
        {
            "text": "Answer 2",
            "isCorrect": true
        },
        {
            "text": "Answer 3",
            "isCorrect": false
        }
    ]
}'
```

Response:

```json
{
    "error": null,
    "result": {
        "id": "5cac2f6b93ebf03e451be665"
    }
}
```

Not found response:

```json
{
    "error": "QA not found",
    "result": null
}
```

ID not specified response:

```json
{
    "error": "ID does not specified",
    "result": null
}
```

### List

Request:

```bash
curl -X GET \
  http://localhost:3333/questions-manage/ \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache'
```

Response:

```json
{
    "error": null,
    "result": [
        {
            "_id": "5cac2d969640792b5ae3e8b8",
            "text": "First Question",
            "answers": [
                {
                    "isCorrect": false,
                    "_id": "5cac2d969640792b5ae3e8ba",
                    "text": "Answer 1"
                },
                {
                    "isCorrect": true,
                    "_id": "5cac2d969640792b5ae3e8b9",
                    "text": "Answer 2"
                }
            ],
            "createdAt": "2019-04-09T05:28:54.418Z",
            "updatedAt": "2019-04-09T05:28:54.418Z",
            "__v": 0
        },
        {
            "_id": "5cac2f3d93ebf03e451be661",
            "text": "Second Question",
            "answers": [
                {
                    "isCorrect": true,
                    "_id": "5cac2f3d93ebf03e451be664",
                    "text": "Answer 1"
                },
                {
                    "isCorrect": false,
                    "_id": "5cac2f3d93ebf03e451be663",
                    "text": "Answer 2"
                },
                {
                    "isCorrect": false,
                    "_id": "5cac2f3d93ebf03e451be662",
                    "text": "Answer 3"
                }
            ],
            "createdAt": "2019-04-09T05:35:57.064Z",
            "updatedAt": "2019-04-09T05:35:57.064Z",
            "__v": 0
        }
    ]
}
```

### Get One

Request:

```bash
curl -X GET \
  http://localhost:3333/questions-manage/5cac2f6b93ebf03e451be665 \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache'
```

Response:

```json
{
    "error": null,
    "result": {
        "_id": "5cac2f6b93ebf03e451be665",
        "text": "Third Question",
        "answers": [
            {
                "isCorrect": false,
                "_id": "5cac3585806612070e567cc7",
                "text": "Answer 1"
            },
            {
                "isCorrect": true,
                "_id": "5cac3585806612070e567cc6",
                "text": "Answer 2"
            },
            {
                "isCorrect": false,
                "_id": "5cac3585806612070e567cc5",
                "text": "Answer 3"
            }
        ],
        "createdAt": "2019-04-09T05:36:43.484Z",
        "updatedAt": "2019-04-09T06:02:45.578Z",
        "__v": 2
    }
}
```

Not found response:

```json
{
    "error": "QA not found",
    "result": null
}
```