//traveller image
// JavaScript code in script.js
document.addEventListener('DOMContentLoaded', function () {
    // Accessing the image element
    const travelerImg = document.getElementById('travelerImg');

    // Check if the image has been clicked before
    if (localStorage.getItem('imageClicked') === 'true') {
        travelerImg.src = 'Lumine.webp'; // Replace 'newImage.jpg' with the path to your new image
    }

    // Adding a click event listener to the image
    travelerImg.addEventListener('click', function () {
        // Change the image source on click
        if (travelerImg.src.includes('TravPort.webp')) {
            travelerImg.src = 'Lumine.webp'; // Replace 'newImage.jpg' with the path to your new image
            localStorage.setItem('imageClicked', 'true'); // Store the clicked state in Local Storage
        } else {
            travelerImg.src = 'TravPort.webp'; // Change back to the original image when clicked again
            localStorage.removeItem('imageClicked'); // Remove the clicked state from Local Storage
        }
    });
});


//constellation buttons
let lastClickedButton = null;

function showDescription(starId) {
    var descriptions = document.querySelectorAll('.description');
    descriptions.forEach(function (description) {
        description.style.display = "none";
    });

    var points = document.querySelectorAll('.point');
    points.forEach(function (point) {
        point.style.backgroundColor = "#f3b249";
        point.style.boxShadow = "";
    });

    var description = document.getElementById(starId).querySelector('.description');
    var point = document.getElementById(starId);

    if (lastClickedButton === starId) {
        lastClickedButton = null;
    } else {
        description.style.display = "block";
        point.style.backgroundColor = "rgb(255, 216, 86)";
        point.style.boxShadow = "0 0 30px rgb(255, 255, 255), 0 0 60px rgb(255, 255, 255), 0 0 50px rgb(255, 255, 255)";
        lastClickedButton = starId;
    }
}

// Add event listeners to restore hover functionality for showing the description
var points = document.querySelectorAll('.point');
points.forEach(function (point) {
    point.addEventListener('mouseenter', function () {
        if (lastClickedButton !== point.id) {
            point.style.backgroundColor = "rgb(255, 216, 86)";
            point.style.boxShadow = "0 0 30px rgb(255, 255, 255), 0 0 60px rgb(255, 255, 255), 0 0 50px rgb(255, 255, 255)";
            var description = point.querySelector('.description');
            description.style.display = 'block';
        }
    });

    point.addEventListener('mouseleave', function () {
        if (lastClickedButton !== point.id) {
            point.style.backgroundColor = "#f3b249";
            point.style.boxShadow = "";
            var description = point.querySelector('.description');
            description.style.display = 'none';
        }
    });
});


//refinement buttons
document.addEventListener('DOMContentLoaded', function () {
    const toggleLabels = document.querySelectorAll('.toggle-label');
    const toggleContents = document.querySelectorAll('.toggle-content');

    toggleLabels.forEach(function (label, index) {
        label.addEventListener('click', function () {
            const content = toggleContents[index];

            toggleContents.forEach(function (c) {
                if (c !== content) {
                    c.style.display = 'none';
                }
            });

            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
});


//filter section

//filter by vision
function filterCharactersByVision(vision) {
    var characters = document.getElementsByClassName('character-portrait');
    for (var i = 0; i < characters.length; i++) {
        characters[i].style.display = 'none';
        if (vision === 'all' || characters[i].id.includes(vision)) {
            characters[i].style.display = 'flex';
        }
    }
}

function showAllCharacters() {
    var characters = document.getElementsByClassName('character-portrait');
    for (var i = 0; i < characters.length; i++) {
        characters[i].style.display = 'flex';
    }
}

//filter by weapontype
function filterCharactersByWeaponType(type) {
    var weapons = document.getElementsByClassName('weapon-portrait');
    for (var i = 0; i < weapons.length; i++) {
        weapons[i].style.display = 'none';
        if (type === 'all' || weapons[i].id.includes(type)) {
            weapons[i].style.display = 'flex';
        }
    }
}

function showAllWeapons() {
    var weapons = document.getElementsByClassName('weapon-portrait');
    for (var i = 0; i < weapons.length; i++) {
        weapons[i].style.display = 'flex';
    }
}
