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
3. (ctrl + shift + ~ ) buat masuk ke terminal vscode
4. npm init -> kemudian isi name, version, desc, etc -> setelah kelar ngisi biasanya akan muncul file package.json
5. install test framework jest -> npm install jest --save-dev
6. npm install -g npx -> npx itu buat runner package yang ada di node_modules
7. npx jest --init -> nantinya akan muncul aggrement kek dibawah ini: \
✔ Would you like to use Jest when running "test" script in "package.json"? … yes \
✔ Choose the test environment that will be used for testing › node \
✔ Do you want Jest to add coverage reports? … yes \
✔ Automatically clear mock calls and instances between every test? … yes \
setelah itu , jest.config.js akan muncul
8. npm install supertest --save -> supertest itu buat handle http request
(request line : post, get, put, etc
request header : content-type, accept, etc
requset body : biasanya dalam bentuk json/xml)
9. touch .env -> membuat file .env , file ini untuk menampung envirotment/baseUrl dari API. set baseUrl=https://reqres.in/ didalam folder .env
10. npm install dotenv --save -> dotenv ini untuk me-loads file .env yang tadi kita buat
11. npm install --save-dev jest-json-schema -> jest-json-schema ini untuk ngehandle expect dari schema validator
12. npm install jest-html-reporter --save-dev -> untuk report hasil test apinya 
tambahkan code ini : 
   reporters: [
     'default',
     'jest-html-reporters'
   ],
   dan 
   uncomment //coverageDirectory: "coverage",
  pada file jest.config.js untuk integrate report htmlnya 
13. Persiapan sudah selesai - selanjutnya lanjut Coding !
14. Ini perubahan untuk percobaan PULL REQUEST - PRIVATE REPO ! Yeah
15. Ini perubahan untuk percobaan PULL REQUEST - PRIVATE REPO ! Yeah - Percobaan KEDUA 
16. Ini perubahan untuk percobaan PULL REQUEST - PUBLIC REPO ! Yeah - Percobaan KETIGA
17. Ini perubahan untuk percobaan PULL REQUEST - PUBLIC REPO ! Yeah - Percobaan KEEMPAT - rejected 
18. Ini perubahan untuk percobaan PULL REQUEST - PUBLIC REPO ! Yeah - Percobaan KELIMA - revisi dari pak setyokun


cekidot : https://setyokun.github.io/post/api-test-with-jest/
