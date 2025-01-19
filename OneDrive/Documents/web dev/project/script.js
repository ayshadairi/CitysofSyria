document.addEventListener('DOMContentLoaded', function () {

    // Get the form and all form elements
    const form = document.getElementById('contactForm');
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const genderField = document.querySelector('input[name="gender"]:checked');
    const ageField = document.getElementById('age');
    const dobField = document.getElementById('dob');
    const messageField = document.getElementById('message');
    const addressField = document.getElementById('address');
    const zipcodeField = document.getElementById('zipcode');
    const hobbiesCheckboxes = document.querySelectorAll('input[name="hobbies"]:checked');
    const citySelect = document.getElementById('city');

    // Handle form submission
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form from submitting

        // Basic Validation
        let valid = true;
        let errorMessage = '';

        // Validate Name
        if (nameField.value.trim() === '') {
            valid = false;
            errorMessage += 'Name is required.\n';
        }

        // Validate Email
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (emailField.value.trim() === '' || !emailPattern.test(emailField.value.trim())) {
            valid = false;
            errorMessage += 'A valid email is required.\n';
        }

        // Validate Gender
        if (!document.querySelector('input[name="gender"]:checked')) {
            valid = false;
            errorMessage += 'Gender is required.\n';
        }

        // Validate Age
        if (ageField.value < 18 || ageField.value > 100) {
            valid = false;
            errorMessage += 'Age must be between 18 and 100.\n';
        }

        // Validate Date of Birth
        if (dobField.value === '') {
            valid = false;
            errorMessage += 'Date of Birth is required.\n';
        }

        // Validate Message
        if (messageField.value.trim() === '') {
            valid = false;
            errorMessage += 'Message is required.\n';
        }

        // Validate Address
        if (addressField.value.trim() === '') {
            valid = false;
            errorMessage += 'Street Address is required.\n';
        }

        // Validate Zip Code
        if (zipcodeField.value.trim() === '') {
            valid = false;
            errorMessage += 'Zip Code is required.\n';
        }

        // Check if at least one hobby is selected
        if (hobbiesCheckboxes.length === 0) {
            valid = false;
            errorMessage += 'At least one hobby must be selected.\n';
        }

        // Check if city is selected
        if (citySelect.value === '') {
            valid = false;
            errorMessage += 'City must be selected.\n';
        }

        // If form is valid, show confirmation message
        if (valid) {
            alert('Form submitted successfully!');
            form.reset(); // Reset the form fields
        } else {
            alert('Please fill in all the required fields.\n\n' + errorMessage);
        }
    });

    // Reset button functionality
    const resetButton = document.querySelector('button[type="reset"]');
    resetButton.addEventListener('click', function () {
        form.reset(); // Reset all form fields
    });
});