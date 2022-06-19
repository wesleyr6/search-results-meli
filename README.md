<h1 align="center">MELI Search Results (React 18 + Typescript 4 + TailwindCSS)</h1>

<p align="center">
  <a href="https://dashboard.heroku.com/pipelines/0176bf73-fe17-4c45-9cd7-9d942095bb64/tests" target="_blank">
    <img src="https://meli-react-badge.herokuapp.com/last.svg" />
  </a>
  <a href="https://meli-react-dev.herokuapp.com/" target="_blank">
    <img src="https://img.shields.io/badge/-development-red" />
  </a>
  <a href="https://meli-react.herokuapp.com/" target="_blank">
    <img src="https://img.shields.io/badge/-production-purple" />
  </a>
</p>

This project was built to practice react, typescript, tailwind and responsive web design.

## Requirements

- node 16.X
- npm 7
- vscode (include extensions)

### VSCode Extensions

- ESLint
- Prettier

## Packages used

- react (version 18)
- typescript (version 4)
- react-router-dom (to configure our routers)
- axios (to fetch our APIs)
- react-helmet (to manage all of our changes to the document head)
- tailwindcss (css framework)
- gzipper (to compress our build files)
- eslint with airbnb styleguide (code pattern)
- prettier (code style)
- commitlint (commit pattern)
- husky (used to improve our commits with commitlint when commit/push)
- lint-staged (to run linters against staged git files)
- react-lazy-load-image-component (used to perform images)

## Backend

The backend was built in NodeJS with Express as a bridge between our frontend side and MELI's API.

[https://github.com/wesleyr6/search-results-meli-api](https://github.com/wesleyr6/search-results-meli-api)

## Demo

### First Page

The first page only contains the Header with a searchbar that you can use it to search a product you want to see:

[https://meli-react.herokuapp.com/](https://meli-react.herokuapp.com/)

### Results Page

The results page doest not include a filter neither a paginator. It only shows the first 4 results found and a breadcrumb with the most relevant category based on your search.

The list of results include a product price in Argentinian Pesos, a title, an icon which represents "Free Shipping" and the city where this product is being sold.

[https://meli-react.herokuapp.com/items?search=Apple](https://meli-react.herokuapp.com/items?search=Apple)

### Details Page

The details page is used to see the full details of a product. It shows the condition of the product (new, used or not specified), the units sold, title, the product price in Argentinian Pesos, a button to buy the product (It does not work, only illustration) and a product description.

[https://meli-react.herokuapp.com/items/MLA931737710](https://meli-react.herokuapp.com/items/MLA931737710)

## How to run the project

First of all, you need to configure your environment variables creating a `.env` file at the root of the project

### Environment Variables

```
REACT_APP_API_URL=https://meli-express-api.herokuapp.com/api
PORT=3000
```

### Install the dependecies packages

After configured your environment variables you will need to install the dependecies packages running `yarn`.

### Run TailwindCSS

After you have configured your environment variables and installed all the dependencies packages you will need to run `yarn run tailwindcss:watch` to build and to watch your CSS changes. TailwindCSS is the most modern CSS Framework to scale large teams [TailwindCSS Website](https://tailwindcss.com/)

### Run the Project

After that, using another tab in your terminal, you can start the project running `yarn start`.
