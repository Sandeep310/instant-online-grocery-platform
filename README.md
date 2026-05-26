# Instant Online Grocery Platform

![CI/CD](https://github.com/Sandeep310/instant-online-grocery-platform/actions/workflows/main.yaml/badge.svg)

## Project Overview

This project is a responsive online grocery shopping platform built using React.js and Tailwind CSS. The application demonstrates modern frontend development practices along with DevOps integration using Docker and GitHub Actions.

The platform includes:
- Responsive grocery product UI
- Dynamic product cards
- Dockerized deployment
- GitHub Actions CI/CD pipeline
- Modern frontend architecture using Vite

---

## Architecture

```text
Developer Pushes Code
        ↓
GitHub Actions Triggered
        ↓
Install Dependencies
        ↓
Build React Application
        ↓
Docker Image Build
        ↓
Containerized Deployment
```

---

## Tech Stack

| Tool | Purpose |
|------|----------|
| React.js | Frontend Framework |
| Tailwind CSS | UI Styling |
| Vite | React Build Tool |
| Docker | Containerization |
| GitHub Actions | CI/CD Pipeline |
| Git | Version Control |
| Node.js | JavaScript Runtime |

---

## DevOps Skills Demonstrated

- CI/CD Pipeline Automation
- Docker Containerization
- GitHub Actions Workflow Automation
- Frontend Deployment Workflow
- Version Control using Git
- Build Automation
- Debugging and Troubleshooting

---

## Features

- Responsive grocery shopping interface
- Product cards with images and pricing
- Mobile-friendly layout
- Tailwind CSS modern UI
- Fast frontend loading using Vite
- Dockerized application deployment
- Automated GitHub Actions pipeline

---

## Project Structure

```text
grocery-platform/
│
├── .github/
│   └── workflows/
│       └── main.yml
│
├── public/
│
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── screenshots/
│
├── Dockerfile
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

## Installation & Setup

### Clone Repository

```bash
git clone https://github.com/Sandeep310/instant-online-grocery-platform.git
```

### Navigate to Project

```bash
cd instant-online-grocery-platform
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

Application runs on:

```text
http://localhost:5173
```

---

## Docker Setup

### Build Docker Image

```bash
docker build -t grocery-platform .
```

### Run Docker Container

```bash
docker run -d --name web -p 5173:5173 grocery-platform
```

### Verify Running Containers

```bash
docker ps
```

---

## GitHub Actions CI/CD Pipeline

Workflow file location:

```text
.github/workflows/main.yml
```

### Pipeline Stages

- Checkout Repository
- Setup Node.js
- Install Dependencies
- Build React Application
- Validate Build Process

---

## Application Output

```text
Instant Grocery Platform
```

---

## Screenshots

### Application UI
<img width="1918" height="1070" alt="Application UI" src="https://github.com/user-attachments/assets/a5fcc732-fc35-40a6-bbcf-47bbd25f5c8f" />


### Docker Container Running
<img width="1918" height="1078" alt="Docker container running" src="https://github.com/user-attachments/assets/09a604f6-3f2f-4b99-9526-afd1f6677b7a" />


### GitHub Actions Pipeline
<img width="1918" height="1078" alt="image" src="https://github.com/user-attachments/assets/b8a24606-e08f-4d42-b8af-172197590d78" />


### Deployed Application
<img width="1918" height="1073" alt="image" src="https://github.com/user-attachments/assets/2c53da6d-fb80-4092-86fa-1282c53076a1" />


---

## Challenges Faced

- Fixed Tailwind CSS configuration issues
- Resolved Docker container startup failures
- Debugged Node.js and Vite version compatibility
- Configured Docker networking for Vite application
- Implemented GitHub Actions workflow automation

---

## Future Improvements

- Add backend API integration
- Implement authentication system
- Add shopping cart functionality
- Integrate payment gateway
- Deploy using Kubernetes
- Add monitoring using Prometheus and Grafana
- Implement Terraform infrastructure deployment

---

## Live Demo

(Vercel Deployment Link)
https://instant-online-grocery-platform.vercel.app

---

## Author

**Jaya Sandeep Gudimetla**  
Aspiring DevOps Engineer
