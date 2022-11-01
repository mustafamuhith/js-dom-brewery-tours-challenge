const breweryListUl = document.querySelector('.breweries-list')
const breweryFilter = document.querySelector('#filter-by-type')
const selectByState = document.querySelector('#select-state-form')


function renderBrewery(establishment) {
    // create: 'li'
    const li = document.createElement('li')

    // h2 'brewery.name'
    const nameOfBrewery = document.createElement('h2')
    nameOfBrewery.innerText = establishment.name

    // div type 'brewery_type'
    const typeOfBrewery = document.createElement('div')
    typeOfBrewery.setAttribute('class', '.type')
    typeOfBrewery.innerText = establishment.brewery_type

    // section with class of 'address' e.g. title, address, postcode
    const brewerySection = document.createElement('section')
    brewerySection.setAttribute('class', '.address')

    const addressHeading = document.createElement('h3')
    addressHeading.innerText = 'Address:'

    const firstLineAddress = document.createElement('p')
    firstLineAddress.innerText = establishment.street

    // create strong within the p
    const secondLineAddress = document.createElement('p')

    const boldSecondLineAddress = document.createElement('strong')
    boldSecondLineAddress.innerText = establishment.city
    boldSecondLineAddress.innerText = establishment.postal_code

    secondLineAddress.appendChild(boldSecondLineAddress)

    // append the section
    brewerySection.appendChild(breweryTitleAddress, firstLineAddress, secondLineAddress)


    // second section for phone with title and 'n/a'
    const phoneSection = document.createElement('section')
    phoneSection.setAttribute('class', '.phone')

    const phoneHeading = document.createElement('h3')
    phoneHeading.innerText = 'Phone:'

    const phoneNumber = document.createElement('p')
    phoneNumber.innerText = establishment.phone

    // append section

    phoneSection.appendChild(phoneHeading, phoneNumber)

    
    // link section with class of link
    // create link with attribute of null and target

    // append link to the section


    // append all to the li


    // return li
}