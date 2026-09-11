# 🚀 DevStack-A05

A modern developer technology website built with **React**. This project demonstrates React fundamentals, API data fetching, cart management, conditional rendering, and user-friendly notifications.

## 🌐 Live Demo

🔗 **Live Site:** https://devstack-a05.netlify.app/

🔗 **GitHub Repository:** https://github.com/poroshhossain/DevStack-A05

---

## 🛠️ Technologies Used

* ⚛️ React
* ⚡ Vite
* 🟨 JavaScript / TypeScript
* 🎨 Tailwind CSS
* 🌼 DaisyUI
* 🎯 React Icons
* 🔤 Google Fonts
* 🔔 React Toastify

---

## ✨ Features

### 1. Navigation

* Website logo
* Main navigation menu
* Header actions
* Sign In and Sign Up buttons
* Responsive navigation layout

### 2. Hero Section

* Main heading and description
* Explore button
* Learn More button
* Attractive hero image
* Responsive design

### 3. Technology Section

* Technology data fetched from an API
* Dynamic technology cards
* Add technology items to the cart
* Display selected items dynamically

### 4. Cart Management

* Remove individual items from the cart
* Remove all items at once
* Prevent duplicate items from being added
* Manage cart data using JavaScript array methods
* Display an empty-cart message using conditional rendering

### 5. Toast Notifications

* Added **React Toastify**
* Shows success and feedback messages for user actions

---

## 📚 React Questions & Answers

### 1. What is JSX, and why is it used in React?

**JSX** stands for JavaScript XML. It allows us to write HTML-like code inside JavaScript and makes React UI easier to create and understand.

---

### 2. What is the difference between props and state?

**Props** are used to pass data from a parent component to a child component.

**State** is data managed inside a component. It can change over time and update the UI when its value changes.

---

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is a React Hook used to manage changing data inside functional components.

In this project, I used `useState` in components such as the **Technologies section, Main App, Header, and Navbar** to manage component data and user interactions.

---

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is a React Hook used to handle side effects in components.

I used it to fetch technology data from the API/JSON source when the component loads.

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?

Each item in a `.map()` list needs a unique `key` so React can identify individual items efficiently.

This helps React correctly update, add, or remove specific items when the list changes.

---

### 6. What is conditional rendering? Show one place you used it.

**Conditional rendering** means showing different UI based on a condition.

For example, I used conditional rendering in the cart section:

* If the cart has items → show the cart items.
* If the cart is empty → show an empty-cart message.

```jsx like
{cartItems.length ? (
  <CartItems />
) : (
  <p>Your cart is empty.</p>
)}
```

---

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component can pass data to a child component using **props**.

If the child needs to send data or an action back to the parent, the parent can pass a **callback function** as a prop. The child can then call that function.

This is commonly known as **lifting state up** when shared state needs to be managed by the parent.

---

## 📁 Project Structure

```text
DevStack-A05/
├── public/
├── src/
│   ├── assets/
│   ├── Components/
│   ├── Pages/
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── package.json
├── vite.config.js
└── README.md
```

---

## 🎯 Project Learning Goals

Through this project, I practiced:

* React component development
* JSX
* Props and State
* `useState`
* `useEffect`&&`use()`
* API data fetching
* Array methods
* Cart functionality
* Conditional rendering
* React Toastify
* Responsive UI development
* Tailwind CSS and DaisyUI

---

## 👨‍💻 Author

**Porosh Hossain**

> Building modern web applications with React and modern web technologies.
