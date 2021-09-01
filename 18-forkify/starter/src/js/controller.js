import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
// import recipeView from './views/recipeView';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime/runtime';

// const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    // console.log(id);

    if (!id) return;
    recipeView.randerSpinner();

    // 1) loading recepi
    await model.loadRecipe(id);
    // const { recipe } = model.state;

    // 2) Rendaring recepi
    recipeView.render(model.state.recipe);
    // const recipeView = new recipeView(model.state.recipe)
  } catch (err) {
    // console.log(err);
    recipeView.renderError();
  }
};

const controlSearchResult = async function () {
  try {
    // 1) Get search query
    const query = searchView.getQuery();
    if (!query) return;

    // 2) load search results
    await model.loadSearchResults(query);

    // 3) render result
    console.log(model.state.search.results);
  } catch (err) {
    console.log(err);
  }
};
controlSearchResult();

const init = function () {
  recipeView.addHandlerRander(controlRecipes);
  searchView.addHandelerSearch(controlSearchResult);
};
init();
// controlRecipes();

// ['hashchange', 'load'].forEach(ev =>
//   window.addEventListener(ev, controlRecipes)
// );

// window.addEventListener('hashchange', controlRecipes)
// window.addEventListener('load', controlRecipes)
