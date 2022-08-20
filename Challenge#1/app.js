// Vanilla JavaScript DOM Challenges //

// BEGINNER CHALLENGES //

// 1. Create a div (don’t put it in the DOM yet).
const createdDivElem = document.createElement('div');

// 2. Add a class of "boxy" to that div.
createdDivElem.classList.add('boxy');

// 3. Add two paragraphs of text to that div with the text of your choosing.
const paragraphs = `
    <p>Chris is the best!</p>
    <p>CiP rules!</p>
`;
createdDivElem.innerHTML = paragraphs;

// 4. Insert the div into the DOM just after the h1.
const h1 = document.querySelector('h1');
// h1.after(createdDivElem);
h1.insertAdjacentElement('afterend', createdDivElem);

// 5. Add a third paragraph to the div after it’s in the DOM.
createdDivElem.id = 'createdDivInDom';
const createdDivInDom = document.querySelector('#createdDivInDom');
createdDivInDom.insertAdjacentHTML('beforeend', `
    <p>3rd paragraph!</p>
`);

// BEGINNER+ CHALLENGES //

// 1. Add an unordered sublist to the last list item with three children ("one", "two", and "three").
const listItems = document.querySelectorAll('.list-item');

const sublistContent = `
    <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
    </ul>
`;

listItems[listItems.length - 1].insertAdjacentHTML('beforeend', sublistContent);

// 2. Add a paragraph after the list of items with a class of "glow."
const list = document.querySelector('.list');
const paragraphWithClassGlow = document.createElement('p');
paragraphWithClassGlow.classList.add('glow');
paragraphWithClassGlow.innerText = 'Paragraph with class of Glow';
list.insertAdjacentElement('afterend', paragraphWithClassGlow);

// 3. Remove a card when its button is clicked.
const cardBtns = document.querySelectorAll('.card__btn');
// const removeCard = (e) => {
//     e.target.parentElement.remove();
// }
// cardBtns.forEach(btn => {
//     btn.addEventListener('click', () => btn.parentElement.remove());
// });
// OR ?! with this keyword
// function removeCard() {
//     const clickedCard = this.parentElement;
//     clickedCard.remove();
// }

// 4. Change the event listener to the following Toggle the class "glow" to the image when you click the card’s button.
// cardBtns.forEach(btn => {
//     btn.addEventListener('click', () => 
//         btn.parentElement.querySelector('img').classList.toggle('glow'));
// });

// 5. Change the event listener to the following. Change the title of all other cards to "Jealous 👀" when you click on a card’s button. (BONUS: Change the title of the card that was clicked to "I’m the greatest!")
// cardBtns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         const titles = document.querySelectorAll('.card__heading');
//         titles.forEach(title => title.innerHTML = 'Jealous 👀');
//         btn.parentElement.querySelector('.card__heading').innerHTML = 'I’m the greatest!'
//     });
// });

const cards = document.querySelectorAll('.card');
const handleBtnClick = (e) => {
    const cardId = e.target.parentElement.id;
    cards.forEach(card => {
        if (card.id !== cardId) return card.querySelector('.card__heading').innerText = 'Jealous 👀';

        card.querySelector('.card__heading').innerText = 'I’m the greatest!'
    })
}

cardBtns.forEach(btn => {
    btn.addEventListener('click', handleBtnClick)
});

//INTERMEDIATE CHALLENGES//

// 1. Append a button below the card-container that says "Add more cards" (it should have the class "btn").
const cardContainerElem = document.querySelector('.card-container');
const addBtn = document.createElement('button');
addBtn.classList.add('btn');
addBtn.innerText = 'Add more cards';
cardContainerElem.insertAdjacentElement('afterend', addBtn);

// 2. Create a function that generates a new card when clicked (you can copy current HTML code) and places it as the last card in the card container (BONUS: Set the query parameter of the image and the id of the image to its card number).
const addNewCard = () => {
    const numberOfCardss = cardContainerElem.children.length;

    const newCard = `
        <div class="card" id="card-${numberOfCardss + 1}">
            <img class="card__image" width="300" height="300" src="https://picsum.photos/300/?random=${numberOfCardss + 1}" alt="Lorem Ipsum Picture">
            <h2 class="card__heading">Lorem Ipsum Title ${numberOfCardss + 1}</h2>
            <p class="card__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam esse consequatur culpa itaque saepe, placeat amet repellendus.</p>
            <button class="btn card__btn">Learn More</button>
        </div>
    `;
    cardContainerElem.insertAdjacentHTML('beforeend', newCard);
}
addBtn.addEventListener('click', addNewCard);

// 3. Create a function that adds cards but receives two parameters: title and description. When invoked, the function should create a new card with those parameters as the title (the h2 text) and description (the paragraph text) of the card. Create 3 new cards from the JavaScript file (i.e., upon page load)
const generateCardsFromJS = ({title, desc}) => {
    const numberOfCardss = cardContainerElem.children.length;

    const newCard = `
        <div class="card" id="card-${numberOfCardss + 1}">
            <img class="card__image" width="300" height="300" src="https://picsum.photos/300/?random=${numberOfCardss + 1}" alt="Lorem Ipsum Picture">
            <h2 class="card__heading">${title} ${numberOfCardss + 1}</h2>
            <p class="card__description">${desc}</p>
            <button class="btn card__btn">Learn More</button>
        </div>
    `;
    cardContainerElem.insertAdjacentHTML('beforeend', newCard);
}

generateCardsFromJS({
    title: 'New Title',
    desc: 'Descriptive paragraph'
});
generateCardsFromJS({
    title: 'New Title',
    desc: 'Descriptive paragraph'
});
generateCardsFromJS({
    title: 'New Title',
    desc: 'Descriptive paragraph'
});

// 4. Removes a card from the DOM only when a card image is clicked. (BONUS: Make it work on new cards added to the DOM.)
const removeCardOnImgClick = (e) => {
    if (!e.target.classList.contains('card__image')) return;
    e.target.closest('.card').remove();
}
cardContainerElem.addEventListener('click', removeCardOnImgClick);

// 5. Create and insert a button that says "Change Color Scheme" (ensure the button has a class of 'btn') that changes the css variable --_hue to a random number between 0 and 360 when clicked.
const insertedBtn = document.createElement('button');
insertedBtn.classList.add('btn');
insertedBtn.textContent = 'Change Color Scheme';
cardContainerElem.insertAdjacentElement('beforebegin', insertedBtn);

const getRandomClr = () => {
    return Math.floor(Math.random() * 360);
}

insertedBtn.addEventListener('click', () => {
    const randomClr = getRandomClr();
    
    document.documentElement.style.setProperty('--_hue', randomClr);
});