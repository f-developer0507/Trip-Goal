// header start
const headerRow = document.querySelector(".header-row");
const headerLogo = document.createElement("a");
const headerList = document.createElement("ul");
const headerLinkImg = document.createElement("img");
const headerRegister = document.createElement("a");

headerList.classList.add("header__list");
headerLogo.classList.add("header__logo");
headerRegister.classList.add("header__register-btn");
headerLinkImg.classList.add("header__logo-img");
headerLinkImg.src = "./images/header/logo.svg";
headerLogo.href = "./index.html";
headerRegister.href = "#!";
headerRegister.textContent = "Register";

headerLogo.append(headerLinkImg);

const listItem = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "About",
  },
  {
    id: 3,
    name: "Packages",
  },
  {
    id: 4,
    name: "Contact Us",
  },
  {
    id: 5,
    name: "FAQ",
  },
];
listItem.map((item) => {
  const headerItem = document.createElement("li");
  const headerLink = document.createElement("a");
  headerItem.classList.add("header__item");
  headerLink.classList.add("header__link");
  headerLink.textContent = item.name;

  headerItem.appendChild(headerLink);
  headerList.appendChild(headerItem);
});

headerLogo.appendChild(headerLinkImg);
headerRow.append(headerLogo, headerList, headerRegister);
// header end

// intro start
const introRow = document.querySelector(".intro-row");
const introImg = document.createElement("div");
const img = document.createElement("img");
const introContent = document.createElement("div");
const contentBadge = document.createElement("p");
const contentTitle = document.createElement("h2");
const contentText = document.createElement("p");
const contentBtn = document.createElement("a");

contentBadge.textContent = "Book Now";
contentTitle.textContent = "Let’s Enjoy Your Trip with TripGoal";
contentText.textContent =
  "Thinking of taking a break from every day's busy life? Planning to go out of the country with your loved ones to have some fun and quality time in a cost-effective way?";
contentBtn.textContent = "Start Now";

contentBadge.classList.add("content__badge");
contentTitle.classList.add("content__title");
contentText.classList.add("content__text");
contentBtn.classList.add("content__btn");
introContent.classList.add("intro__content");
contentBtn.href = "#!";
img.src = "./images/intro/intro-img.png";
introImg.classList.add("intro__img");

introContent.append(contentBadge, contentTitle, contentText, contentBtn);
introImg.appendChild(img);
introRow.append(introImg, introContent);
// intro end

// select start
const introSection = document.querySelector(".intro-section");
const select = document.createElement("div");
const selectList = document.createElement("ul");
const selectBookNow = document.createElement("div");
const bookNowText = document.createElement("strong");
const bookNowImg = document.createElement("img");

bookNowImg.classList.add("book-now__img");
select.classList.add("select__wrapper");
selectBookNow.classList.add("select__book-now");
bookNowText.classList.add("book-now__text");

bookNowImg.src = "./images/select/book-now-icon.svg";
bookNowText.textContent = "Book Now";

const selectlist = [
  {
    id: 1,
    name: "Location",
    text: "Select",
  },
  {
    id: 2,
    name: "Your Category",
    text: "Select",
  },
  {
    id: 3,
    name: "Total Person",
    text: "Select",
  },
];

selectlist.map((item) => {
  const selectItem = document.createElement("li");
  const selectTitle = document.createElement("strong");
  const selectText = document.createElement("p");

  selectList.classList.add("select__list");
  selectItem.classList.add("select__item");
  selectTitle.classList.add("select__title");
  selectText.classList.add("select__text");

  selectText.textContent = item.text;
  selectTitle.textContent = item.name;
  selectList.append(selectItem);
  selectItem.append(selectTitle, selectText);
});

selectBookNow.append(bookNowImg, bookNowText);
introSection.append(select);
select.append(selectList, selectBookNow);
// select end

// perfection start
const perfectionRow = document.querySelector(".perfection-row");
const perfectionContent = document.createElement("div");
const perfectionBadge = document.createElement("strong");
const perfectionTitle = document.createElement("h2");
const perfectionText = document.createElement("p");
const perfectionList = document.createElement("ul");

const perfectionlist = [
  {
    id: 1,
    img: "./images/perfection/img-01.svg",
    title: "Tell us what you want to do",
    text: "Fill out a 2-minute questionnaire about how you like to travel",
  },
  {
    id: 2,
    img: "./images/perfection/img-02.svg",
    title: "Share your travel preference",
    text: "It all happends online,We recommend everything to your vision",
  },
  {
    id: 3,
    img: "./images/perfection/img-03.svg",
    title: "We’ll give you recommendations",
    text: "Once you’re happy with your final plan, We handle everything for you",
  },
];

perfectionlist.map((item) => {
  const perfectionItem = document.createElement("li");
  const perfectionItemImg = document.createElement("img");
  const perfectionItemTitle = document.createElement("h3");
  const perfectionItemText = document.createElement("p");

  perfectionItem.classList.add("perfection__item");
  perfectionItemImg.classList.add("perfection__item-img");
  perfectionItemTitle.classList.add("perfection__item-title");
  perfectionItemText.classList.add("perfection__item-text");

  perfectionItemImg.src = item.img;
  perfectionItemTitle.textContent = item.title;
  perfectionItemText.textContent = item.text;
  perfectionList.append(perfectionItem);
  perfectionItem.append(
    perfectionItemImg,
    perfectionItemTitle,
    perfectionItemText
  );
});

perfectionList.classList.add("perfection__list");
perfectionContent.classList.add("perfection__content");
perfectionBadge.classList.add("perfection__badge");
perfectionTitle.classList.add("perfection__title");
perfectionText.classList.add("perfection__text");

perfectionBadge.textContent = "3 steps for the perfect trip";
perfectionTitle.textContent = "Find travel perfection";
perfectionText.textContent =
  "Naturally head of the class whenit comes to luxury travel  planning, bbecause we do more homework than anyone else";

perfectionContent.append(perfectionBadge, perfectionTitle, perfectionText);
perfectionRow.append(perfectionContent, perfectionList);
// perfection end

// suggested start
const suggestedRow = document.querySelector(".suggested-row");
const suggestedContent = document.createElement("div");
const suggestedBadge = document.createElement("strong");
const suggestedTitle = document.createElement("h2");
const suggestedText = document.createElement("p");
const suggestedBtnWrapper = document.createElement("div");
const suggestedBtnRight = document.createElement("button");
const suggestedBtnLeft = document.createElement("button");
const suggestedList = document.createElement("ul");

suggestedBadge.classList.add("suggested__badge");
suggestedTitle.classList.add("suggested__title");
suggestedText.classList.add("suggested__text");
suggestedBtnWrapper.classList.add("suggested__btn-wrapper");
suggestedBtnRight.classList.add("suggested__btn-right");
suggestedBtnLeft.classList.add("suggested__btn-left");

suggestedBadge.textContent = "Location";
suggestedTitle.textContent = "Suggested Location";
suggestedText.textContent =
  "Travel is my life. Since 1999, I’ve been traveling around the world nonstop. If you also love travel, you’re in the right place!";
suggestedBtnRight.type = "button";
suggestedBtnLeft.type = "button";

suggestedBtnWrapper.append(suggestedBtnLeft, suggestedBtnRight);
suggestedContent.append(
  suggestedBadge,
  suggestedTitle,
  suggestedText,
  suggestedBtnWrapper
);

const suggestedlist = [
  {
    id: 1,
    title: "Bali Handara Gate",
    text: "Indonesia",
    price: "$1200",
  },
  {
    id: 2,
    title: "Buddhist shrine",
    text: "Tokyo, Japan",
    price: "$1200",
  },
  {
    id: 3,
    title: "Rialto Bridge",
    text: "Italy",
    price: "$1200",
  },
];

suggestedlist.map((item) => {
  const suggestedItemContent = document.createElement("div");
  const suggestedItemContentTitle = document.createElement("h3");
  const suggestedItemContentImg = document.createElement("img");
  const suggestedItemContentText = document.createElement("p");
  const suggestedItemContentPrice = document.createElement("strong");
  const suggestedItem = document.createElement("li");

  suggestedList.classList.add("suggested__list");
  suggestedItemContentTitle.classList.add("suggested__item-title");
  suggestedItemContentImg.classList.add("suggested__item-img");
  suggestedItemContentText.classList.add("suggested__item-text");
  suggestedItemContentPrice.classList.add("suggested__item-price");
  suggestedItemContent.classList.add("suggested__item-content");

  suggestedItemContentImg.src = "./images/suggested/item-icon.svg";

  suggestedItemContent.append(
    suggestedItemContentTitle,
    suggestedItemContentImg,
    suggestedItemContentText,
    suggestedItemContentPrice
  );
  suggestedItemContentTitle.textContent = item.title;
  suggestedItemContentText.textContent = item.text;
  suggestedItemContentPrice.textContent = item.price;

  suggestedItem.classList.add("suggested__item");
  suggestedContent.classList.add("suggested__content");

  suggestedItemContentText.append(suggestedItemContentPrice);
  suggestedItemContentTitle.append(suggestedItemContentImg);
  suggestedItem.append(suggestedItemContent);
  suggestedList.append(suggestedItem);
});

suggestedRow.append(suggestedContent, suggestedList);
// suggested end
