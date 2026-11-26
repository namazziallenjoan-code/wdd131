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
        const locationLabel = document.createElement("strong");
        locationLabel.textContent = "Location: ";
        location.append(locationLabel, temple.location);

        const dedicated = document.createElement("p");
        const dedicatedLabel = document.createElement("strong");
        dedicatedLabel.textContent = "Dedicated: ";
        dedicated.append(dedicatedLabel, temple.dedicated);

        const area = document.createElement("p");
        const areaLabel = document.createElement("strong");
        areaLabel.textContent = "Area: ";
        area.append(
            areaLabel,
            `${temple.area.toLocaleString()} sq ft`
        );

        const image = document.createElement("img");
        image.src = temple.imageUrl;
        image.alt = `${temple.templeName} Temple in ${temple.location}`;
        image.loading = "lazy";
        image.width = 400;

        card.append(
            name,
            location,
            dedicated,
            area,
            image
        );

        templeContainer.appendChild(card);
    });
}


/* 3. TEMPLE FILTERS */

const filterLinks = document.querySelectorAll("nav a[data-filter]");
const galleryTitle = document.querySelector("#gallery-title");

function filterTemples(filter) {

    let filteredTemples = [];

    switch (filter) {

        case "home":
            filteredTemples = temples;
            galleryTitle.textContent = "Home";
            break;

        case "old":
            filteredTemples = temples.filter((temple) => {
                const year = Number(temple.dedicated.split(",")[0]);
                return year < 1900;
            });
            galleryTitle.textContent = "Old Temples";
            break;

        case "new":
            filteredTemples = temples.filter((temple) => {
                const year = Number(temple.dedicated.split(",")[0]);
                return year > 2000;
            });
            galleryTitle.textContent = "New Temples";
            break;

        case "large":
            filteredTemples = temples.filter((temple) => {
                return temple.area > 90000;
            });
            galleryTitle.textContent = "Large Temples";
            break;

        case "small":
            filteredTemples = temples.filter((temple) => {
                return temple.area < 10000;
            });
            galleryTitle.textContent = "Small Temples";
            break;

        default:
            filteredTemples = temples;
            galleryTitle.textContent = "Home";
    }

    displayTemples(filteredTemples);
}


/* 4. NAVIGATION CLICK EVENTS */

filterLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        event.preventDefault();

        const filter = link.dataset.filter;

        filterTemples(filter);

        filterLinks.forEach((item) => {
            item.classList.remove("active");
            item.removeAttribute("aria-current");
        });

        link.classList.add("active");
        link.setAttribute("aria-current", "page");
    });

});


/* 5. DISPLAY ALL TEMPLES ON PAGE LOAD */

displayTemples(temples);


/* 6. FOOTER DATES */

const today = new Date();

const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastmodified");

if (currentYear) {
    currentYear.textContent = today.getFullYear();
}

if (lastModified) {
    lastModified.textContent = document.lastModified;
}