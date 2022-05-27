'use strict';
// Cities data
let citiesData;

// Get Data from JSON
fetch('./Data/events-cards.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    citiesData = data;
    // Initialize Cards
    createCard(citiesData.defaultSelection);
  })
  .catch(function (error) {
    console.log(error);
  });

// Get Selected Option
const eventContainer = document.querySelector('.container-event');

// Create card on change
const eventSelector = document.getElementById('event_city');
/* eventSelector.addEventListener("change", (e) => {
  eventContainer.innerHTML = "";
  createCard(e.target);
}); */
eventSelector.addEventListener('change', (e) => {
  removeCard(eventContainer, '.event-card');
  createCard(e.target.value);
});

const createCard = (selectedOption) => {
  const city = citiesData[selectedOption][0];
  for (const restaurant in city) {
    const header = city[restaurant].Header;
    const paragraph = city[restaurant].Paragraph;
    const image = city[restaurant].url;
    const card = document.createElement('div');
    card.classList.add('event-card');
    card.innerHTML = `
    <img src="${image}"> 
    <div class="event-description">
            <h1>${header}</h1>
            <p>${paragraph}</p>
        </div>
    `;
    eventContainer.appendChild(card);
  }
};
const removeCard = (parentElement, className) => {
  parentElement.querySelectorAll(className).forEach((card) => {
    card.remove();
  });
};
