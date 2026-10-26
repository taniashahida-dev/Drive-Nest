<div align="center">

# 🚗 DriveNest
### Premium Car Rental Platform

[![Live](https://img.shields.io/badge/Live-Site-0E8388?style=flat-square)](https://drivenest.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat-square&logo=mongodb)](https://mongodb.com)

**🌐 Live Site → https://drive-nest-ten.vercel.app
</div>

---

## 🚀 About DriveNest

**DriveNest** is a full-stack car rental platform where users can explore, book, and manage vehicles — and owners can list and manage their own cars with ease.

---

## ✨ Features

- 🔐 **Secure Authentication** — Better Auth powered Email/Password & Google OAuth login with HTTPOnly cookie-based session management for maximum security
- 🚘 **Smart Car Search & Filter** — Search cars by name using MongoDB `$regex` and filter by car type (SUV, Sedan, Luxury, Sports, Hybrid) in real time
- 📋 **Booking Dashboard** — Logged-in users can book any car with driver preference and special notes, then track all bookings from a personal dashboard
- 🛠️ **Full Car Listing CRUD** — Owners can add, update, and delete their own car listings with confirmation modals and instant toast feedback
- 📱 **Fully Responsive UI** — Clean, recruiter-friendly interface built with HeroUI and Tailwind CSS — optimized for mobile, tablet, and desktop devices
- 📊 **Booking Count Tracking** — Every confirmed booking automatically increments the car's `booking_count` using MongoDB `$inc` operator
- 🔒 **Protected Private Routes** — JWT middleware secures all private APIs; logged-in users are never redirected to login on page reload

---

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| **Frontend** | Next.js 14, Tailwind CSS, HeroUI |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB Atlas, Mongoose |
| **Auth** | Better Auth (Email + Google OAuth) |
| **Other** | JWT, Axios, react-hot-toast |

---

## 📂 Pages

| Page | Route | Access |
|---|---|---|
| Home | `/` | Public |
| Explore Cars | `/cars` | Public |
| Car Details | `/cars/[id]` | Public |
| Login / Register | `/login` `/register` | Public |
| Add Car | `/add-car` | 🔒 Private |
| My Added Cars | `/my-cars` | 🔒 Private |
| My Bookings | `/my-bookings` | 🔒 Private |

---


## 🔗 Links

- 🌐 **Live Site** → https://drive-nest-ten.vercel.app
- 💻 **Client Repo** → https://github.com/taniashahida-dev/Drive-nest-server
- ⚙️ **Server Repo** → https://github.com/taniashahida-dev/Drive-Nest

---


<div align="center">

  Made with ❤️ by <a href="https://www.linkedin.com/in/tania9">Tania</a>

</div>
