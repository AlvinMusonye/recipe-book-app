const searchBox = document.getElementById("searchBox");
const searchBtn = document.getElementById("searchBtn");
const recipeContainer = document.querySelector(".recipe");

const fetchRecipes = async (query) => {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        const data = await response.json();

        
        recipeContainer.innerHTML = "";

        if (data.meals) {
            data.meals.forEach(meal => {
                const recipeDiv = document.createElement('div');
                recipeDiv.innerHTML = `
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                    <h3>${meal.strMeal}</h3>
                    <p><strong>Origin:</strong> ${meal.strArea}</p>
                    <p><strong>Category:</strong> ${meal.strCategory}</p>
                `;
                recipeContainer.appendChild(recipeDiv);
            });
        } else {
            recipeContainer.innerHTML = "<p>No recipes found. Try another search.</p>";
        }
    } catch (error) {
        console.error("Error fetching recipes:", error);
        recipeContainer.innerHTML = "<p>Something went wrong. Please try again later.</p>";
    }
};

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const searchInput = searchBox.value.trim();
    if (searchInput) {
        fetchRecipes(searchInput);
    } else {
        recipeContainer.innerHTML = "<p>Please enter a search term.</p>";
    }
});
 

function loginSuccess() {
    
    alert("Login Successful! 🎉 Redirecting...");
    window.location.href = "index.html";

  }
 

  function submit() {
    alert("Registration Successful! 🎉 Redirecting...");
    window.location.href = "index.html";
  }


  document.getElementById("recipeForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let title = document.getElementById("recipeTitle").value;
    let ingredients = document.getElementById("recipeIngredients").value;
    let instructions = document.getElementById("recipeInstructions").value;

    let recipeDiv = document.createElement("div");
    recipeDiv.classList = "bg-gray-100 p-4 rounded mt-2 shadow";

    recipeDiv.innerHTML = `
        <h3 class="text-lg font-bold text-orange-600">${title}</h3>
        <p class="text-sm text-gray-700"><strong>Ingredients:</strong> ${ingredients}</p>
        <p class="text-gray-600"><strong>Instructions:</strong> ${instructions}</p>
    `;

    document.getElementById("recipeList").prepend(recipeDiv);

  
    let recipeCount = document.getElementById("recipeList").children.length;
    if (recipeCount === 1) {
        document.getElementById("featuredTitle").innerText = title;
        document.getElementById("featuredIngredients").innerText = "Ingredients: " + ingredients;
        document.getElementById("featuredInstructions").innerText = instructions;
    }

   
    document.getElementById("recipeForm").reset();
});




