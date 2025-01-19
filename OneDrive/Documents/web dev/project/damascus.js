document.addEventListener('DOMContentLoaded', function () {

    // Get the form and the input elements
    const form = document.querySelector('form');
    const nameField = document.getElementById('name');
    const feedbackField = document.getElementById('feedback');
    const ratingFields = document.querySelectorAll('input[name="rating"]');
    const newsletterField = document.getElementById('newsletter');
    
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

        // Validate Feedback
        if (feedbackField.value.trim() === '') {
            valid = false;
            errorMessage += 'Feedback is required.\n';
        }

        // Validate Rating
        if (![...ratingFields].some(radio => radio.checked)) {
            valid = false;
            errorMessage += 'Rating is required.\n';
        }

        // If form is valid, show confirmation message
        if (valid) {
            alert('Thank you for your feedback!');
            form.reset(); // Reset the form fields
        } else {
            alert('Please fill in all the required fields.\n\n' + errorMessage);
        }
    });

    // Reset button functionality
    const resetButton = document.querySelector('input[type="reset"]');
    resetButton.addEventListener('click', function () {
        form.reset(); // Reset all form fields
    });
});