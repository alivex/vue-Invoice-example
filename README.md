# vm-invoice

This is my solution to a FrontEnd challenge. It's not complete, it serves as a demo of most aspects required to build such application. Other missing features can be implemented following similar methodology.

Topics: 
- Component architecture: - we count different types of components:
    - Layout: global layout for the application
    - Views: used as containers for each modules
    - Templates: are components that render as view, it serves as an interface between higher and lower order components
    - components: reusable elements that can be reused in more than one place.

- State management: managing app module such as device  (Desktop vs. Mobile), dialog status and content (open vs. close ). Also, invoice module used to reset forms, and refresh table when create or update events occur. (See ./store)

- Responsiveness: it is managed throughout the application using mixin, resize library, and store. (See ./mixin, ./store/app.js)

- Testing Strategy: both unit and end-to-end testings are done through automaticly using Jest and NightWatchJS frameworks. Also, integration testing should be done to testing interafaces between components.

- User Experience and Design: using best practices in UI patterns (Optimistic UI, keep-alive, animated transition)

- Application architecture: as a Single page application (views, middlewares, utils, Binding, Routing, Ajax requests...) with respect to Modularisation, High order components, Refactoring, Clean code...

- VueJS Eco: 

  - 1 Vue instance based on task description
  - vue-router - routing management
  - vuex - state management
  - element-ui - UI toolkit
  - Styling - scss
  - Utility function (middlewares, validators, animators, formaters, filters)
  - Test
    - Unit testing: using Jest
    - e2e testing: using Nightwatch

- Implementing new feature walkthrough:

To consider (is it new module?):
  - dependencies
  - state
  - routing 
  - API interaction
  - middleware
  - tests
  
  - Vertical slicing - introducing new aspects:
    - view
    - components
    - utilities
    - styling
    - tests

- Assumptions
  - API
  - Localization support

- Missing:
    - Documentation
    - Testing
    - icons
    - Improve Error Handling

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### TODO: write end-to-end tests
```
yarn test:e2e
```

### Run your unit tests
```
yarn test:unit
```

### Author
Amine Lasfar

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
