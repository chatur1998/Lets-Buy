Sure! Here is the updated README with the hosted Vercel link included.

---

# E-Commerce Product List App

A React-based e-commerce application with filtering, infinite scrolling, and cart functionality. Built with TypeScript, Tailwind CSS, Vite, and Axios.

## Features

- Product display with infinite scroll
- Category and price range filters
- Add products to cart
- Cart modal with total price
- Responsive design

## Live Demo

Check out the live demo [here](https://ecom-lets-buy.vercel.app/).

## Installation

### Prerequisites

- Node.js (v14+)
- npm or yarn

### Steps

1. Clone the repository:

```bash
git clone https://github.com/your-username/e-commerce-product-list-app.git
cd e-commerce-product-list-app
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open your browser at `http://localhost:3000`.

## Project Structure

```
src/
├── components/
│   ├── CartModal.tsx
│   ├── Filter.tsx
│   ├── Loader.tsx
│   ├── ProductCard.tsx
│   └── ProductList.tsx
├── utils/
│   ├── hooks.ts
│   └── types.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Key Components

- **ProductList:** Displays products with infinite scrolling.
- **ProductCard:** Shows product details and an "Add to Cart" button.
- **Filter:** Dropdowns for category and price range filtering.
- **CartModal:** Displays cart items and total price.
- **Loader:** Loading spinner.

## Hooks

- **useProducts:** Fetches and manages product data and state, including infinite scrolling.

## Types

- **types.ts:** Contains TypeScript type definitions for the project.

## API

Using the [Fake Store API](https://fakestoreapi.com/) for product data.

## Contributing

1. Fork the repo.
2. Create a branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

MIT License

---

Feel free to modify as needed!
