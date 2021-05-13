import './css/styles.css';
import { showAlert, showError } from './pnotify';

import countryCard from './tmp/countryCard.hbs'
import countriesList from './tmp/countryList.hbs';
import debounce from 'lodash.debounce';
 
const refs = {
    inputField: document.querySelector('#search'),
    listCountries: document.querySelector('.countries-list')
    };
 
 refs.inputField.addEventListener('input', debounce(onSearch, 500));

 function fetchCountries(name) {
    return fetch(`https://restcountries.eu/rest/v2/name/${name}`)
	.then(response => {
      if (!response.ok) {
	       return fetchError(error);
       } else {
	       return response.json();  
	    }
        });
    }
   
function onSearch(e) {
e.preventDefault();
const searchQuery = refs.inputField.value;
fetchCountries(searchQuery)
       .then(renderCard)
       .catch(fetchError)
       .finally(() => refs.inputField.value ='');
}

function fetchError(error) {
    showError('This country not found')
   }

function renderCard(country) {
 if (country.length > 1) {
const markup = countriesList(country);   
 refs.listCountries.innerHTML = markup;

        if  (country.length > 10) {
           return showAlert('Too many matches found. Please enter a more specific query!');
            }
       }
else {        
        const markup = countryCard(...country);
        refs.listCountries.innerHTML = markup;
  }
};
