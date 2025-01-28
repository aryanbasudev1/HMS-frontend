$(document).ready(function () {
    // Handle form submission
    $("#patientLoginForm").submit(function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get input values
        let username = $("#patientUsername").val().trim();
        let password = $("#patientPassword").val().trim();

        // Basic validation checks
        if (username === "" || password === "") {
            alert("Both fields are required.");
            return;
        }

        // Example: Validate username format
        let usernamePattern = /^[a-zA-Z0-9]+$/; // Modify for specific pattern
        if (!usernamePattern.test(username)) {
            alert("Invalid username format.");
            return;
        }

        // Form is valid – Backend (Spring Boot) will handle login authentication & redirection
        alert("Form is valid. Backend will handle authentication.");
    });
});
