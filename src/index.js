import './css/styles.css';
import countryCard from './tmp/countryCard.hbs'
import countryList from './tmp/countryList.hbs';
import debounce from 'lodash.debounce';
const refs = {
    inputField: document.querySelector('#search'),
    countriesList: document.querySelector('.countries-list')
    };
  
 refs.inputField.addEventListener('input', debounce(onSearch, 600));

 function onSearch(e) {
e.preventDefault();
// получаем значение инпута
const searchQuery = refs.inputField.value;

// значение инпута в аргумент для ф-и поиска
fetchCountries (searchQuery)
.then(renderCard)
.catch(onFetchError)
.finally(() => refs.inputField.value ='');
}


// ф-я поиска
function fetchCountries (name) {
    return fetch(`https://restcountries.eu/rest/v2/name/${name}`).then(response => {
    return response.json();  
        });
    }

function onFetchError(error) {
showError('This country not found')
}

//разметка 
function renderCard (name) {
 const markup = countryCard(...name);   
 refs.countriesList.innerHTML = markup;
};
