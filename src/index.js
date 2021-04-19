import './css/styles.css';
import countryCardRef from './tmp/countryCard.hbs'
const refs = {
    inputRef: document.querySelector('#search'),
    countriesList: document.querySelector('.countries-list'),
    form: document.querySelector('form'),
}

const BASE_URL = "https://restcountries.eu/rest/v2/name/usa";

fetch(`${BASE_URL}`)
    .then(response => {
    return response.json();
    })
    .then(name => {
    // console.log(name);
    const markup = countryCardRef(...name);
    // console.log(markup);
    refs.countriesList.innerHTML = markup;
    })
    .catch(error => {
        console.log(error);
    });
