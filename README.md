# MEAN-Trello-clone

Demo Link:

Steps to run the app after cloning <br><br>
1. Run `npm install` to install server file dependencies.

2. Create a config folder and database.js file inside it with following content
  ```
  module.exports={
       database:"mongodb://<yourdbusername>:<yourdbpassword>@ds324410.mlab.com:324410/trello-clone"
  }
  ```
  >The above database url depends on database service you are using. 
  
3. Run `npm start` to start the server

4. Navigate to client folder and do `npm install` to install angular 2 dependencies

5. Once all the dependencies are installed execute `ng build --watch` to run the Angular client
