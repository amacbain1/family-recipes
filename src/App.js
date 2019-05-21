import React, { Component } from 'react';
import Header from './components/Header.js';
import Recipes from './components/Recipes.js';
import AddRecipe from './components/AddRecipe.js';
import { Provider } from './context'
import './App.scss';

class App extends Component {
  render() {
    return (
      <Provider>
        <main className="App">
          < Header />
          < Recipes />
          < AddRecipe />
        </main>
      </Provider>
    );
  }
}

export default App;
