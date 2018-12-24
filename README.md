# BeerFinder

## Brief Description

An app for browsing BrewDog's Punk API with some handy features.

## Requirements

### General requirements

- [x] User should at all times know that something is being loaded (e.g. spinner/fake content)
- [x] Application should be responsive and work both on desktop and mobile devices
- [x] Use this API: https://punkapi.com/documentation/v2
- [x] Your app should look more or less like this: https://drive.google.com/file/d/0B3Gr69JeT5_jbnhoWmZjRF94VzA (bear in mind it’s more like a mockup and should not be treated as a final design)
- [x] We should be able to run your app using only two commands: npm install && npm start

### Listing view

- [x] User should see 20 beers on the first page
- [x] Each beer on the list should display: name, image, tagline
- [x] On bigger devices items should appear in a grid and on smaller resolutions they should wrap in a column
- [x] User should be able to see more beers as she/he scrolls down (infinite scroll)
- [x] If there are no more items to load user should see that’s the end of the list and no more requests should be triggered

### Details view

- [x] Details view should be a modal accessible by clicking on any item on the listing view or by manually entering the page using it’s URL address (e.g. /details/:id)
- [x] The modal should contain the following informations: name, tagline, description, image, brewer_tips, ibu, abv
- [x] Additionally modal should also list up to 3 similar beers (use available API to get beers with similar IBU/ABV/EBC)

## Added custom features

- [x] Custom beer finder, that builds search query from user's preferences
- [x] Ability to add beers to 'favorites' via localStorage
- [x] Ability to search for a certain beer
- [x] Further utilized API in detailed view route (more recommendations, ingredients list)
- [x] Error handling (wrong input, no search results)
- [x] Pretty D.R.Y and formatted for readabilty code with comments where necessary
- [x] More routes and improved layout over the requirements and mocks
- [x] Made from scratch in 72h ;)
- [x] And waaaaay more good stuff!

### Further development

- [ ] Some jest/enzyme snapshot tests and even better error handling
- [ ] Further reduction of components' size and reusability improvements
- [ ] Theme toggle from light to dark/high contrast

### Prerequisites

If you want to make some changes, first you have to have [Node with npm](https://nodejs.org/en/) installed.

### Installation

After cloning this repository, in the project directory, you have to install dependencies:

```
npm i
```

Then you should run:

```
npm start
```

App should be running in your browser. Give it a try!

## Built With

- [React](https://reactjs.org/) - king of all JS frameworks
- [React Router](https://reacttraining.com/react-router/) - for routing
- [React Burger Menu](https://github.com/negomi/react-burger-menu) and [React Responsive](https://github.com/contra/react-responsive) - for better mobile experience
- [Semantic UI React](http://react.semantic-ui.com/) - legendary UI framework wrapped with React
- [CRA](https://github.com/facebook/create-react-app) for [Webpack](https://webpack.js.org/), [Babel](https://babeljs.io/) and all the good stuff
- [Express](https://expressjs.com/) - Web framework for [Node.js](https://nodejs.org/en/) which needs no introduction
