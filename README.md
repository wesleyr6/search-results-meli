# MELI Search results built with React 18 + Typescript 4 and TailwindCSS CLI

This project was built to practice react, typescript, tailwind and responsive web design.

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

`REACT_APP_API_URL=https://meli-express-api.herokuapp.com/api`
`PORT=3000`

### `yarn`

After configured your environment variables you will need to install the dependecies packages.

### `yarn run tailwindcss:watch`

After you have configured your environment variables and installed all the dependencies packages you will need to run the TailwindCSS to build and to watch your CSS changes. TailwindCSS is the most modern CSS Framework to scale large teams [TailwindCSS Website](https://tailwindcss.com/)

### `yarn start`

After that, using another tab in your terminal, you can run the project.
