# project name:Nike - Two Page Signup Form with connection to database using axios,ajax with validation form

This project is done with  [Create React App](https://github.com/SivaGopisetti/nike.git).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:1108](http://localhost:1108) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# project name

Nike Ecommerce login page with two page signup form with valiadation in frontend and backend storing in database with given schema by comparing the data for the both frontend and backend...

This application is used for registering new user and if your already an existing user you can login into to website by user data by authenticating that Mainpage will be loaded with products.

# Project Status

Now, This project is currently in development. New users can sucessfully registered by giving personal data after successful registration they login into the website by their login credentials 



# Installation and Setup Instructions
Clone down this repository. You will need node and npm installed globally on your machine.

Installation:
npm install this will install node_module 
note that install node_modules both in nike-frontend and nike-backend.
nodemon module is installed as dev dependencies here
you can install package.json using command npm init --y

To Run Test Suite:
npm test .

To Start Server:
npm start . and this application runs on http://localhost:1108/
 


# folder structure
 contains two folder i.e nike-frontend(front end part) and nike-backend(backend part).
 In nike-frontend(folder):
 src contains Components,helpers,images.
 Components folder contain all the JSX Components which can be reusable.
 Helper folder contains all the helper files which is used for from validation and to post data to backend.

 In nike-backend folder:
 schema folder contain schema part.
 routers folder contains all requests .
 index file contain connection to mongodb.