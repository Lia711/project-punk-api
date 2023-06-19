# Punk API Beers 

React application that takes data from Punk API to display the different beers.

## Features

- switching between pages, going forwards and backwards and well as back to the home page
- filters for filtering displayed results by age, alcohol content and acidity (multiple filters can be used at once)
- search bar that matches searched letters to titles of beers to be displayed
- option to click on each beer that takes you to a page with more information on the selected beer

### Files

- components folder includes different reusable components for the website, such as the grid of dispalyed beers, the navigation controls, the search bar, the home (main) page, and the filters
- containers folder includes the container of an individual beer when clicked to display more information
- app.jsx that contains the routing of the application as well as handling the API fetch, the application of filters and search bar, and navigation between pages

