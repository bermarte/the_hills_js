install Yarn<br>
```
npm install -g yarn
```
https://en.reactjs.org/docs/getting-started.html
```
sudo npm install -g create-react-app@1.5.2
create-react-app --help
create-react-app confusion --scripts-version=react-scripts@1.1.4
```
to start the application:<br>
```yarn start``` or ```npm start```

to install bootstrap component in react:<br>
```
yarn add bootstrap@4.0.0
yarn add reactstrap@5.0.0
yarn add react-popper@0.9.2
```
using nmp instead:
```
npm install bootstrap@4.0.0 reactstrap@5.0.0 react-popper@0.9.2 --save
```
install font awesome
```
yarn add font-awesome@4.7.0 --save
```
install Bootstrap's social media buttons
```
yarn add bootstrap-social@5.1.1 --save
```
install router
```
yarn add react-router-dom@4.2.2
```

install redux (also possible npm install...)
```
yarn add redux@3.7.2
yarn add react-redux@5.0.7
yarn add react-redux-form@1.16.8
```
install thunk and logger
```
yarn add redux-thunk@2.2.0
yarn add redux-logger@3.0.6

```
## start the project, dependencies
```
npm start
```
or
```
yarn start
```
build dependencies
```
npm install
```
or (creates also yarn.lock file)
```
yarn install
```
install json server as a global module
```
npm install -g json-server
```
how to use json-server with a delay of 2 seconds on port 3001
```
npx json-server --watch db.json -d 2000 -p 3001
```
or
```
json-server --watch db.json -d 2000 -p 3001
```
if json-server gives error, because it is not found, then follow these steps first
```
sudo su
npm install -g json-server
exit
```
install cross-fetch (a more compatible version of fetch)
```
yarn add cross-fetch@2.1.0
```
install animation packages (react-animation-components needs also prop-types)
```
yarn add react-transition-group@2.3.0
yarn add react-animation-components@3.0.0
yarn add prop-types@15.6.0
```
## deploy
npm run build

