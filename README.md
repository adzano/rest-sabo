# Backend Services For Bangkit Capstone C23-PS298 - SaBo App
Hi folks👋
This repo contains our RESTful Backend API services that runs on [Node.js](https://nodejs.org/)

## Library used🧩
- ✅[ExpressJS](https://expressjs.com/) - used as backend framework for our api to run.
- ✅[JWT (JSON Web Token)](https://jwt.io/) - used for token authentication in each http request.
- ✅[MySQL2](https://www.npmjs.com/package/mysql2) - used for connection with our database services in our cloud VM.
- ✅[Bcrypt](https://www.npmjs.com/package/bcrypt) - used for securing user generated password for enhancing security.

## How to Use👨‍💻
- Clone this repository to your machine.
- Change database configuration in`./config/database.js` with your database service connection address.
- Open terminal and run `npm install` to install all required dependencies.
- Run `npm run start`.
- Voilà, our backend services runs like magic✨

## Deploying Service🚀
In order to use this remotely on a server, you can directly deploy this repo to Google Cloud's Platform as a Service product called App Engine. To deploy, simply follow this steps:
- Open [GCP Console](https://console.cloud.google.com) and login first.
- Activate Cloud Shell and then open it up.
- Now simply do a `git clone` to this repo.
- Once all files are copied, run `gcloud app deploy`.
- Open the link provided and use it as your endpoint. Works like a charm🤝

## Documentation📑
In order to use and integrate our backend services with frontend, you can refer to our [Swagger API Documentation](https://c23-ps298.github.io/sabo-apidoc/).
