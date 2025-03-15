# SecureStor   

A **secure file storage system** built with **Spring Boot**, **AWS S3**, and **Firebase** for authentication and user data management. This project enables users to **upload, store, and manage files securely** while ensuring efficient access control and seamless authentication.

## 🔹 Features  
- 🔐 **User Authentication**: Firebase Authentication for secure user login and registration.  
- 📂 **File Storage**: AWS S3 for scalable and reliable cloud storage.  
- 🛠️ **Backend API**: Spring Boot handles file operations and user interactions.  
- 🔄 **Real-Time Database**: Firebase Realtime Database stores user information.  
- 🖥️ **Frontend**: Built with HTML, CSS, and JavaScript for an intuitive user experience.  
- 🏗 **Dockerized Deployment**: Docker containerization for easy deployment and scalability.  

---

## 🏗 Tech Stack  
### 🔹 Frontend  
- **HTML**, **CSS**, **JavaScript**  
- **Firebase Authentication** (User Login & Registration)  
- **Firebase Realtime Database** (User Details Storage)  

### 🔹 Backend  
- **Spring Boot** (RESTful API for File Handling)  
- **AWS S3** (File Storage & Retrieval)  
- **Docker** (Containerized Deployment)  

---

## 🚀 Installation & Setup  

### 🔹 Backend Setup  
```sh
# Clone the repository
git clone https://github.com/TahaHasan21/SecureStor.git
cd SecureStor

# Set up aws service in application.properties
accessKey = ""
secret = ""
bucketName = ""
region = ""


# Build and run the Spring Boot application
mvn clean install
mvn spring-boot:run
```

### 🔹 Frontend Setup  
```sh
cd frontend

# Open index.html in the browser to test the application
```
