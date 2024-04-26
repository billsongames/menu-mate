import './App.css';

import RecipeCard from './Components/RecipeCard/RecipeCard';

import RecipeSelection from './Components/RecipeSelection/RecipeSelection';

function App() {

  const id=52827

  return (
    <div className="App">
      <main>
        <RecipeSelection id={id} />
      </main>
    </div>
  );
}

export default App;
