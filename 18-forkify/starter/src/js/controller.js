import * as model from './model.js';
// import recipeView from './views/recipeView';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import recipeView from './views/recipeView';

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return;
    recipeView.randerSpinner();

    // 1) loading recepi
    await model.loadRecipe(id);
    // const { recipe } = model.state;

    // 2) Rendaring recepi
    recipeView.render(model.state.recipe);
    // const recipeView = new recipeView(model.state.recipe)
  } catch (err) {
    alert(err);
  }
};
// controlRecipes();

['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
);

// window.addEventListener('hashchange', controlRecipes)
// window.addEventListener('load', controlRecipes)
