# Distilled Paths API

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

**Distilled Paths** is a Nest.js application providing REST API for the corresponding [Ionic/Angular PWA](https://distilled-paths.netlify.app/). It's hooked to PostgreSQL database for data persistence via TypeORM. 

## Quick Start

1. `npm install`
1. `npm start`<sup>1</sup>

*<sup>1</sup> You will need to add `.env` file with necessary [environment variables](#obfuscated-environment-variables) to the root folder when working with the app locally*

## Project Structure

## Obfuscated Environment Variables

You need to create a `.env` file with the main environment variables required to run this project before starting to work with it:

```
DB_TYPE=DataBaseType
DB_HOST=DataBaseHostAddress
DB_PORT=DataBasePort
DB_USERNAME=DataBaseUserName
DB_PASSWORD=DataBasePassword
DB_DATABASE=DataBaseName
```

## Deployment

The `master` branch of this respository is automatically deployed [to Heroku](https://distilled-paths.herokuapp.com/) where it's hosted along with the connected database.
