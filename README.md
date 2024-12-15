# Form Validation Project

A responsive form validation project featuring signup and login functionality with local storage integration and automatic form filling capabilities.

## How to Start the Application

1. Clone the Repository

   git clone https://github.com/anurag2169/form-validation.git

2. Navigate to the Project Directory

   cd form-validation

3. Install Dependencies

   npm install

4. Start the Development Server

   npm run dev or npm start

5. Access the Application

   (http://localhost:3000/)

## Approach for Form Validation Project

The project is built using vanilla JavaScript, HTML5, and CSS3, focusing on:

1. Created a proper file and folder structure.

2. Created an index.html file.

3. Designed HTML templates for both the Sign-Up and Login pages.

4. Developed a responsive CSS design to ensure compatibility across all devices for both pages.

5. Wrote the script and validation logic for the Sign-Up page.

6. Added dynamic error messages and styling to the Sign-Up form using JavaScript.

7. Implemented features such as alerts, local storage integration, and form reset functionality for the Sign-Up page.

8. Wrote the script and validation logic for the Login page.

9. Added dynamic error messages and styling to the Login page.

10. Checked if data exists in local storage and auto-filled the Login form with the saved data.

11. Connected both pages with routing to provide a seamless user experience.

12. Implemented a toggle password visibility feature for both the Sign-Up and Login pages.

## Features

- User signup with comprehensive form validation
- User login with credential verification
- Password visibility toggle
- Responsive design
- Local storage integration
- Form validation with error messages
- Success/error styling

## Enhanced Features

1. **Auto-fill Login Form**

   - Automatically populates login form with stored credentials
   - Email field auto-fills from localStorage data
   - Improves user experience by reducing manual input

2. **Password Visibility Toggle**

   - Eye icon to show/hide password
   - Works on both password and confirm password fields
   - Enhanced user experience for password verification

3. **Validation Features**
   - Real-time email format validation
   - Password minimum length check
   - Full name minimum length requirement
   - Password match verification
   - Empty field validation
