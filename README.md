## Project Title
# React Product Catalog Filter & Sort Demo

## Project Overview
This project, `React Product Catalog Filter & Sort Demo`, is a functional example of a Single Page Application (SPA) built with **React**. It demonstrates core frontend capabilities for displaying a list of products with interactive filtering and sorting features. Moving beyond its initial "dummy" state, this application now allows users to filter products by various categories and sort them by price, showcasing a practical implementation of dynamic data manipulation in a React environment. It serves as a clear starting point for developing interactive product listings or similar data-driven interfaces.

## Components / Classes / Functions
The application's functionality for displaying, filtering, and sorting products is primarily managed within the `Home` component and utilizes a reusable `ItemCard` component.

*   **`Home.jsx` (Component)**:
    *   **Purpose**: This is the main component responsible for rendering the product catalog. It orchestrates the display, filtering, and sorting of items.
    *   **State Management**:
        *   Manages the `filter` state using `useState`, which tracks the currently selected product category (e.g., 'All', 'Electronics', 'Apparel').
        *   Manages the `sortBy` state using `useState`, which tracks the current sorting order for prices (e.g., 'none', 'lowToHigh', 'highToLow').
    *   **Filtering Logic**: Dynamically filters the `items` data based on the `filter` state, displaying only products that match the selected category.
    *   **Sorting Logic**: Applies sorting to the `filteredItems` array based on the `sortBy` state. Users can sort products by price from 'Low to High' or 'High to Low'.
    *   **Rendering**: Renders a list of `ItemCard` components, passing each `filteredItems` object as a prop. It also provides UI elements (buttons, select dropdown) for category filtering and price sorting.
*   **`ItemCard.jsx` (Component)**:
    *   **Purpose**: A reusable sub-component within `Home.jsx` dedicated to displaying the details of a single product.
    *   **Props**: Accepts an `item` object as a prop, which contains information like product name, price, category, etc.
    *   **Rendering**: Presents the product's information in a visually appealing card format.
*   **`items` (Data Source)**:
    *   An array of product objects, implicitly imported into `Home.jsx`, serving as the static data source for the catalog. Each object is expected to have properties such as `id`, `name`, `category`, and `price`.

## Change History
*   **Version 0.0.1 - [Date of initial commit, e.g., YYYY-MM-DD]**
    *   **Description:** Initialized the `README.md` file with a placeholder description for the project, indicating its preliminary "dummy" state as a React application. This commit establishes the basic project structure and initial documentation.
*   **Version 0.0.2 - YYYY-MM-DD (e.g., 2023-10-27)**
    *   **Description:** Implemented dynamic filtering and sorting functionality in the `Home.jsx` component. Users can now filter products by category and sort them by price (low to high, high to low). This update significantly enhances the application's interactivity and demonstrates practical data manipulation in React. Updated `Project Overview` to reflect new functionality and component details in `Components / Classes / Functions`.