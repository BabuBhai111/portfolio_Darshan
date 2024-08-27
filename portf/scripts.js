// Function to toggle the visibility of the accomplishments list
function toggleAccomplishments() {
    const accomplishmentsList = document.getElementById('accomplishments-list');
    if (accomplishmentsList.style.display === 'none') {
        accomplishmentsList.style.display = 'block';
    } else {
        accomplishmentsList.style.display = 'none';
    }
}

// Function to alert the user when they click on a social link
function linkAlert(platform) {
    alert(`You are being redirected to ${platform}.`);
}

// Function to add a new interest to the interests list
function addInterest() {
    const interestsList = document.getElementById('interests-list');
    const newInterest = prompt('Enter a new interest:');
    if (newInterest) {
        const listItem = document.createElement('li');
        listItem.textContent = newInterest;
        interestsList.appendChild(listItem);
    }
}
