import React from 'react';
import RecipeTitle from './RecipeTitle.jsx';
import '../public/index.css';
import CurrentTime from './CurrentTime.jsx';

function App() {
    return(
        <article>
            <h1>Recipe Manager</h1>
            <RecipeTitle />
            <CurrentTime />
        </article>
    )
}

export default App;