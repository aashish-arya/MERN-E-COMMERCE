# MERN E-Commerce Platform

A full-stack e-commerce application that enables users to browse products, manage a shopping cart, and complete secure checkouts. It solves the common problem of shopping without visiting physical stores by providing an online platform where users can easily search for products, register or log in, and place orders. This application includes user authentication with JWT, product listings with filtering options, and order history tracking, all within a responsive interface that works on both mobile and desktop devices.

---

## 🚀 Features

- 🔐 **User Authentication** – Secure signup and login functionality using JWT.
- 🛒 **Product Catalog** – Product listing with support for filtering and searching.
- 🧺 **Cart & Checkout** – Add products to a cart and complete a secure checkout process.
- 📦 **Order History** – View past orders and their statuses.
- 📱 **Responsive Design** – Fully responsive layout that works across devices.
- ☁️ **Cloudinary Integration** – Image upload for product management.
- 💳 **Stripe & Razorpay Payments** – Multiple payment gateway support.

---

## 🛠 Tech Stack

- **Frontend:** React, React Router, Context API, Tailwind CSS, Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT, bcrypt
- **Others:** Cloudinary, Stripe, Razorpay

---

## ⚙️ Installation / Setup

```bash
# Clone the repo
git clone <repo-link>
cd <repo-folder>

# Backend setup
cd backend
npm install
npm run dev

# Frontend setup (in new terminal)
cd frontend
npm install
npm start
```

### 🔐 Environment Variables

**Backend (**\`\`**)**

```env
MONGODB_URI=""
CLOUDINARY_API_KEY=""
CLOUDINARY_SECRET_KEY=""
CLOUDINARY_NAME=""
JWT_SECRET=""
ADMIN_EMAIL=""
ADMIN_PASSWORD=""
STRIPE_SECRET_KEY=""
RAZORPAY_KEY_ID=""
RAZORPAY_KEY_SECRET=""
```

**Frontend (**\`\`**)**

```env
VITE_BACKEND_URL=""
VITE_RAZORPAY_KEY_ID=""
```

---

## 🌐 Live Demo

- 🛍️ **User Site:** (https://mern-e-commerce-frontend-delta.vercel.app/)
- 🛠️ **Admin Panel:** (https://mern-e-commerce-admin-theta.vercel.app/)

---

## 📦 API Endpoints

- **POST** `/api/user/signup` – Register a new user
- **POST** `/api/user/login` – Login existing user
- **GET** `/api/products` – Fetch product list
- **GET** `/api/products/:id` – Fetch single product details
- **POST** `/api/products` – Create a new product (admin only)
- **POST** `/api/orders` – Place an order
- **GET** `/api/orders` – Fetch user order history

---

## 📁 Folder Structure

```
/backend
   /controllers
   /models
   /routes
/frontend
   /components
   /pages
   /context
```

---

## 👨‍💻 Author

**Aashish Kumar Arya**\
📧 Email: (ashisharya9058@gmail.com)
💼 GitHub: (https://github.com/aashish-arya)
🔗 LinkedIn: *(Add your LinkedIn link here if available)*

---

> This project demonstrates end-to-end MERN stack capabilities including authentication, product handling, admin/user split UI, payment gateway integration, and full responsiveness.

