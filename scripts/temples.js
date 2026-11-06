// Get the current year
const today = new Date();

// Display the current year in the footer
document.querySelector("#currentyear").textContent = today.getFullYear();

// Display the last modified date
document.querySelector("#lastmodified").textContent = document.lastModified;