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

init();

function displayData(data) {
  data.forEach((reciepe) => {
    const liElem = document.createElement("li");
    const imgElem = document.createElement("img");
    const divElem = document.createElement("div");
    const h2Elem = document.createElement("h2");
    const paraElem = document.createElement("p");
    const btnElem = document.createElement("button");

    h2Elem.innerHTML = reciepe.title;

    //img source element
    imgElem.scr = reciepe.image;
    imgElem.alt = reciepe.image;

    paraElem.innerHTML = `<strong>Ingredients:</strong> ${reciepe.extendedIngredients.map(
      (ingredient) => {}
    )}`;

    console.log(reciepe);
  });
}
