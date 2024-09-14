// Function to toggle the visibility of the formula details
function toggleDetails(sectionId) {
    const section = document.getElementById(sectionId);
    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block"; // Show section
    } else {
        section.style.display = "none";  // Hide section
    }
}

// Function to display search result
function searchFormula() {
    const query = document.getElementById("formula-search").value;
    if (query) {
        alert(`You searched for: ${query}`);
    } else {
        alert("Please enter a formula to search!");
    }
}

// Function to open the modal
function openDonateModal() {
    document.getElementById("donate-modal").style.display = "block";
}

// Function to close the modal
function closeDonateModal() {
    document.getElementById("donate-modal").style.display = "none";
}

// Close the modal if clicked outside
window.onclick = function(event) {
    const modal = document.getElementById("donate-modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
