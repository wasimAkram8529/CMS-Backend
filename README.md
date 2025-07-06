cat << 'EOF' > README.md

# 📘 Complaint Management System – Backend

This is the **Node.js + Express** backend for the Complaint Management System.  
It provides a REST API for submitting, managing, and updating user complaints, with **MongoDB** as the database and **NodeMailer** for email notifications.

## ⚙️ Technologies Used

- Node.js
- Express.js
- MongoDB + Mongoose
- NodeMailer
- dotenv
- CORS

## 🚀 Getting Started

### Prerequisites

- Node.js v16+
- MongoDB Atlas or local MongoDB
- Gmail account with App Password

### Install Dependencies

\`\`\`bash
npm install
\`\`\`

### Configure Environment Variables

Create a `.env` file in the root folder:

\`\`\`env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/cms
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
ADMIN_EMAIL=admin_email@gmail.com
\`\`\`

### Start the Server

\`\`\`bash
npm run dev
\`\`\`

## 📡 API Endpoints

| Method | Endpoint            | Description                   |
| ------ | ------------------- | ----------------------------- |
| POST   | /api/complaints     | Submit a new complaint        |
| GET    | /api/complaints     | Get all complaints            |
| PUT    | /api/complaints/:id | Update complaint status       |
| DELETE | /api/complaints/:id | Delete a complaint (optional) |

## 📬 Email Notifications

Emails are sent to the admin when:

- A complaint is submitted
- A complaint's status is updated

## 📁 Folder Structure

\`\`\`
CMS-Backend/
├── controllers/
├── models/
├── routes/
├── utils/
├── server.js
├── .env
└── README.md
\`\`\`

## 👨‍💻 Developer

**Md Wasim Akram**  
📧 wasim.cms@gmail.com  
🏫 NIT Kurukshetra

EOF
