
# Project: Build a Product List and Detail View App with React

In this project, you'll create a simple product list app using React. You’ll practice structuring a web project, passing data through props, conditional rendering, and designing reusable components.

This project is designed to be completed within one day.

For every step:
- Read the brief and acceptance criteria. If unsure, seek help immediately.
- When you’ve fulfilled the acceptance criteria, make a commit and push it to GitHub.
- Move your project card on the associated GitHub project board after completing each step.

Here's a sketch of what you'll build:

![interface](./project-product-showcase-interface.svg)

---

## Step 1: Fork the Starter Repository

**Brief:**  
Fork the provided GitHub repository to your account to begin the project. Update the `README.md` to include the title of your product showcase app.

**Acceptance Criteria:**
- ✅ The repository is forked to your GitHub account.
- ✅ You have cloned the forked repository to your local machine.
- ✅ You have replaced the `README.md` with your own app’s title (e.g., `# My Product Showcase App`).

---

## Step 2: Set Up the Project Structure

**Brief:**  
Create the basic file structure for your project.

**Acceptance Criteria:**
- ✅ Your repository contains `App.js`, `index.js`, `Header.js`, `ProductList.js`, `ProductCard.js`, `ProductDetail.js`, and `styles.css` files in the appropriate folders.
- ✅ All components are correctly imported and rendered in the `App.js` file.
- ✅ `index.js` renders the `App` component to the DOM.

---

## Step 3: Create the Header Component

**Brief:**  
Build a `Header` component that displays the app's title.

**Acceptance Criteria:**
- ✅ `Header.js` contains a functional component that renders an `<h1>` with the title "Product Showcase".
- ✅ The header component is centered at the top of the page.

---

## Step 4: Create the ProductList Component

**Brief:**  
Set up a `ProductList` component that will hold individual product cards.

**Acceptance Criteria:**
- ✅ `ProductList.js` contains a functional component that imports `ProductCard`.
- ✅ `ProductList` renders an array of products by mapping each product to a `ProductCard`.

---

## Step 5: Create Static Product Data

**Brief:**  
Add static product data to `ProductList` to simulate a product catalog.

**Acceptance Criteria:**
- ✅ The static product data includes properties: `id`, `name`, `price`, `description`, and `imageURL`.
- ✅ This data is passed as props to `ProductCard` components within `ProductList`.
- ✅ Each product renders as a `ProductCard` on the page.

---

## Step 6: Create the ProductCard Component

**Brief:**  
Design the `ProductCard` component to display individual product information.

**Acceptance Criteria:**
- ✅ `ProductCard` accepts props for `name`, `price`, and `image`.
- ✅ The product name, price, and image are displayed within a styled card layout.
- ✅ Each `ProductCard` is clickable to select the product for viewing in `ProductDetail`.

---

## Step 7: Create the ProductDetail Component

**Brief:**  
Build a `ProductDetail` component that displays detailed information for a selected product.

**Acceptance Criteria:**
- ✅ `ProductDetail` accepts `name`, `price`, `description`, and `image` as props and displays them.
- ✅ The product details are shown in a styled layout that distinguishes it from the `ProductList`.

---

## Step 8: Implement Product Selection

**Brief:**  
Add functionality to select a product and display its details.

**Acceptance Criteria:**
- ✅ Clicking on a `ProductCard` sets that product as the selected product.
- ✅ The selected product is passed to `ProductDetail` for display.
- ✅ Only one product’s details are shown at a time.

---

## Step 9: Conditional Rendering of ProductDetail

**Brief:**  
Ensure that `ProductDetail` only appears when a product is selected.

**Acceptance Criteria:**
- ✅ `ProductDetail` is hidden when no product is selected.
- ✅ Clicking a product in `ProductList` updates the displayed details in `ProductDetail`.
- ✅ If a new product is selected, the displayed details update accordingly.

---

## Step 10: Basic Styling

**Brief:**  
Add styles to enhance the layout and make the app visually appealing.

**Acceptance Criteria:**
- ✅ The `Header` is styled and centered.
- ✅ `ProductCard` components have a border, padding, and are arranged in a grid or flex layout.
- ✅ `ProductDetail` has distinct styling to differentiate it from `ProductList`.

---

## Step 11: Final Review and Refactor

**Brief:**  
Review the app to ensure it meets all acceptance criteria, refactor code for readability, and add comments where needed.

**Acceptance Criteria:**
- ✅ The code is clean, with properly named variables and functions.
- ✅ Unnecessary console logs are removed.
- ✅ All components function as expected without errors.

--- 
