var tabButtons = document.querySelectorAll(".tab-button");
var tabContents = document.querySelectorAll(".tab-content");
tabButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        var tabName = button.getAttribute("data-tab");
        tabButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });
        tabContents.forEach(function (content) {
            content.classList.add("d-none");
        });
        button.classList.add("active");
        var selectedContent = document.getElementById(tabName + "-tab");
        if (selectedContent) {
            selectedContent.classList.remove("d-none");
        }
    });

});


// Recipes Data

var recipes = [
    {
        name: "French Onion Soup",
        image: "images/photo-1547592166-23ac45744acd.jpg",
        rating: 4.7,
        reviews: 267,
        prepTime: "15 min",
        cookTime: "60 min",
        servings: "4 people",
        difficulty: "Intermediate",
        category: "Mediterranean",
        description: "Rich beef broth with caramelized onions and melted cheese",

        ingredients: [
            "4 large onions, thinly sliced",
            "4 tablespoons butter",
            "1 liter beef broth",
            "1/2 cup white wine",
            "2 bay leaves",
            "Fresh thyme",
            "Baguette slices",
            "200g Gruyère cheese, grated"
        ],

        instructions: [
            "Melt butter in a large pot. Add onions and cook slowly for 40 minutes, stirring occasionally until caramelized.",
            "Add white wine and deglaze the pot, scraping up brown bits.",
            "Pour in beef broth, add bay leaves and thyme. Simmer for 20 minutes.",
            "Meanwhile, toast baguette slices until golden.",
            "Ladle soup into oven-safe bowls. Top with toasted bread and cheese.",
            "Broil for 3-5 minutes until cheese is melted and bubbly. Serve hot."
        ],

        nutrition: {
            calories: "380 kcal",
            protein: "18g",
            carbs: "36g",
            fat: "18g",
            fiber: "4g",
            sodium: "980mg"
        },

        tips: [
            "Patience is key - don't rush the onion caramelization",
            "Use good quality beef broth for best flavor",
            "Gruyère can be substituted with Swiss cheese",
            "Watch carefully when broiling to avoid burning"
        ]
    },

    {
        name: "Margherita Pizza",
        image: "images/samposa.jpg",
        rating: 4.8,
        reviews: 234,
        prepTime: "30 min",
        cookTime: "60 min",
        servings: "4 people",
        difficulty: "Intermediate",
        category: "Mediterranean",
        description: "Traditional layered eggplant casserole with lamb",

        ingredients: [
            "3 large eggplants, sliced",
            "500g ground lamb",
            "400g canned tomatoes",
            "1 onion, diced",
            "3 cloves garlic, minced",
            "500ml béchamel sauce",
            "100g parmesan cheese",
            "Cinnamon and oregano",
            "Olive oil"
        ],

        instructions: [
            "Slice eggplants, salt them, and let sit for 30 minutes. Rinse and pat dry.",
            "Brush eggplant slices with olive oil, grill or bake until softened.",
            "Cook ground lamb with onion and garlic. Add tomatoes, cinnamon, oregano. Simmer 20 minutes.",
            "Preheat oven to 180°C (350°F).",
            "Layer in baking dish: eggplant, meat sauce, eggplant, meat sauce. Top with béchamel and parmesan.",
            "Bake for 45 minutes until golden. Let rest 15 minutes before serving."
        ],

        nutrition: {
            calories: "580 kcal",
            protein: "36g",
            carbs: "32g",
            fat: "32g",
            fiber: "8g",
            sodium: "820mg"
        },

        tips: [
            "Salt eggplant to remove bitterness",
            "Don't skip the resting time - it helps set the layers",
            "Use ground beef if lamb is unavailable",
            "Make ahead and reheat for easier serving"
        ]
    },
     {
        name: "Shrimp Scampi",
        image: "images/rop.jpg",
        rating: 4.8,
        reviews: 356,
        prepTime: "10 min",
        cookTime: "15 min",
        servings: "2 people",
        difficulty: "Easy",
        category: "Seafood",
        description: "Garlicky shrimp in white wine butter sauce",

        ingredients: [
            "400g large shrimp, peeled",
            "300g linguine pasta",
            "6 cloves garlic, minced",
            "1/2 cup white wine",
            "4 tablespoons butter",
            "2 tablespoons olive oil",
            "Fresh parsley, chopped",
            "Lemon juice and zest",
            "Red pepper flakes"
        ],

        instructions: [
            "Cook linguine according to package directions. Reserve 1 cup pasta water.",
            "Heat olive oil and 2 tablespoons butter in a large pan. Add garlic and red pepper flakes, cook for 1 minute.",
            "Add shrimp, cook until pink on both sides, about 3-4 minutes. Remove and set aside.",
            "Add white wine to pan, simmer for 2 minutes. Add remaining butter and lemon juice.",
            "Return shrimp to pan, add cooked pasta and toss. Add pasta water if needed.",
            "Garnish with parsley, lemon zest, and serve immediately."
        ],

        nutrition: {
            calories: "520 kcal",
            protein: "36g",
            carbs: "54g",
            fat: "18g",
            fiber: "3g",
            sodium: "620mg"
        },

        tips: [
            "Don't overcook shrimp - they cook very quickly",
            "Use good quality white wine for best flavor",
            "Toss pasta in sauce for maximum flavor absorption",
            "Add extra lemon for bright, fresh taste"
        ]
    },
     {
        name: "Lasagna Bolognese",
        image: "images/bolognese.jpg",
        rating: 4.0,
        reviews: 478,
        prepTime: "30 min",
        cookTime: "90 min",
        servings: "4 people",
        difficulty: "Intermediate",
        category: "Italian",
        description: "Layered Italian pasta with rich meat sauce and béchamel",

        ingredients: [
            "12 lasagna sheets",
            "500g ground beef",
            "400g canned tomatoes",
            "1 onion, diced",
            "2 carrots, diced",
            "500ml béchamel sauce",
            "200g mozzarella, grated",
            "100g parmesan cheese",
            "Fresh basil"
        ],

        instructions: [
            "Cook ground beef with onion and carrots until browned. Add tomatoes and simmer for 30 minutes.",
            "Cook lasagna sheets according to package directions. Drain and set aside.",
            "In a baking dish, layer: meat sauce, lasagna sheets, béchamel sauce. Repeat 3-4 times.",
            "Preheat oven to 180°C (350°F).",
            "Top final layer with béchamel, mozzarella, and parmesan cheese.",
            "Bake for 45 minutes until golden. Let rest 10 minutes before serving."
        ],

        nutrition: {
            calories: "680 kcal",
            protein: "42g",
            carbs: "58g",
            fat: "28g",
            fiber: "6g",
            sodium: "920mg"
        },

        tips: [
            "Make bolognese sauce a day ahead for better flavor",
            "on't skip the resting time after baking",
            "Use fresh pasta sheets for best texture",
            "Freeze leftovers in individual portions"
        ]
    },

     {
        name: "Honey Garlic Salmon",
        image: "images/honey.jpg",
        rating: 4.9,
        reviews: 187,
        prepTime: "10 min",
        cookTime: "15 min",
        servings: "2 people",
        difficulty: "Easy",
        category: "Seafood",
        description: "Pan-seared salmon with a sweet and savory glaze",

        ingredients: [
            "2 salmon fillets (6oz each)",
            "3 tablespoons honey",
            "2 tablespoons soy sauce",
            "4 cloves garlic, minced",
            "1 tablespoon olive oil",
            "1 teaspoon fresh ginger, grated",
            "Sesame seeds for garnish",
            "Green onions, sliced"
        ],

        instructions: [
            "Pat salmon fillets dry with paper towels. Season with salt and pepper.",
            "In a small bowl, whisk together honey, soy sauce, minced garlic, and grated ginger.",
            "Heat olive oil in a large skillet over medium-high heat.",
            "Place salmon fillets skin-side up in the pan. Cook for 4-5 minutes until golden.",
            "Flip salmon and pour honey garlic sauce over the top. Cook for another 4-5 minutes.",
            "Garnish with sesame seeds and sliced green onions. Serve with steamed vegetables or rice."
        ],

        nutrition: {
            calories: "380 kcal",
            protein: "35g",
            carbs: "28g",
            fat: "14g",
            fiber: "0g",
            sodium: "720mg"
        },

        tips: [
            "Don't overcook salmon - it should be slightly pink in the center",
            "Use wild-caught salmon for best flavor and nutrition",
            "Let the sauce caramelize slightly for deeper flavor",
            "Pair with steamed broccoli or asparagus for a complete meal"
        ]
    }
];

var currentRecipeIndex = 0;


var recipeImage = document.getElementById("recipe-image");
var recipeName = document.getElementById("recipe-name");
var recipeDescription = document.getElementById("recipe-description");
var ratingAverage = document.getElementById("rating-average");
var ratingQuantity = document.getElementById("rating-quantity");
var prepTimeDisplay = document.getElementById("prep-time-display");
var cookTimeDisplay = document.getElementById("cook-time-display");
var servingsDisplay = document.getElementById("servings-display");
var difficultyBadge = document.getElementById("difficulty-badge");
var categoryBadge = document.getElementById("category-badge");
var ingredientsList = document.getElementById("ingredients-list");
var instructionsList = document.getElementById("instructions-list");
var tipsList = document.getElementById("tips-list");
var caloriesValue = document.getElementById("calories-value");
var proteinValue = document.getElementById("protein-value");
var carbsValue = document.getElementById("carbs-value");
var fatValue = document.getElementById("fat-value");
var fiberValue = document.getElementById("fiber-value");
var sodiumValue = document.getElementById("sodium-value");
var timeWarning = document.getElementById("time-warning");
var tryAnotherBtn = document.getElementById("try-another-btn");

function displayRecipe(recipe) {
    recipeImage.src = recipe.image;
    recipeImage.alt = recipe.name;
    recipeName.textContent = recipe.name;
    recipeDescription.textContent = recipe.description;
    ratingAverage.textContent = recipe.rating;
    ratingQuantity.textContent = `(${recipe.reviews} reviews)`;
    prepTimeDisplay.textContent = recipe.prepTime;
    cookTimeDisplay.textContent = recipe.cookTime;
    servingsDisplay.textContent = recipe.servings;
    difficultyBadge.textContent = recipe.difficulty;
    categoryBadge.textContent = recipe.category;
    displayIngredients(recipe.ingredients);
    displayInstructions(recipe.instructions);
    displayNutrition(recipe.nutrition);
    displayTips(recipe.tips);
    updateTimeWarning(recipe.cookTime);
}
function displayIngredients(ingredients) {

    ingredientsList.innerHTML = "";

    ingredients.forEach(function (ingredient, index) {

        ingredientsList.innerHTML += `
            <li class="d-flex align-items-start mb-3">
                <div class="ingredient-number">
                    ${index + 1}
                </div>
                <span class="text-secondary">
                    ${ingredient}
                </span>

            </li>
        `;
    });
}
function displayInstructions(instructions) {

    instructionsList.innerHTML = "";

    instructions.forEach(function (instruction, index) {

        instructionsList.innerHTML += `
            <div class="d-flex align-items-start mb-4">
                <div class="step-number">
                    ${index + 1}
                </div>
                <p class="text-secondary mb-0 pt-2">
                    ${instruction}
                </p>
            </div>
        `;
    });
}

function displayNutrition(nutrition) {

    caloriesValue.textContent = nutrition.calories;

    proteinValue.textContent = nutrition.protein;

    carbsValue.textContent = nutrition.carbs;

    fatValue.textContent = nutrition.fat;

    fiberValue.textContent = nutrition.fiber;

    sodiumValue.textContent = nutrition.sodium;
}


function displayTips(tips) {

    tipsList.innerHTML = "";

    tips.forEach(function (tip) {

        tipsList.innerHTML += `
            <div class="d-flex align-items-start p-3 bg-warning-subtle rounded-3 border-start border-warning border-4 mb-3">
                <i class="fa-solid fa-circle-check text-warning fs-5 me-3 mt-1"></i>
                <p class="text-secondary mb-0">
                    ${tip}
                </p>
            </div>
        `;
    });
}


function updateTimeWarning(cookTime) {

    var minutes = parseInt(cookTime);

    if (minutes > 45) {

        timeWarning.classList.remove("d-none");

    } else {

        timeWarning.classList.add("d-none");

    }
}


tryAnotherBtn.addEventListener("click", function () {
    var randomIndex = Math.floor(Math.random() * recipes.length);

    currentRecipeIndex = randomIndex;

    displayRecipe(recipes[currentRecipeIndex]);
});


displayRecipe(recipes[currentRecipeIndex]);