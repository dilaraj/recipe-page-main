import React from "react";
import "./global.css";
import recipeImg from "./assets/images/image-omelette.jpeg";

function App() {
    return (
        <div className="container">
            <div className="recipeCard">
                <div className="recipeImg">
                    <img src={recipeImg} alt="Omlette Recipe" />
                </div>
                <div className="recipeHeader">
                    <div className="recipeTitle">Simple Omlette Recipe</div>
                    <div className="recipeDescription">
                        An easy and quick dish, perfect for any meal. 
                        This classic omelette combines beaten eggs cooked to perfection,
                        optionally filled with you choice of cheese, vegetables, or meats.
                    </div>
                    <div className="prepInfoCard">
                        <p>Preparation time</p>
                        <div className="prepInfo">
                            <ul>
                                <li>Total: <span>Approximately 10 mins</span></li>
                                <li>Preparation: <span>5 minutes</span></li>
                                <li>Cooking: <span>5 minutes</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="ingredientContainer">
                    <p className="header">Ingredients</p>
                    <ul>
                        <li>2-3 large eggs</li>
                        <li>Salt, to taste</li>
                        <li>Pepper, to taste</li>
                        <li>1 tablespoon of butter or oil</li>
                        <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
                    </ul>
                </div>
                <div className="lineBreak"></div>
                <div className="instructionsContainer">
                    <p className="header">Instructions</p>
                    <ol>
                        <li>
                            <span>Beat the eggs: </span>
                            In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed.
                            You can add a tablespoon of water or milk for a fluffier texture.
                        </li>
                        <li>
                            <span>Heat the pan: </span>
                            Place a non-stick frying pan over medium heat and add butter or oil.
                        </li>
                        <li>
                            <span>Cook the omelette: </span>
                            Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.
                        </li>
                        <li>
                            <span>Add fillings(optional): </span>
                            When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.
                        </li>
                        <li>
                            <span>Fold and serve: </span>
                            As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minutes, then slide it onto a plate.
                        </li>
                        <li>
                            <span>Enjoy: </span>
                            Serve hot, with additional salt and pepper if needed.
                        </li>
                    </ol>
                </div>
                <div className="lineBreak"></div>
                <div className="nutritionContainer">
                    <p className="header">Nutrition</p>
                    <p className="nutritionText">
                        The table below shows nutritional value per serving without the additional fillings.
                    </p>
                    <div className="nutritionTable">
                        <div className="nTitle">Calories</div>
                        <div className="nValue">277kcal</div>

                        <div className="nTitle">Carbs</div>
                        <div className="nValue">0g</div>

                        <div className="nTitle">Protein</div>
                        <div className="nValue">20g</div>

                        <div className="nTitle">Fat</div>
                        <div className="nValue">22g</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;