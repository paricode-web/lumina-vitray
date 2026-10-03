# Lumina Vitray

A modern Persian RTL e-commerce application for handmade stained-glass artwork, built with Next.js and TypeScript.

🔗 **Live Demo:** https://lumina-vitray.netlify.app
💻 **Source Code:** https://github.com/paricode-web/lumina-vitray

---

## ✨ Overview

**Lumina Vitray** is a full-stack e-commerce application designed for selling handmade stained-glass artwork online.

The project focuses on building a realistic shopping experience with authentication, product management, cart functionality, checkout, order management, and an administrative dashboard.

It was built as a portfolio project to demonstrate modern full-stack web development practices using the Next.js App Router.

---

## ✨ Features

### 🛍️ Customer Experience

* User registration and authentication
* Protected profile and checkout pages
* Product browsing
* Product detail pages
* Search functionality
* Shopping cart
* Persistent client-side cart state
* Cart drawer for quick cart access
* Checkout flow with shipping information
* Order creation and order management
* Fake payment flow for demonstration purposes
* Persian RTL interface
* Responsive design for desktop, tablet, and mobile

### 🔐 Authentication & Authorization

* Credential-based authentication
* Password hashing with `bcryptjs`
* Session-based authentication with NextAuth
* Protected routes
* Role-based authorization
* Admin-only dashboard access

### 🛡️ Server-side Validation

Important e-commerce operations are validated on the server.

For example:

* Product prices are retrieved and validated server-side
* Product stock is checked before creating an order
* Client-side cart values are not trusted for final order calculations
* Protected operations require authenticated sessions

This helps prevent users from manipulating client-side values during checkout.

### 👨‍💼 Admin Dashboard

The admin dashboard provides tools for:

* Creating products
* Updating products
* Deleting products
* Uploading and managing product images
* Viewing orders
* Viewing users and order information
* Managing product inventory

---

## 🛒 E-commerce Flow

The main shopping flow is:

**Products → Cart → Checkout → Order → Payment → Success**

Before an order is created, important product information such as price and stock availability is validated on the server.

---

## 💳 Payment Flow

The project currently uses a **fake payment system** for demonstration and development purposes.

The implemented flow is:

**Create Order → Start Payment → Payment Authority → Verify Payment → Mark Order as Paid**

No real payment gateway is currently connected.

This allows the complete order/payment architecture to be demonstrated without processing real financial transactions.

---

## 🛠 Tech Stack

### Frontend

* **Next.js** — App Router
* **React**
* **TypeScript**
* **Tailwind CSS**

### Backend & Database

* **Next.js Server Actions / API Routes**
* **Prisma ORM**
* **PostgreSQL** — production database
* **SQLite** — local development and migration backup

### Authentication & State Management

* **NextAuth** — authentication and sessions
* **Zustand** — client-side cart state
* **bcryptjs** — password hashing

---

## 🏗️ Architecture

The project uses the **Next.js App Router** and separates server-side data operations from client-side interactive components.

### Main Project Structure

```text
app/
├── routes and pages
├── API routes
├── server actions
└── layouts

components/
└── reusable UI components

lib/
├── shared utilities
├── Zustand stores
└── payment logic

prisma/
├── schema
└── migrations

public/
└── static assets

types/
└── TypeScript type extensions
```

---

## 🔐 Authentication & Authorization

The authentication system includes:

* User registration
* Credential-based login
* Password hashing with `bcryptjs`
* Session management with NextAuth
* Protected application routes
* Role-based authorization
* Admin-only access to dashboard functionality

---

## 📱 Responsive Design

The interface is designed for multiple screen sizes:

* Desktop
* Tablet
* Mobile

The application also uses a **Persian RTL layout** throughout the shopping experience.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/paricode-web/lumina-vitray.git
```

### 2. Move into the project directory

```bash
cd lumina-vitray
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the project root and add the required environment variables.

Example:

```env
DATABASE_URL=
NEXTAUTH_SECRET=
NEXTAUTH_URL=
```

Use your own local or production values.

> Never commit `.env` files or secret credentials to GitHub.

### 5. Run Prisma migrations

```bash
npx prisma migrate dev
```

### 6. Start the development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

---

## 🔑 Environment Variables

The application uses environment variables for database configuration, authentication, and other private settings.

Typical configuration includes:

```env
DATABASE_URL=
NEXTAUTH_SECRET=
NEXTAUTH_URL=
```

Additional environment variables may be required depending on the configured database and application environment.

---

## 🌐 Live Demo

The latest deployed version of Lumina Vitray is available here:

**https://lumina-vitray.netlify.app**

> Note: The payment system in the live demo is simulated and does not process real payments.

---

## 📸 Screenshots

Screenshots of the following sections will be added:

* Home page
* Product listing
* Product details
* Shopping cart
* Checkout
* User profile
* Admin dashboard

---

## 🔮 Future Improvements

Potential future improvements include:

* Real payment gateway integration
* Cloud-based image storage
* Persian / English localization
* Advanced SEO
* Product filtering and sorting
* Pagination
* Advanced order management
* Email notifications
* Production analytics
* Improved image optimization

---

## 👩‍💻 Author

**Pari**

Frontend Developer focused on **React, Next.js, TypeScript, and modern web application development**.

---

## 📄 License

This project is built for portfolio and educational purposes.
