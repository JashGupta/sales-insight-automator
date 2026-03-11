# Sales Insight Automator

## Overview

Sales Insight Automator is an AI-powered tool designed to help sales teams quickly extract insights from large sales datasets.
Users can upload a **CSV or Excel file**, and the system will automatically analyze the data using an **LLM (Large Language Model)** and send a **professional executive summary via email**.

This tool was built as a **prototype system for AI Cloud DevOps engineering evaluation**, demonstrating backend development, AI integration, DevOps practices, and cloud deployment.

---

## Features

* Upload **CSV or XLSX sales data**
* Automatic **AI-generated executive summary**
* **Email delivery** of insights to recipients
* **Swagger/OpenAPI documentation**
* Secure backend with validation
* **Docker containerization**
* **CI pipeline with GitHub Actions**
* Cloud deployment ready

---

## Architecture

Frontend (React SPA)
↓
Backend API (Node.js + Express)
↓
Data Parsing (CSV/XLSX)
↓
AI Engine (Groq – Llama Model)
↓
Email Delivery (Nodemailer)

---

## Tech Stack

### Frontend

* React
* Axios

### Backend

* Node.js
* Express.js

### AI

* Groq API (Llama models)

### Email

* Nodemailer (SMTP)

### DevOps

* Docker
* Docker Compose
* GitHub Actions (CI)

### Documentation

* Swagger / OpenAPI

---

## Running Locally

### 1. Clone the Repository

```
git clone https://github.com/YOUR_USERNAME/sales-insight-automator.git
cd sales-insight-automator
```

### 2. Configure Environment Variables

Create a `.env` file in the backend folder using `.env.example`.

Example:

```
GROQ_API_KEY=your_api_key

EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password
```

### 3. Run Using Docker

```
docker-compose up --build
```

Backend will run at:

```
http://localhost:8000
```

Swagger API Docs:

```
http://localhost:8000/api-docs
```

---

## API Endpoint

### Upload Sales Data

POST `/upload`

**Request Type**

```
multipart/form-data
```

Parameters:

| Field | Type   | Description                      |
| ----- | ------ | -------------------------------- |
| file  | File   | CSV or XLSX sales data           |
| email | String | Email address to receive summary |

Response:

```
{
 "message": "Summary generated and email sent"
}
```

---

## Example Dataset

```
Date,Product_Category,Region,Units_Sold,Unit_Price,Revenue,Status
2026-01-05,Electronics,North,150,1200,180000,Shipped
2026-01-12,Home Appliances,South,45,450,20250,Shipped
2026-01-20,Electronics,East,80,1100,88000,Delivered
2026-02-15,Electronics,North,210,1250,262500,Delivered
2026-02-28,Home Appliances,North,60,400,24000,Cancelled
2026-03-10,Electronics,West,95,1150,109250,Shipped
```

---

## Security Measures

The API includes several security considerations:

* File type validation (CSV/XLSX only)
* File size limits for uploads
* Environment variables for sensitive data
* CORS protection
* API rate limiting ready
* Dockerized runtime isolation

---

## DevOps Implementation

### Docker

The backend service is containerized using Docker.

Key files:

```
backend/Dockerfile
docker-compose.yml
```

This allows the entire system to run with:

```
docker-compose up
```

---

### CI/CD

A GitHub Actions workflow validates builds when pull requests are made to the `main` branch.

Location:

```
.github/workflows/ci.yml
```

Pipeline tasks:

* Install dependencies
* Validate build environment

---

## Deployment

Example deployment platforms:

Frontend: **Vercel**
Backend: **Render**

After deployment, the API documentation is available at:

```
/api-docs
```

---

## Future Improvements

* Add data visualization dashboards
* Add authentication for secure access
* Implement advanced analytics (trend detection)
* Add scheduled reporting
* Improve UI/UX for data uploads

---

## Author

Jashan Gupta
B.Tech Computer Science Engineering
Chitkara University

---

## License

This project is for educational and evaluation purposes.