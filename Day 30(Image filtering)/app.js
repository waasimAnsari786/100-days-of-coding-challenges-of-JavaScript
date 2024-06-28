let body = document.querySelector("body");

let mainDiv = document.createElement("div");
mainDiv.classList.add("container", "main-div");
mainDiv.innerHTML = `<div class="row main-div-inner">
                      <h1 class="text-center my-5 heading">image filtering</h1>
                    </div>
                    
                    <div class="row main-div-inner mt-5 mb-5">
                    </div>`;
body.prepend(mainDiv);

let buttonsName = [
  {
    imgName: "all",
  },

  {
    field: "all",
    imgName: "animal",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5EFk4YezFDNK4QzbRMv5ABxAPEkqqt-PWlw&s",
  },

  {
    field: "all",
    imgName: "bird",
    img: "https://images.pexels.com/photos/326900/pexels-photo-326900.jpeg?cs=srgb&dl=pexels-pixabay-326900.jpg&fm=jpg",
  },

  {
    field: "all",
    imgName: "nature",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ_2oII-AssPFNOvcLQ6ecJ6ZWQlUbKU3j8w&s",
  },

  {
    field: "all",
    imgName: "animal",
    img: "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?cs=srgb&dl=pexels-pixabay-47547.jpg&fm=jpg",
  },

  {
    field: "all",
    imgName: "bird",
    img: "https://i.pinimg.com/236x/6d/f3/e0/6df3e08cb07201b5b0d2e99f88585b9a.jpg",
  },

  {
    field: "all",
    imgName: "nature",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjM-wAJZ67bsLlUWHXEHGkci69v4SvoPmvAK7eJm00e71RAS9Mn92hXVMMJmnf0qhEaLc&usqp=CAU",
  },
];

const createBtnsAndImgDataFunc = () => {
  for (let index = 0; index < 4; index++) {
    let button = document.createElement("div");
    button.classList.add("col-1", "btn-ctnr");
    button.innerHTML = `<button class="image-btn" id="img-filter-btn-${
      index + 1
    }">${buttonsName[index].imgName}</button>`;
    mainDiv.firstElementChild.append(button);
  }
};

createBtnsAndImgDataFunc();

let imgCtnr = body.firstElementChild.firstElementChild.nextElementSibling;

const removeChildrenFunc = () => {
  let childs = imgCtnr.children;
  for (let index = childs.length - 1; index >= 0; index--) {
    childs[index].remove();
  }

  return childs;
};

const displayImgs = (imgField) => {
  let imgData = buttonsName.filter((curVal, i) => {
    if (i > 0) {
      if (curVal.field === imgField || curVal.imgName === imgField) {
        let imgDiv = document.createElement("div");
        imgDiv.classList.add("col-xxl-4", "col-xl-4", "col-lg-4", "col-md-6", "col-sm-6", "mx-auto", "img-div");
        imgDiv.innerHTML = `<div class="img-div-inner mt-4 col-12">
                              <img src=${curVal.img} class="w-100" height="300rem" alt="images"/>
                              </div>`;
        imgCtnr.append(imgDiv);
      }
    }
  });
};

body.addEventListener("click", (e) => {
  if (e.target.innerText === "all".toUpperCase()) {
    console.log(removeChildrenFunc());
    displayImgs(e.target.innerText.toLowerCase());
  } else if (e.target.innerText === "animal".toUpperCase()) {
    console.log(removeChildrenFunc());

    displayImgs(e.target.innerText.toLowerCase());
  } else if (e.target.innerText === "bird".toUpperCase()) {
    console.log(removeChildrenFunc());

    displayImgs(e.target.innerText.toLowerCase());
  } else if (e.target.innerText === "nature".toUpperCase()) {
    console.log(removeChildrenFunc());

    displayImgs(e.target.innerText.toLowerCase());
  }
});

window.addEventListener("load", () => {
  displayImgs("all");
});
