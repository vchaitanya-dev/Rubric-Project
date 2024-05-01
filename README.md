# Rubric Converter


#### Table of Contents 
- Introduction
- Installation 
- Getting Started 
- Application Structure 
- Components
- Redux Setup
- API Integration
- Styling 
- Acknowledgements
- Reference

  ### Introduction

Welcome to the Rubric Project Documentation. This document provides an overview Rubric Project application bulit using React, Redux, TypeScript, and SCSS. The application allows used filters and the piechart of the users total, friend, influence and chirpness. 

### Installation 
To get started with the Twubric application, Follow these steps: 

- Clone the repository from Github: 
```
git clone 
```

- Navigate into the project directory :
```
cd currency-converter
````
- Install dependencies using npm or yarn
```
npm install 
```

or 
```
yarn install 
```

This will start the development server and open the application in your default web browser

### Application Structure
The Currency Converter application follows a typical React Project Structure: 
```
twubric-project/
├── public/
├── src/
|   ├── components/
│   |   ├── filters/
|   |   ├── ChirpinessFilter.tsx
|   |   ├── InfluenceFilter.tsx
|   |   ├── FriendFilter.tsx
|   |   ├── TotalFilter.tsx
|   |   ├── StartDateFilter.tsx
|   |   └──── EndDateFilter.tsx
│   |   ├── preloader/
|   |   ├── loader.css
|   |   └─── Loader.tsx
│   |   ├── footer/
|   |   └─── Footer.tsx
│   |   ├── users/
|   |   └─── UserData.tsx
|   ├── Interface/
|   └────── UserData.tsx
|   ├── Layout/
|   └────── Layout.tsx
|   ├── Pages/
|   |   ├── userpage/
|   |   └──── Layout.tsx
|   ├── reducer/
|   └────── dataReducer.tsx
│   ├── App.tsx
│   ├── hooks.ts
│   ├── index.scss
│   ├── main.tsx
│   └── responsive.scss
│   └── vite-env.d.ts
└── .env.production
└── .eslintrc.cjs
└── .gitignore
└── data.json
└── index.html
└── package.json
└── package-lock.json
└── README.md
└── tsconfig.json
└── tsconfig.node.json
└── vite.config.ts

```

### Components
The  Twubric Application consists of serveral components, including:
- User Selector 
- Remove Selector
- Total Filter
- Friend Filter
- Influence Filter
- Chirpness Filter
- Get Users

Each component servers a specific purpose in facilitating Twubric Application and filter for the user on the data


### Redux Setup 
Redux is used for state management in the Twubric application. It helps manage application state and facilitates communicatin between components.

The Redux setup includes reducers and a store:

- Reducers : Define how state changes in response to action
- Store : Configures the Redux store with middleware and initial state.

### API Integration


### Styling
Styling in the Twubric application is achieved using CSS modules.Each component has its own SCSS module, which encapsulates styles and prevent conflicts

### Deployment
The Twubric application can be deployed to various hosting. Simply build the application using follwing command:

```
npm run build
```
or 
```
yarn run build
```

### Acknowledgements
Special thanks to the creators of React and Redux for providing powerful libraries for building user interfaces and managing application state. 


### References 
- [React Documentation](https://legacy.reactjs.org/docs/getting-started.html)
- [Redux Documenatation](https://redux.js.org/tutorials/index)


