# NetflixGPT Project

## Important Points:

- Create React App
- Configure and Use Tailwind CSS
- Header
- Routing
- Login Form
- Sign Up Form
- Form Validation
- What is useRef() Hook for email and password validation(It can be done using State Variable also)
- Configure Firebase for Authentication
- Deploy your app to firebase
- Create a SignUp User Account
- Configure Firebase Authentication for Sign Up and Sign In form with Firebase Sign In and Sign Up API
- After Sign or Sign Up store User data to Redux Store
- Implemented Sign out
- Update profile API

## Features:

- Login/Sign Up Page
  - Sign In/Sign Up Page
  - Redirect to Browser Page
- Browse Page(This page only comes after authentication)

  - Header
  - Main Movie Section
    - Trailer in background
    - Title and Description
    - Movie Suggestion
      - Movies List \* n

- Netflix GPT

  - Search Bar
  - Movie Suggestions

## Redux Store

- When user Sign up/Sign In store data in User store using Redux
  - Install @reduxjs/toolkit and react-redux library
  - Create a redux store in Util folder appStore.js
    - use configureStore from RTK
  - Create userSlice.js in util folder
    - use createSlice from RTK

## Deployment:

- Deploy on Firebase Steps:
  - Open terminal in VS code
  - firebase login
  - firebase init
  - Go to Hosting : Confirgure files for Firebase Hosting and Optionally set up Github Action Deploy
  - Press Space bar to select and Press Enter
  - Use and Existing Project
  - select project name
  - public directory as : build
  - Configure a SPA : No
  - Setup automatic builds and deploy with Github : No
  - press Enter
  - To Deploy run commands :
    - npm run build
    - firebase deploy
    - It will give the URL
