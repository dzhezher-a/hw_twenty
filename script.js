const iphoneCat = document.querySelector(".iphone-btn");
const ipadCat = document.querySelector(".ipad-btn");
const macCat = document.querySelector(".mac-btn");
const airpodsCat = document.querySelector(".airpods-btn");

const itemsList = document.querySelectorAll(".item-list");
const cards = document.querySelectorAll(".item-description");

const buyBtns = document.querySelectorAll(".buy-btn");

const formContainer = document.querySelector(".form-wrap");
const formTitle = document.querySelector(".form-title");
const form = document.getElementById("order-form");
const submitBtn = document.getElementById("submit");

let selectedProduct = "";
let selectedProductPrice = 0;
let selectedProductTitle = "";

const basketButton = document.getElementById("basket-icon");
const basketCloseButton = document.getElementById("close-basket");
const basketClearButton = document.getElementById("clear-basket");

let orders = localStorage.getItem("orders")
  ? JSON.parse(localStorage.getItem("orders"))
  : [];

orders.forEach(loadBasket);

function loadBasket(order) {
  const basket = document.getElementById("basket");
  const basketItem = document.createElement("div");
  const basketItemPicContainer = document.createElement("div");
  const basketItemPic = document.createElement("img");
  const basketItemPicSrc = order.basketItemPicSrc;
  const basketItemInfo = document.createElement("div");
  const basketItemDelete = document.createElement("div");
  const basketItemDeletePic = document.createElement("img");

  basketItem.classList.add("basket-item");
  basketItemPicContainer.classList.add("basket-item__pic");
  basketItemInfo.classList.add("basket-item__info");
  basketItemDelete.classList.add("basket-item__delete");

  basketItemPic.setAttribute("src", basketItemPicSrc);
  basketItem.setAttribute("data-id", order.id);
  basketItemDeletePic.setAttribute("src", "img/delete-icon.svg");

  basketItemPicContainer.append(basketItemPic);
  basketItem.append(basketItemPicContainer);
  basketItemDelete.append(basketItemDeletePic);

  appendOrderDetails(order, basketItemPicSrc, basketItemInfo, basketItem);
  basketItem.append(basketItemDelete);

  basket.append(basketItem);
}

iphoneCat.addEventListener("click", () => {
  let element = document.querySelector(".item-list_iphone");

  for (const item of itemsList) {
    if (item === element) {
      element.classList.toggle("active");
    } else {
      item.classList.remove("active");
    }
  }

  for (const i of cards) {
    i.classList.remove("active");
  }

  if (formContainer.classList.contains("active")) {
    formContainer.classList.remove("active");
  }

  element.addEventListener("click", () => {
    let card = document.querySelector(".item-description_iphone");

    for (const i of cards) {
      i.classList.remove("active");

      if (i === card) {
        card.classList.add("active");
      }
    }
  });
});

ipadCat.addEventListener("click", () => {
  let element = document.querySelector(".item-list_ipad");

  for (const item of itemsList) {
    if (item === element) {
      element.classList.toggle("active");
    } else {
      item.classList.remove("active");
    }
  }

  for (const i of cards) {
    i.classList.remove("active");
  }

  if (formContainer.classList.contains("active")) {
    formContainer.classList.remove("active");
  }

  element.addEventListener("click", () => {
    let card = document.querySelector(".item-description_ipad");

    for (const i of cards) {
      i.classList.remove("active");

      if (i === card) {
        card.classList.add("active");
      }
    }
  });
});

macCat.addEventListener("click", () => {
  let element = document.querySelector(".item-list_mac");

  for (const item of itemsList) {
    if (item === element) {
      element.classList.toggle("active");
    } else {
      item.classList.remove("active");
    }
  }

  for (const i of cards) {
    i.classList.remove("active");
  }

  if (formContainer.classList.contains("active")) {
    formContainer.classList.remove("active");
  }

  element.addEventListener("click", () => {
    let card = document.querySelector(".item-description_mac");

    for (const i of cards) {
      i.classList.remove("active");

      if (i === card) {
        card.classList.add("active");
      }
    }
  });
});

airpodsCat.addEventListener("click", () => {
  let element = document.querySelector(".item-list_airpods");

  for (const item of itemsList) {
    if (item === element) {
      element.classList.toggle("active");
    } else {
      item.classList.remove("active");
    }
  }

  for (const i of cards) {
    i.classList.remove("active");
  }

  if (formContainer.classList.contains("active")) {
    formContainer.classList.remove("active");
  }

  element.addEventListener("click", () => {
    let card = document.querySelector(".item-description_airpods");

    for (const i of cards) {
      i.classList.remove("active");

      if (i === card) {
        card.classList.add("active");
      }
    }
  });
});

buyBtns.forEach((element) => {
  element.addEventListener("click", () => {
    for (const item of itemsList) {
      item.classList.remove("active");
    }

    for (const card of cards) {
      card.classList.remove("active");
    }

    const parent = element.parentElement;
    const child = parent.querySelector("h3");

    selectedProduct = parent;
    selectedProductPrice = Number(parent.getAttribute("data-price"));
    selectedProductTitle = child.innerHTML;

    formTitle.innerHTML = `Форма замовлення ${selectedProductTitle}`;

    formContainer.classList.add("active");
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameNode = document.getElementById("name");
  const name = nameNode.value;
  const city = document.getElementById("city").value;
  const postNumberNode = document.getElementById("post-number");
  const postNumber = postNumberNode.value;
  const paymentOption = document.getElementById("payment-option").value;
  const quantity = document.getElementById("quantity").value;
  const comments = document.getElementById("comments").value;

  const fullNameRegExp = /^[А-ЩЬЮЯҐЄІЇа-щьюяґєії]+$/;
  const postNumberRegExp = /^\d+$/;

  let validatedFullName = validateFormInput(nameNode, fullNameRegExp);
  let validatedPostNumber = validateFormInput(postNumberNode, postNumberRegExp);

  if (validatedFullName && validatedPostNumber) {
    updateBasket();
    addToBasketNotification();

    formContainer.classList.remove("active");
  }

  function validateFormInput(input, regExp) {
    if (input.value.trim() === "") {
      input.classList.add("error");
      return false;
    } else {
      input.classList.remove("error");
    }

    if (!regExp.test(input.value.trim())) {
      input.classList.add("error");
      return false;
    }

    input.classList.remove("error");
    return true;
  }

  function updateBasket() {
    const basket = document.getElementById("basket");
    const basketItem = document.createElement("div");
    const basketItemPicContainer = document.createElement("div");
    const SelectedbasketItemPic = selectedProduct.querySelector("img");
    const basketItemPic = SelectedbasketItemPic.cloneNode(false);
    const basketItemPicSrc = basketItemPic.getAttribute("src");
    const basketItemInfo = document.createElement("div");
    const basketItemDelete = document.createElement("div");
    const basketItemDeletePic = document.createElement("img");

    const order = {
      id: new Date().getTime(),
      title: selectedProductTitle,
      name: name,
      city: city,
      postNumber: postNumber,
      payment: paymentOption,
      quantity: quantity,
      price: `$${quantity * selectedProductPrice}`,
      comments: comments,
      basketItemPicSrc: basketItemPicSrc,
    };

    basketItem.classList.add("basket-item");
    basketItemPicContainer.classList.add("basket-item__pic");
    basketItemInfo.classList.add("basket-item__info");
    basketItemDelete.classList.add("basket-item__delete");

    basketItem.setAttribute("data-id", order.id);
    basketItemDeletePic.setAttribute("src", "img/delete-icon.svg");

    basketItemPicContainer.append(basketItemPic);
    basketItem.append(basketItemPicContainer);
    basketItemDelete.append(basketItemDeletePic);

    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    appendOrderDetails(order, basketItemPicSrc, basketItemInfo, basketItem);
    basketItem.append(basketItemDelete);

    basket.append(basketItem);

    const deleteBasketItemBtns = document.querySelectorAll(
      ".basket-item__delete"
    );

    deleteBasketItemBtns.forEach((button) => {
      button.addEventListener("click", () => {
        button.parentElement.remove();

        orders.forEach((element, index) => {
          if (
            element.id === Number(button.parentElement.getAttribute("data-id"))
          ) {
            console.log(index);
            orders.splice(index, 1);
            localStorage.setItem("orders", JSON.stringify(orders));
          }
        });
      });
    });
  }

  function addToBasketNotification() {
    const itemAdded = document.querySelector(".item-added");
    itemAdded.style.transform = "translate(-50%, 0)";

    setTimeout(() => {
      itemAdded.style.transform = "translate(-50%, 100%)";
    }, 3000);
  }

  form.reset();
});

basketButton.addEventListener("click", basketToggleActive);
basketCloseButton.addEventListener("click", basketToggleActive);

function basketToggleActive() {
  const basketContainer = document.querySelector(".basket-container");

  basketContainer.classList.toggle("active");
}

function appendOrderDetails(
  order,
  basketItemPicSrc,
  basketItemInfo,
  basketItem
) {
  const orderDetails = Object.entries(order);

  for (let [key, value] of orderDetails) {
    if (value === basketItemPicSrc) {
      continue;
    }
    const info = document.createElement("p");

    info.append(`${key}: ${value}`);
    basketItemInfo.append(info);
    basketItem.append(basketItemInfo);
  }
}

basketClearButton.addEventListener("click", () => {
  const orderItems = document.querySelectorAll(".basket-item");
  orderItems.forEach((item) => {
    item.remove();
  });
  localStorage.clear();
});
