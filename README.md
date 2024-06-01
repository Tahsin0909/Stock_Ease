# Stock Ease Sale Order Management Application

## Description

A simple sale order management frontend application built with React. This single-page application (SPA) allows a consumer goods manufacturing company to manage its sales orders efficiently.
<br/>

[Live Link](https://stockease09.netlify.app/)

## Features

- **Authentication**: Simple login page with dummy username and password for authentication.
- **Dark Theme Toggle**: Switch between light and dark themes with persistence across reloads.
- **Sale Order Management**:
  - View active and completed sale orders in separate tabs.
  - Create new sale orders through a modal form.
  - Edit active sale orders through a pre-filled modal form.
  - View completed sale orders in read-only mode.
- **Form Validation**: Forms are equipped with validation rules to ensure data integrity.
- **Date Picker**: Convenient date selection for the invoice date field.

## Tech Stack

- **React 18+**: Core library for building user interfaces.
- **React Router DOM**: Routing library for creating navigable links.
- **Tanstack React Query**: Data fetching and state management library.
- **React Hook Form**: Library for managing form state and validation.
- **Chakra-UI**: Component library for styling the application.
- **Chakra Multiselect**: For multi-select dropdowns compatible with Chakra-UI.
- **Date-fns**: Utility library for manipulating dates.

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm (v6+)

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Tahsin0909/Stock_Ease.git
    cd StockEase
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the development server**:
    ```bash
    npm run dev
    ```

### Directory Structure
```bash
├── public/
│ ├── index.html
│ └── ...
├── src/
│ ├── assets/
│ │ └── ...
│ ├── components/
│ │ ├── ActiveOrders.js
│ │ ├── CompletedOrders.js
│ │ ├── LoginPage.js
│ │ ├── OrderFormModal.js
│ │ ├── EditOrderModal.js
│ │ └── ...
│ ├── helper/
│ │ ├── getTime.js
│ │ ├── time.js
│ │ └── ...
│ ├── hooks/
│ │ ├── useActiveOrder.jsx
│ │ ├── useCompletedOrder.js
│ │ └── ...
│ ├── Pages/
│ │ ├── Home/
│ │ │   └── Theme.jsx
│ │ ├── LogIn/
│ │ │   └── LogIn.jsx
│ ├── router/
│ │ ├── router.jsx
│ │ └── PrivateRoute.jsx
│ ├── Theme/
│ │ └── Theme.jsx
│ ├── App.js
│ ├── index.js
│ └── ...
├── .gitignore
├── package.json
├── README.md
└── ...
 ```

#### Copyright (c) 2024 Tahsin Zaman
