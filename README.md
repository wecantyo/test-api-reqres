# Automation Testing API with framework Jest
> **endpoint from https://reqres.in/**

Requirment to run repo :
1. Install Node.js

How to use this test :
- Step 1 : Clone this Repo in local
- Step 2 : type `npm install` in terminal 
- Step 3 : type `npm run test` to run api testing
- Step 4 : type `npm run report` to run report api testing

========================================================================================
### Step by Step Memulai API Testing dengan Jest 

1. Install Node.js (sudo apt-get install nodejs - ubuntu)
2. bikin folder -> masuk ke ide kesayanganmu (saya pake vscode)
3. `ctrl + shift + ~` buat masuk ke terminal vscode
4. `npm init` >> kemudian isi name, version, desc, etc -> setelah kelar ngisi biasanya akan muncul file package.json
5. `npm install jest --save-dev` >> install test framework jest
6. `npm install -g npx` >> npx itu buat runner package yang ada di node_modules
7. `npx jest --init` >> nantinya akan muncul aggrement kek dibawah ini: \
`✔ Would you like to use Jest when running "test" script in "package.json"? … yes` \
`✔ Choose the test environment that will be used for testing › node` \
`✔ Do you want Jest to add coverage reports? … yes` \
`✔ Automatically clear mock calls and instances between every test? … yes` \
setelah itu , jest.config.js akan muncul
8. `npm install supertest --save` >> supertest itu buat handle http request
(request line : post, get, put, etc
request header : content-type, accept, etc
requset body : biasanya dalam bentuk json/xml)
9. `touch .env` >> membuat file .env , file ini untuk menampung envirotment/baseUrl dari API. oh iya disini kita pake reqres.in untuk rest-apinya ya. kemudian set `baseUrl=https://reqres.in/` didalam folder .env
10. `npm install dotenv --save` >> dotenv ini untuk me-loads file .env yang tadi kita buat
11. `npm install --save-dev jest-json-schema` >> jest-json-schema ini untuk ngehandle expect dari schema validator
12. `npm install jest-html-reporters --save-dev` >> untuk report hasil test apinya 
tambahkan code ini : 
```js
   reporters: [
     'default',
     'jest-html-reporters'
   ],
```   
   dan uncomment ` //coverageDirectory: "coverage", `\
  pada file jest.config.js untuk integrate report htmlnya \
13. tambahkan config ini `"report": "google-chrome jest_html_reporters.html"` didalam file *package.json* dibawah code ini`    "test": "jest",`\
14. bikin folder *__tests__* kemudian didalamnya bikin file *getUser.js* \
15. salin code dibawah ini : \
```javascript

//endpoint 
const request = require('supertest');
const env = require('dotenv').config();
const api = request(process.env.baseUrl);
const getUser =  (id) => api.get(`/api/users/${id}`);

//jest json schema
const matchers  = require('jest-json-schema').matchers;
expect.extend(matchers);

//schema validator >> schema validator ini bisa kalian generate dari web ini : https://jsonschema.net/
const schemaUser = {
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

//body validator
const bodyUser = {
    "data": {
        "id": 2,
        "email": "janet.weaver@reqres.in",
        "first_name": "Janet",
        "last_name": "Weaver",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
    }
}

//request dan validate response(expect)
describe('Get User Scenario', () => {
    test('Get Single user', async () => {
    const response = await getUser(2);
    expect(response.status).toEqual(200);
    expect(response.body).toMatchSchema(schemaUser);
    expect(response.body).toEqual(bodyUser);
    });
});

```
16. run test >> `npm run test` 
17. report test >> `npm run report`
18. finish :)
19. perubahan dari branch modify-readme

cekidot : https://setyokun.github.io/post/api-test-with-jest/
