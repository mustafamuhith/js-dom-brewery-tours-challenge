/*SELECT HTML TO THE PAGE*/

const breweryListUl = document.querySelector(".breweries-list");
const breweryFilter = document.querySelector("#filter-by-type");
const selectByState = document.querySelector("#select-state-form");

const state = {
  states: [],
};

function renderBrewery(establishment) {
  // create: 'li'
  const li = document.createElement("li");

  // h2 'brewery.name'
  const nameOfBrewery = document.createElement("h2");
  nameOfBrewery.innerText = establishment.name;

  // div type 'brewery_type'
  const typeOfBrewery = document.createElement("div");
  typeOfBrewery.setAttribute("class", ".type");
  typeOfBrewery.innerText = establishment.brewery_type;

  // section with class of 'address' e.g. title, address, postcode
  const brewerySection = document.createElement("section");
  brewerySection.setAttribute("class", ".address");

  const addressHeading = document.createElement("h3");
  addressHeading.innerText = "Address:";

  const firstLineAddress = document.createElement("p");
  firstLineAddress.innerText = establishment.street;

  // create strong within the p
  const secondLineAddress = document.createElement("p");

  const boldSecondLineAddress = document.createElement("strong");
  boldSecondLineAddress.innerText = establishment.city;
  boldSecondLineAddress.innerText = establishment.postal_code;

  secondLineAddress.appendChild(boldSecondLineAddress);

  // append the section
  brewerySection.appendChild(
    breweryTitleAddress,
    firstLineAddress,
    secondLineAddress
  );

  // second section for phone with title and 'n/a'
  const phoneSection = document.createElement("section");
  phoneSection.setAttribute("class", ".phone");

  const phoneHeading = document.createElement("h3");
  phoneHeading.innerText = "Phone:";

  const phoneNumber = document.createElement("p");
  phoneNumber.innerText = establishment.phone;

  // append section
  phoneSection.appendChild(phoneHeading, phoneNumber);

  // link section with class of link
  const linkSection = document.createElement("section");
  linkSection.setAttribute("class", ".link");

  const anchorTag = document.createElement("a");
  anchorTag.setAttribute("href", "null");
  anchorTag.setAttribute("target", "_blank");
  anchorTag.innerText = "Visit Website";

  linkSection.appendChild(anchorTag);

  // append all to the li
  li.appendChild(
    nameOfBrewery,
    typeOfBrewery,
    brewerySection,
    phoneSection,
    linkSection
  );

  // return li
  return li;
}

/* INIT - the first thing that ran when paged loaded */
// when the page loads call a function that make a get request

function getAllStatesFromServer() {
  console.log("getting all states");

  const uri = "https://api.openbrewerydb.org/breweries?per_page=50";

  const result = fetch(uri)
    .then((response) => {
      return response.json();
    })
    .then((arrayOfStates) => {
      console.log("response received from server:", arrayOfStates);
    });
    
  console.log(result);
}

getAllStatesFromServer();
