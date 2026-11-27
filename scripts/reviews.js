// Check that the confirmation page was reached after form submission
const params = new URLSearchParams(window.location.search);

if (params.has("product") && params.has("rating") && params.has("installation")) {

    // Get the existing review count
    let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

    // Increase the review count
    reviewCount++;

    // Save the updated count
    localStorage.setItem("reviewCount", reviewCount);

    // Display the number of completed reviews
    document.querySelector("#reviewCount").textContent = reviewCount;

} else {
    document.querySelector("#reviewCount").textContent =
        Number(localStorage.getItem("reviewCount")) || 0;
}

// Footer date information
const today = new Date();

document.querySelector("#currentyear").textContent = today.getFullYear();

document.querySelector("#lastmodified").textContent = document.lastModified;