# json-server-base

Esse é o repositório com a base de JSON-Server + JSON-Server-Auth já configurada, o repositorio foi editado para a atividade 5A04 .

## Endpoints

A API tem um total de x endpoints, tendo como objetivo o Usuario cadastrar os animes que ele assistiu e fazer uma avaliação

### Cadastro

POST /register

### Login

POST /login

## Animes recomendados

É possivel ver a lista de animes que foram recomendados utilizando o endpoint:

`GET /animeRecommended - FORMATO DA RESPOSTA - STATUS 200`

```
  json
[
    {
      "name": "Naruto",
      "type": "shounen",
      "userId": 2,
      "id": 1
    },
    {
      "name": "Boku no Hero",
      "type": "shounen",
      "userId": 2,
      "id": 2
    },
    {
      "name": "Bleach",
      "type": "shounen",
      "grade": 10,
      "userId": 2,
      "id": 3
    }
  ]
```

Para cadastrar um novo anime a lista de recomendações você pode usar o endpoint :

`POST /animeRecommended - FORMATO DA REQUISIÇÃO`

```json
{
  "name": "Naruto",
  "type": "shounen",
  "grade": 10,
  "userId": 2
}
```

Authorization:

`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlMkB0ZXN0ZS5jb20iLCJpYXQiOjE2MzUxOTQzNzAsImV4cCI6MTYzNTE5Nzk3MCwic3ViIjoiMiJ9.647-iCgyx6vgRIHRI1sc1ghE2wBy9rDbmpW20JB5Km8`

Para ver a lista de mangas recomendados você pode acessar o endpoint :
`GET /mangaRecommended - `

Authorization:

`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlMkB0ZXN0ZS5jb20iLCJpYXQiOjE2MzUxOTQzNzAsImV4cCI6MTYzNTE5Nzk3MCwic3ViIjoiMiJ9.647-iCgyx6vgRIHRI1sc1ghE2wBy9rDbmpW20JB5Km8`

`FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "name": "Bleach",
  "type": "shounen",
  "grade": 10,
  "userId": 2,
  "id": 3
}
```

Token necessário :

`FORMATO DA RESPOSTA - STATUS 401`

```json
"Missing token"
```

`POST /mangaRecommended - FORMATO DA REQUISIÇÃO`

```json
{
  "name": "Naruto",
  "type": "shounen",
  "grade": 10
}
```

Authorization:

`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlMkB0ZXN0ZS5jb20iLCJpYXQiOjE2MzUxOTQzNzAsImV4cCI6MTYzNTE5Nzk3MCwic3ViIjoiMiJ9.647-iCgyx6vgRIHRI1sc1ghE2wBy9rDbmpW20JB5Km8`

`FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "name": "Bleach",
  "type": "shounen",
  "grade": 10,
  "id": 3
}
```

Token necessário :

`FORMATO DA RESPOSTA - STATUS 401`

```json
"Missing token"
```
