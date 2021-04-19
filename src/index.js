import './css/styles.css';
import countryCardTpl from './tmp/countryCard.hbs'
const refs = {
    inputField: document.querySelector('#search'),
    countriesList: document.querySelector('.countries-list'),
    form: document.querySelector('.js-search-form'),
}
  
const BASE_URL = "https://restcountries.eu/rest/v2/name/ukr";

fetch(`${BASE_URL}`)
    .then(response => {
    return response.json();
    })
    .then(name => {
    // console.log(name);
    const markup = countryCardTpl(...name);
    // console.log(markup);
    refs.countriesList.innerHTML = markup;
    })
    .catch(error => {
        console.log(error);
    });