/* 1. TEMPLE ARRAY */
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    // Three additional temples
    {
        templeName: "Salt Lake Utah",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-4512-main.jpg"
    },
    {
        templeName: "Laie Hawaii",
        location: "Laie, Hawaii, United States",
        dedicated: "1919, November, 27",
        area: 42000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple/laie-hawaii-temple-5412-main.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-4075-main.jpg"
    }
];


/* 2. DISPLAY TEMPLE CARDS */

const templeContainer = document.querySelector("#temple-container");

function displayTemples(templeList) {
    templeContainer.innerHTML = "";

    templeList.forEach((temple) => {
        const card = document.createElement("section");
        card.classList.add("temple-card");

        const name = document.createElement("h3");
        name.textContent = temple.templeName;

        const location = document.createElement("p");
        location.innerHTML = `<strong>Location:</strong> ${temple.location}`;

        const dedicated = document.createElement("p");
        dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

        const area = document.createElement("p");
        area.innerHTML = `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`;

        const image = document.createElement("img");
        image.src = temple.imageUrl;
        image.alt = temple.templeName;
        image.loading = "lazy";

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);

        templeContainer.appendChild(card);
    });
}


/* 3. FIVE NAVIGATION FILTERS */

const filterButtons = document.querySelectorAll("nav button");
const galleryTitle = document.querySelector("#gallery-title");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {

        const filter = button.dataset.filter;
        let filteredTemples = [];

        if (filter === "home") {
            filteredTemples = temples;
            galleryTitle.textContent = "Home";
        }

        else if (filter === "old") {
            filteredTemples = temples.filter((temple) => {
                const year = Number(temple.dedicated.split(",")[0]);
                return year < 1900;
            });
            galleryTitle.textContent = "Old Temples";
        }

        else if (filter === "new") {
            filteredTemples = temples.filter((temple) => {
                const year = Number(temple.dedicated.split(",")[0]);
                return year > 2000;
            });
            galleryTitle.textContent = "New Temples";
        }

        else if (filter === "large") {
            filteredTemples = temples.filter((temple) => {
                return temple.area > 90000;
            });
            galleryTitle.textContent = "Large Temples";
        }

        else if (filter === "small") {
            filteredTemples = temples.filter((temple) => {
                return temple.area < 10000;
            });
            galleryTitle.textContent = "Small Temples";
        }

        // Display the selected temples
        displayTemples(filteredTemples);

        // Highlight the selected button
        filterButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        button.classList.add("active");
    });
});

// Display all temples when the page loads
displayTemples(temples);



// Get the current year
const today = new Date();

// Display the current year in the footer
document.querySelector("#currentyear").textContent = today.getFullYear();

// Display the last modified date
document.querySelector("#lastmodified").textContent = document.lastModified;