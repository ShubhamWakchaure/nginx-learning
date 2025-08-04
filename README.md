## Nginx Learning Repo

This repository contains a sample web application and Nginx configuration for personal learning purposes.

### Steps to Start the Server

1. **Start Docker Desktop**  
   Ensure Docker Desktop is running on your system.

2. **Start the Application**  
   From the root directory of this project, run:
   ```bash
   docker compose up --build
   ```

3. **Edit Files via Volume Mounts**  
   All files are attached to the container via Docker volumes. You can edit them at any time.

   After editing the Nginx configuration and web-app, follow these steps:

   - **Validate the Nginx configuration**:
     ```bash
     docker exec -it nginx-learning-container nginx -t
     ```
   - **Reload the Nginx server**:
     ```bash
     docker exec -it nginx-learning-container nginx -s reload
     ```

4. **Stop All Services**  
   Once you’re done with the learning session, shut down all containers using:
   ```bash
   docker compose down
   ```

5. **Important Note**  
   Always validate and reload the Nginx configuration every time you make changes.  
   Invalid configurations may prevent Nginx from reloading correctly.
