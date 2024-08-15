const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

/*Elements*/

const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const closeButton = document.querySelector("#profile-modal-close");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const profileNameInput = document.querySelector("#form-input-name");
const profileDescriptionInput = document.querySelector(
  "#form-input-description"
);
const profileEditForm = profileEditModal.querySelector(".modal__form");
const cardListElement = document.querySelector(".cards__list");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

/*Functions*/

function closePopup() {
  profileEditModal.classList.remove("modal_opened");
}

function getCardElement(cardData) {
  /*clone the template element with all its content and store it in a cardElement variable*/
  const cardElement = cardTemplate.cloneNode(true);

  /*access the card title and image and store them in variables*/
  const cardImageElement = cardElement.querySelector(".card__image");
  const cardTitleElement = cardElement.querySelector(".card__title");

  /*set the path to the image to the link field of the object*/
  cardImageElement.src = cardData.link;

  /*set the image alt text to the name field of the object*/
  cardImageElement.alt = cardData.name;

  /*set the card title to the name field of the object, too*/
  cardTitleElement.textContent = cardData.name;

  /*return the ready HTML element with the filled-in data*/
  return cardElement;
}

/*Handlers*/

function handleProfileEditSubmit(event) {
  event.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup();
}

/*Event Listeners*/

profileEditButton.addEventListener("click", () => {
  profileEditModal.classList.add("modal_opened");
  profileNameInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
});

closeButton.addEventListener("click", closePopup);

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardListElement.append(cardElement);
});

console.log({
  profileEditButton,
  profileEditModal,
  closeButton,
  profileEditForm,
  profileName,
  profileDescription,
  profileNameInput,
  profileDescriptionInput,
  cardListElement,
  initialCards,
  cardTemplate,
});
