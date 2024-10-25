function validateForm(event) {
    const languageSelect = document.getElementById("language");
    const disabilitySelect = document.getElementById("disability");
    let valid = true; // Flag to track validation

    // Clear previous error messages
    languageSelect.style.color = "";
    disabilitySelect.style.color = "";
    languageSelect.options[0].text = "--Please choose an option--";
    disabilitySelect.options[0].text = "--Please choose an option--";

    // Check if language is selected
    if (!languageSelect.value) {
        languageSelect.style.color = "red"; // Set text color to red
        languageSelect.options[0].text = "Language is required"; // Set error message
        valid = false; // Mark as invalid
    }

    // Check if disability is selected
    if (!disabilitySelect.value) {
        disabilitySelect.style.color = "red"; // Set text color to red
        disabilitySelect.options[0].text = "Disability is required"; // Set error message
        valid = false; // Mark as invalid
    }

    if (!valid) {
        event.preventDefault(); // Prevent form submission
    }
}

// Add event listener to form submit
document.getElementById("selectionForm").addEventListener("submit", validateForm);