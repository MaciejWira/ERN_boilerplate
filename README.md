Boilerplate for ERN app.

- Create React App on the Front End
- node.js + Express for backend
- all in Typescript

DEV
- Front End - npm run start
  - inits Create React App at localhost:3000
  - proxy set for localhost:8080 in package.json
- Back End - npm run dev
  - inits server at localhost:8080

DEPLOY
- Front End - npm run build
- Back End - npm run build
- additional
  - Back End build clears the directory and creates fresh deploy package
  - move Front End build to the build directory of Back Backend
  - npm run start ( run from back_end directory )
    - inits server at localhost:8080
