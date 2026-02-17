// map.js - Fixed version

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Define the styling function with random colors for countries
function style(feature) {
    return {
        fillColor: getRandomColor(),
        weight: 1,
        opacity: 1,
        color: 'gray',
        fillOpacity: 0.7
    };
}

// Define the footprint icon
const footprintIcon = L.divIcon({
    className: 'animal-icon',
    html: '🐾',
    iconSize: [30, 30]
});

// Animal data for each country
const animalData = {
    "India": {
        name: "Bengal Tiger",
        scientificName: "Panthera tigris tigris",
        image: "https://a-z-animals.com/media/2021/05/iStock-1420676204-1024x680.jpg",
        lifespan: "20-25 years",
        iucnStatus: "Endangered"
    },
    "China": {
        name: "Giant Panda",
        scientificName: "Ailuropoda melanoleuca",
        image: "https://cdn.britannica.com/82/150982-050-957C395D/Chengdu-sleeping-giant-panda-breeding-centre-China.jpg",
        lifespan: "20 years",
        iucnStatus: "Vulnerable"
    },
    "Russia": {
        name: "Amur Leopard",
        scientificName: "Panthera pardus orientalis",
        image: "https://i.natgeofe.com/k/3550b018-dc62-4650-829f-ee0e2a95fc6d/amur-leopard-snow.jpg",
        lifespan: "10-15 years",
        iucnStatus: "Critically Endangered",
    },
    "Saudi Arabia": {
        name: "Arabian Oryx",
        scientificName: "Oryx leucoryx",
        image: "https://www.earth.com/assets/_next/image/?url=https%3A%2F%2Fcff2.earth.com%2Fuploads%2F2022%2F03%2F15174325%2FArabian-oryx-1400x850.jpg&w=1200&q=75",
        lifespan: "12-20 years",
        iucnStatus: "Vulnerable",
    },
    "Mongolia": {
        name: "Snow Leopard",
        scientificName: "Panthera uncia",
        image: "https://c02.purpledshub.com/uploads/sites/62/2014/10/GettyImages-164854094-85c87f5.jpg",
        lifespan: "15-18 years",
        iucnStatus: "Vulnerable",
    },
    "Pakistan": {
        name: "Indus River Dolphin",
        scientificName: "Platanista gangetica minor",
        image: "https://www.riverdolphins.org/wp-content/uploads/2021/03/Irrawaddy-featured-411x259.jpg",
        lifespan: "20-30 years",
        iucnStatus: "Endangered",
    },
    "Iran": {
        name: "Persian Leopard",
        scientificName: "Panthera pardus saxicolor",
        image: "https://mirpurifoundation.org/wp-content/uploads/2020/11/Kiamaky-003-1000x1500.jpg",
        lifespan: "10-15 years",
        iucnStatus: "Near Threatened",
    },
    "Indonesia": {
        name: "Sumatran Orangutan",
        scientificName: "Pongo abelii",
        image: "https://files.worldwildlife.org/wwfcmsprod/images/Sumatran_Orangutan/carousel_small/3o8r5hbzfl_Sumatran_Orangutan_8.6.2012_Why_They_Matter_XL_257639.jpg",
        lifespan: "30-40 years",
        iucnStatus: "Critically Endangered",
    },
    "Thailand": {
        name: "Asian Elephant",
        scientificName: "Elephas maximus",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Elephas_maximus_%28Bandipur%29.jpg/1200px-Elephas_maximus_%28Bandipur%29.jpg",
        lifespan: "60-70 years",
        iucnStatus: "Endangered",
    },
    "Japan": {
        name: "Japanese Macaque",
        scientificName: "Macaca fuscata",
        image: "https://www.lpzoo.org/wp-content/uploads/2023/01/macaque-tall.png",
        lifespan: "25-30 years",
        iucnStatus: "Least Concern",
    },
    "Turkey": {
        name: "Anatolian Leopard",
        scientificName: "Panthera pardus tulliana",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP4w1MtOPaIlWyRTfH-BleIR4xLqXBgJXh9Q&s",
        lifespan: "10-15 years",
        iucnStatus: "Near Threatened",
    },
    "Sri Lanka": {
        name: "Sri Lankan Elephant",
        scientificName: "Elephas maximus maximus",
        image: "https://static.wikia.nocookie.net/maker-scratchpad-youtube/images/d/db/Ceylon_Elephant.jpg/revision/latest?cb=20230511041639",
        lifespan: "60-70 years",
        iucnStatus: "Endangered",
    },
    "France": {
        name: "Iberian Wolf",
        scientificName: "Canis lupus signatus",
        image: "https://www.giraffa.co/wp-content/uploads/2019/11/Iberian-wolf-Canis-lupus-signatus-Giraffa-Arturo-de-Frias-Marques-2.jpg",
        lifespan: "10-14 years",
        iucnStatus: "Endangered",
    },
    "Germany": {
        name: "European Bison",
        scientificName: "Bison bonasus",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/59/European_bison_%28Bison_bonasus%29_male_Bia%C5%82owieza.jpg",
        lifespan: "15-25 years",
        iucnStatus: "Near Threatened",
    },
    "Romania": {
        name: "Brown Bear",
        scientificName: "Ursus arctos",
        image: "https://files.worldwildlife.org/wwfcmsprod/images/Brown_Bear_/hero_small/7h2u6tj3h3_brownbear_hero.jpg",
        lifespan: "20-30 years",
        iucnStatus: "Least Concern",
    },
    "Finland": {
        name: "Saimaa Ringed Seal",
        scientificName: "Pusa hispida saimensis",
        image: "https://files.worldwildlife.org/wwfcmsprod/images/Saimaa_ringed_seal_endangered_seal_story/story_full_width/3w3y9w5swp_Saimaa_ringed_seal___Juha_Taskinen_WWF_Finland__one_time_use__1_.jpg",
        lifespan: "30-35 years",
        iucnStatus: "Critically Endangered",
    },
    "Sweden": {
        name: "European Elk",
        scientificName: "Alces alces",
        image: "https://images.rzss.org.uk/media/Highland_Wildlife_Park/HWP_animals/Eurasian_elk/eurasian_elk_ash_1.jpg",
        lifespan: "15-25 years",
        iucnStatus: "Least Concern",
    },
    "Italy": {
        name: "Italian Wolf",
        scientificName: "Canis lupus italicus",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a0/C._l._italicus_in_MNP.jpg",
        lifespan: "10-15 years",
        iucnStatus: "Endangered",
    },
    "Spain": {
        name: "Iberian Lynx",
        scientificName: "Lynx pardinus",
        image: "https://reefandrainforest.b-cdn.net/wp-content/uploads/2024/04/Lynx-8.jpg",
        lifespan: "12 years",
        iucnStatus: "Critically Endangered",
    },
    "Portugal": {
        name: "Barbary Macaque",
        scientificName: "Macaca sylvanus",
        image: "https://www.woburnsafari.co.uk/globalassets/woburn-safari/2.-images/road-safari/reserves/monkeys/wsp_barbary-macaques_troop-on-slide_april-2023_credit-dayna-gordon_pr-web-landscape.jpg",
        lifespan: "20-30 years",
        iucnStatus: "Vulnerable",
    },
    "Greece": {
        name: "Cretan Wild Goat",
        scientificName: "Capra aegagrus cretica",
        image: "https://wonderfulcrete.wordpress.com/wp-content/uploads/2016/04/dag-kecisi01.jpg?w=634",
        lifespan: "10-15 years",
        iucnStatus: "Vulnerable",
    },
    "Latvia": {
        name: "European Brown Bear",
        scientificName: "Ursus arctos arctos",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs0l7gAnJ_2aBr07qvYkWx_-ACzL83WZsTpQ&s",
        lifespan: "20-30 years",
        iucnStatus: "Least Concern",
    },
    "Albania": {
        name: "Albanian Lynx",
        scientificName: "Lynx lynx",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Lynx_lynx_poing.jpg/220px-Lynx_lynx_poing.jpg",
        lifespan: "10-15 years",
        iucnStatus: "Vulnerable",
    },
    "Norway": {
        name: "Reindeer",
        scientificName: "Rangifer tarandus",
        image: "https://images.takeshape.io/86ce9525-f5f2-4e97-81ba-54e8ce933da7/dev/21f407e3-2624-4c06-992b-af35afdfc823/Reindeer%20dreamstime.jpeg?auto=compress%2Cformat&w=1440",
        lifespan: "10-15 years",
        iucnStatus: "Least Concern",
    },
    "Brazil": {
        name: "Jaguar",
        scientificName: "Panthera onca",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/640px-Standing_jaguar.jpg",
        lifespan: "12-15 years",
        iucnStatus: "Near Threatened",
    },
    "Venezuela": {
        name: "Capybara",
        scientificName: "Hydrochoerus hydrochaeris",
        image: "https://www.awsfzoo.com/media/capy1.png",
        lifespan: "8-12 years",
        iucnStatus: "Least Concern",
    },
    "Colombia": {
        name: "Andean Condor",
        scientificName: "Vultur gryphus",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Vultur_gryphus_-Dou%C3%A9-la-Fontaine_Zoo%2C_France-8a.jpg/220px-Vultur_gryphus_-Dou%C3%A9-la-Fontaine_Zoo%2C_France-8a.jpg",
        lifespan: "60 years",
        iucnStatus: "Near Threatened",
    },
    "Peru": {
        name: "Llama",
        scientificName: "Lama glama",
        image: "https://nwyarns.com/cdn/shop/articles/Llama_grande.png?v=1512170916",
        lifespan: "15-25 years",
        iucnStatus: "Domesticated",
    },
    "Bolivia": {
        name: "Guanaco",
        scientificName: "Lama guanicoe",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Guanaco_09.24.jpg",
        lifespan: "15-20 years",
        iucnStatus: "Least Concern",
    },
    "Chile": {
        name: "Chilean Flamingo",
        scientificName: "Phoenicopterus chilensis",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEr72PomZ_GW26mAb7tcdTIyUVIAQzBdu4tw&s",
        lifespan: "40-50 years",
        iucnStatus: "Near Threatened",
    },
    "Argentina": {
        name: "Southern Right Whale",
        scientificName: "Eubalaena australis",
        image: "https://whalewatchwa.mymedia.delivery/2400x1600/p/o/wp-content/uploads/2024/01/Whale-Watch-Western-Australia-12.jpg",
        lifespan: "50-70 years",
        iucnStatus: "Least Concern",
    },
    "Suriname": {
        name: "Giant River Otter",
        scientificName: "Pteronura brasiliensis",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuk7S-_k1Cocunkv-nn1-UqSuB0IPO_iOulg&s",
        lifespan: "10 years",
        iucnStatus: "Endangered",
    },
    "Canada": {
        name: "Canadian Lynx",
        scientificName: "Lynx canadensis",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSByT5uDqDZtAgOa4MZm768T8u-YQDIxhK6LA&s",
        lifespan: "10-15 years",
        iucnStatus: "Least Concern",
    },
    "Mexico": {
        name: "Axolotl",
        scientificName: "Ambystoma mexicanum",
        image: "https://i.natgeofe.com/n/de94c416-6d23-45f5-9708-e8d56289268e/naturepl_01132178_3x2.jpg",
        lifespan: "10-15 years",
        iucnStatus: "Critically Endangered",
    },
    "Honduras": {
        name: "Scarlet Macaw",
        scientificName: "Ara macao",
        image: "https://miro.medium.com/v2/resize:fit:1400/0*eJ-vUsPwRRC_1dHS.jpg",
        lifespan: "40-50 years",
        iucnStatus: "Least Concern",
    },
    "Algeria": {
        name: "Barbary Sheep",
        scientificName: "Ammotragus lervia",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSriVUmhyv9bercFMwlvSLUIUCthMPjfWgoDg&s",
        lifespan: "10-15 years",
        iucnStatus: "Near Threatened",
    },
    "Chad": {
        name: "Addax",
        scientificName: "Addax nasomaculatus",
        image: "https://cdn.britannica.com/48/215948-050-A70D328C/Addax-nosomaculatus-found-in-Mauritania-Niger-Chad-Africa.jpg",
        lifespan: "15 years",
        iucnStatus: "Critically Endangered",
    },
    "Egypt": {
        name: "Nile Crocodile",
        scientificName: "Crocodylus niloticus",
        image: "https://azertag.az/files/galleryphoto/2022/1/1200x630/16503835324091123300_1200x630.jpg",
        lifespan: "70-100 years",
        iucnStatus: "Least Concern",
    },
    "Nigeria": {
        name: "African Grey Parrot",
        scientificName: "Psittacus erithacus",
        image: "https://www.worldanimalprotection.org.uk/cdn-cgi/image/fit=cover,width=1280/siteassets/article/1022602_1.jpeg",
        lifespan: "50-60 years",
        iucnStatus: "Near Threatened",
    },
    "Angola": {
        name: "Giant Sable Antelope",
        scientificName: "Hippotragus niger variani",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHfADgwOWXvEeZIIx-1zAKKceX_vxMQ7nq_A&s",
        lifespan: "15-20 years",
        iucnStatus: "Critically Endangered",
    },
    "Ethiopia": {
        name: "Ethiopian Wolf",
        scientificName: "Canis simensis",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ50-tai0nt7GruTxYrLBeTlj3f8c3evEGBQ&s",
        lifespan: "7-10 years",
        iucnStatus: "Critically Endangered",
    },
    "Madagascar": {
        name: "Ring-tailed Lemur",
        scientificName: "Lemur catta",
        image: "https://c02.purpledshub.com/uploads/sites/62/2021/07/Mathias-Appel-Ring-tailed-lemur-showing-tail-032ce8a.jpg?webp=1&w=1200",
        lifespan: "18 years",
        iucnStatus: "Endangered",
    },
    "Morocco": {
        name: "Barbary Macaque",
        scientificName: "Macaca sylvanus",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRRKaHsDl4AcEj7YJim6owc06jLbgBwUn_Ww&s",
        lifespan: "20-30 years",
        iucnStatus: "Vulnerable",
    },
    "Papua New Guinea": {
        name: "Bird of Paradise",
        scientificName: "Paradisaeidae",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Raggiana_Bird-of-Paradise_wild_5.jpg/330px-Raggiana_Bird-of-Paradise_wild_5.jpg",
        lifespan: "10 years",
        iucnStatus: "Near Threatened",
    },
    "Australia": {
        name: "Koala",
        scientificName: "Phascolarctos cinereus",
        image: "https://cdn.britannica.com/26/162626-050-3534626F/Koala.jpg",
        lifespan: "10-18 years",
        iucnStatus: "Vulnerable",
    },
    "New Zealand": {
        name: "Kiwi",
        scientificName: "Apteryx",
        image: "https://nationalzoo.si.edu/sites/default/files/animals/northislandbrownkiwi-001.jpg",
        lifespan: "25-50 years",
        iucnStatus: "Endangered",
    }
};

// Function to get coordinates for specified countries
function getCountryCoordinates(country) {
    const coordinates = {
        "India": [20.5937, 78.9629],
        "China": [35.8617, 104.1954],
        "Russia": [61.5240, 105.3188],
        "Saudi Arabia": [23.8859, 45.0792],
        "Mongolia": [46.8625, 103.8467],
        "Pakistan": [30.3753, 69.3451],
        "Iran": [32.4279, 53.6880],
        "Indonesia": [-0.7893, 113.9213],
        "Thailand": [15.8700, 100.9925],
        "Japan": [36.2048, 138.2529],
        "Turkey": [38.9637, 35.2433],
        "Sri Lanka": [7.8731, 80.7718],
        "France": [46.6034, 1.8883],
        "Germany": [51.1657, 10.4515],
        "Romania": [45.9432, 24.9668],
        "Finland": [61.9241, 25.7482],
        "Sweden": [60.1282, 18.6435],
        "Italy": [41.8719, 12.5674],
        "Spain": [40.4637, -3.7492],
        "Portugal": [39.3999, -8.2245],
        "Greece": [39.0742, 21.8243],
        "Latvia": [56.8796, 24.6032],
        "Albania": [41.1533, 20.1683],
        "Norway": [60.4720, 8.4689],
        "Brazil": [-14.2350, -51.9253],
        "Venezuela": [6.4238, -66.5897],
        "Colombia": [4.5709, -74.2973],
        "Peru": [-9.19, -75.0152],
        "Bolivia": [-16.2902, -63.5887],
        "Chile": [-35.6751, -71.5375],
        "Argentina": [-38.4161, -63.6167],
        "Suriname": [3.9193, -56.0273],
        "Canada": [56.1304, -106.3468],
        "Mexico": [23.6345, -102.5528],
        "Honduras": [15.1999, -86.2419],
        "Algeria": [28.0339, 1.6596],
        "Chad": [15.4542, 18.7322],
        "Egypt": [26.8206, 30.8025],
        "Nigeria": [9.0820, 8.6753],
        "Angola": [-11.2027, 17.8739],
        "Ethiopia": [9.1450, 40.489673],
        "Madagascar": [-18.7669, 46.8691],
        "Morocco": [31.7917, -7.0926],
        "Papua New Guinea": [-6.3150, 143.9555],
        "Australia": [-25.2744, 133.7751],
        "New Zealand": [-40.9006, 174.8860],
    };
    return coordinates[country];
}

// Custom CSS for tooltip styling
const styleElement = document.createElement('style');
styleElement.innerHTML = `
    .custom-tooltip {
        background: rgba(255, 255, 255, 0.95);
        border-radius: 8px;
        padding: 12px;
        font-family: Arial, sans-serif;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        max-width: 250px;
        border: 1px solid #ddd;
    }
    .custom-tooltip img {
        border-radius: 5px;
        width: 100%;
        height: auto;
        margin-bottom: 8px;
    }
    .custom-tooltip h3 {
        margin: 5px 0;
        color: #333;
        font-size: 16px;
    }
    .custom-tooltip p {
        margin: 3px 0;
        color: #666;
        font-size: 14px;
    }
    .animal-icon {
        background-color: rgba(255, 255, 255, 0.9);
        border-radius: 50%;
        text-align: center;
        line-height: 30px;
        color: black;
        font-weight: bold;
        border: 2px solid #333;
        font-size: 20px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    }
`;
document.head.appendChild(styleElement);

let currentMap = null;

// Main function to load continent maps
function loadContinentMap(mapId, centerCoordinates, zoomLevel, continentCountries) {
    console.log('Loading map for:', mapId, centerCoordinates);
    
    const mapContainer = document.getElementById(mapId);
    if (!mapContainer) {
        console.error('Map container not found:', mapId);
        return;
    }
    
    // Clear any existing map
    mapContainer.innerHTML = "";
    mapContainer.style.height = "100%";
    mapContainer.style.width = "100%";

    // Remove previous map instance if it exists
    if (currentMap) {
        currentMap.remove();
    }

    // Create new map
    const map = L.map(mapId).setView(centerCoordinates, zoomLevel);
    currentMap = map;

    // Add tile layer (this is crucial for showing the map!)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
    }).addTo(map);

    // Fetch country boundaries
    fetch('https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('GeoJSON loaded, filtering for', continentCountries.length, 'countries');
            
            // Add country polygons
            L.geoJSON(data, {
                style: style,
                filter: feature => continentCountries.includes(feature.properties.ADMIN),
                onEachFeature: (feature, layer) => {
                    layer.bindPopup(feature.properties.ADMIN);
                }
            }).addTo(map);

            // Add animal markers
            let markerCount = 0;
            continentCountries.forEach(country => {
                const countryCoordinates = getCountryCoordinates(country);
                const animal = animalData[country];

                if (countryCoordinates && animal) {
                    markerCount++;
                    const tooltipContent = `
                        <div style="text-align: center;">
                            <img src="${animal.image}" alt="${animal.name}" style="width: 100%; height: auto; border-radius: 5px; max-height: 150px; object-fit: cover;">
                            <h3 style="margin: 10px 0 5px;">${animal.name}</h3>
                            <p><em>${animal.scientificName}</em></p>
                            <p><strong>Country:</strong> ${country}</p>
                            <p><strong>Lifespan:</strong> ${animal.lifespan}</p>
                            <p><strong>IUCN Status:</strong> ${animal.iucnStatus}</p>
                        </div>
                    `;

                    L.marker(countryCoordinates, { icon: footprintIcon })
                        .addTo(map)
                        .bindTooltip(tooltipContent, {
                            direction: 'top',
                            className: 'custom-tooltip',
                            offset: [0, -20],
                            permanent: false,
                            opacity: 1
                        });
                }
            });
            console.log(`Added ${markerCount} animal markers`);
        })
        .catch(error => {
            console.error("Error loading GeoJSON:", error);
            // Show error on map
            mapContainer.innerHTML = '<div style="color: red; padding: 20px;">Error loading map data. Please try again.</div>';
        });
}

// Function to open map and add close functionality
function openMap(continent) {
    console.log('Opening map for continent:', continent);
    
    // Hide all maps first
    document.querySelectorAll('.map-full').forEach(map => {
        map.style.display = 'none';
    });
    
    const mapContainer = document.getElementById(continent + '-full');
    if (!mapContainer) {
        console.error('Map container not found for continent:', continent);
        return;
    }
    
    mapContainer.style.display = 'block';
    
    // Remove existing close button if any
    const existingClose = document.getElementById(continent + '-close');
    if (existingClose) {
        existingClose.remove();
    }
    
    // Create close button
    const closeButton = document.createElement('button');
    closeButton.id = continent + '-close';
    closeButton.textContent = 'Close Map';
    closeButton.className = 'close-btn';
    closeButton.onclick = function() {
        mapContainer.style.display = 'none';
        // Clean up map
        if (currentMap) {
            currentMap.remove();
            currentMap = null;
        }
    };
    
    // Append the close button to the map container
    mapContainer.appendChild(closeButton);

    // Initialize the map
    setTimeout(() => {
        loadContinentMap(
            continent + '-full-map', 
            getCenterCoordinates(continent), 
            3, 
            getCountriesByContinent(continent)
        );
    }, 100); // Small delay to ensure DOM is ready
}

// Get countries by continent (filtered to only those with data)
function getCountriesByContinent(continent) {
    const allCountries = {
        africa: ["Algeria", "Angola", "Chad", "Egypt", "Ethiopia", "Madagascar", "Morocco", "Nigeria"],
        asia: ["China", "India", "Indonesia", "Iran", "Japan", "Mongolia", "Pakistan", "Russia", "Saudi Arabia", "Sri Lanka", "Thailand", "Turkey"],
        europe: ["Albania", "Finland", "France", "Germany", "Greece", "Italy", "Latvia", "Norway", "Portugal", "Romania", "Spain", "Sweden"],
        "north-america": ["Canada", "Honduras", "Mexico"],
        "south-america": ["Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Peru", "Suriname", "Venezuela"],
        australia: ["Australia", "New Zealand", "Papua New Guinea"]
    };
    
    // Filter to only include countries that have animal data
    const continentCountries = allCountries[continent] || [];
    return continentCountries.filter(country => animalData.hasOwnProperty(country));
}

// Center coordinates function
function getCenterCoordinates(continent) {
    const centers = {
        africa: [1.650801, 10.267895],
        asia: [34.0479, 100.6197],
        europe: [54.5260, 15.2551],
        "north-america": [37.0902, -95.7129],
        "south-america": [-14.2350, -51.9253],
        australia: [-25.2744, 133.7751]
    };
    return centers[continent];
}

// Make functions globally available
window.openMap = openMap;
window.loadContinentMap = loadContinentMap;

console.log('map.js loaded successfully');