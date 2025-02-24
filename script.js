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





