# [ToDo_List_WebApp](https://github.com/Abhiram-ARS/Web_Development_Workshop_ICET/tree/main/ToDo_List_WebApp)
The To-Do List web application allows users to efficiently add and delete tasks within a simple, interactive interface. Built with HTML, CSS, and JavaScript, this project provides a user-friendly platform to help individuals organize and track their tasks.

Key Features:

* Task Management: Users can add new tasks by typing them into an input field and clicking an "Add Task" button. If the input field is left blank, an alert will prompt the user to enter a valid task.
* Task Deletion: Each task has an associated delete button (❌). When clicked, the task is removed from the list, making it easy to manage completed or unnecessary tasks.
* User Interface: The application is styled with a clean layout. The task container is centered on the page, and tasks are displayed in an organized list. The background and buttons are color-coordinated to ensure a visually appealing experience.
* Responsive Design: The layout uses flexbox for centering and adapting to different screen sizes, ensuring the app is usable across devices.

This project demonstrates the core concepts of web development, including DOM manipulation, event handling, and CSS styling, while offering a straightforward, interactive solution to task management.

# [Weather_App_using_API](https://github.com/Abhiram-ARS/Web_Development_Workshop_ICET/tree/main/Weather_App_using_API)
This Weather Forecast application allows users to retrieve real-time weather information for a specified city using the OpenWeatherMap API. It is a simple Node.js application that fetches and displays weather data such as temperature, weather description, humidity, and wind speed.

Key Features:

* Weather Data Retrieval: The application sends a request to the OpenWeatherMap API using the Axios library. It fetches details such as the temperature, weather description, humidity level, and wind speed for a given city.
* City Input: The city name is provided as a command-line argument. If no city is specified, the default city is set to Delhi.
* API Integration: The application integrates with the OpenWeatherMap API to get weather data dynamically. The API key for authentication is stored in a .env file for security.
* Error Handling: The app includes basic error handling to manage cases where the API request fails or an invalid city name is entered. It logs detailed error messages for debugging.

This project is an excellent example of how to build a simple command-line weather application using Node.js and external APIs.

# [Calculator_Web](https://github.com/Abhiram-ARS/Web_Development_Workshop_ICET/tree/main/CalclatorWeb)
A simple web-based calculator that performs basic arithmetic operations like addition, subtraction, multiplication, and average using JavaScript. It features a user-friendly interface with dynamic result display.

Key Features:

* User-Friendly Interface: Clean and minimal design using HTML and CSS makes it easy for users to input numbers and view results.
* Multiple Arithmetic Operations: Supports four basic operations — Addition, Subtraction, Multiplication, and Average — with dedicated buttons for each.
* Instant Calculation & Output Display: JavaScript functions execute instantly upon button click, displaying the result in real-time without refreshing the page.
* Input Validation: Utilizes HTML <input type="number"> fields to ensure that only valid numeric input is accepted from the user.
* Separation of Concerns: HTML handles structure, CSS (linked externally) manages design, and JavaScript (also external) handles all logic, following clean coding practices.
* Responsive Design Ready: The use of the viewport meta tag makes the page adaptable for various screen sizes, supporting mobile and desktop viewing.

This simple calculator project demonstrates the practical use of HTML, CSS, and JavaScript to create an interactive and user-friendly web application. It serves as a great foundational exercise for beginners to understand event handling, DOM manipulation, and the separation of structure, style, and logic in web development.
