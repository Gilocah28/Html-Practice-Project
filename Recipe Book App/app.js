//

async function fecthData() {
  try {
    const API_KEY = "d9bb547d606e482196347173f8d5ef23";
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`
    );

    const data = await response.json();
    return data.recipes;
  } catch (error) {
    console.log("Could not get user data:", error);
  }
}

async function init() {
  const data = await fecthData();
  displayData(data);
}

function displayData(data) {
  const unorderList = document.getElementById("list-container");
  data.forEach((reciepe) => {
    const liElem = document.createElement("li");
    const imgElem = document.createElement("img");
    const divElem = document.createElement("div");
    const h2Elem = document.createElement("h2");
    const paraElem = document.createElement("p");
    const btnElem = document.createElement("button");

    h2Elem.innerHTML = reciepe.title;

    //img source element
    imgElem.src = reciepe.image;
    imgElem.alt = reciepe.image;

    const ingredients = reciepe.extendedIngredients
      ? reciepe.extendedIngredients.map((ing) => ing.original).join("; ")
      : "No ingredients available";

    paraElem.innerHTML = `<strong>Ingredients: </strong> ${ingredients}`;

    btnElem.textContent = "VIEW DETAILS";

    liElem.append(imgElem);
    liElem.append(divElem);
    divElem.classList.add("info-container");
    divElem.append(h2Elem);
    divElem.append(paraElem);
    divElem.append(btnElem);

    unorderList.append(liElem);
  });
}

init();
