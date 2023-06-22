const iphoneCat = document.querySelector(".iphone-btn");
const ipadCat = document.querySelector(".ipad-btn");
const macCat = document.querySelector(".mac-btn");
const airpodsCat = document.querySelector(".airpods-btn");

const itemsList = document.querySelectorAll(".item-list");
const cards = document.querySelectorAll(".item-description");

const buyBtn = document.querySelectorAll(".buy-btn");

iphoneCat.addEventListener("click", () => {
  let element = document.querySelector(".item-list_iphone");

  for (const item of itemsList) {
    item.classList.remove("active");

    if (item === element) {
      element.classList.add("active");
    }
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
    item.classList.remove("active");

    if (item === element) {
      element.classList.add("active");
    }
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
    item.classList.remove("active");

    if (item === element) {
      element.classList.add("active");
    }
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
    item.classList.remove("active");

    if (item === element) {
      element.classList.add("active");
    }
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

buyBtn.forEach((element) => {
  element.addEventListener("click", () => {
    for (const item of itemsList) {
      item.classList.remove("active");
    }

    for (const card of cards) {
      card.classList.remove("active");
    }
    const itemAdded = document.querySelector(".item-added");
    itemAdded.style.transform = "translate(-50%, 0)";

    setTimeout(() => {
      itemAdded.style.transform = "translate(-50%, 100%)";
    }, 3000);
  });
});
