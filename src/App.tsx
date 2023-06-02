import React, {useState} from 'react';
import Ingredient from "./Ingredient/Ingredient";
import './App.css';

function App() {
    const [ingredients, setIngredients] = useState([
        {name: 'Meat', count: 0, price: 80},
        {name: 'Cheese', count: 0, price: 50},
        {name: 'Salad', count: 0, price: 10},
        {name: 'Bacon', count: 0, price: 60},
    ]);

    const burgerPrice = () => {
        let basicPrice = 30;
        ingredients.forEach((ingredient) => {
            basicPrice = basicPrice + ingredient.price * ingredient.count;
        })
        console.log(basicPrice);
        return basicPrice;
    };

    const onAddIngredient = () => {
        console.log(ingredients);
    };

    const onRemove = () => {
        console.log("remove");
    }


    return (
    <div className="container">
      <div className="ingredients">
          <button onClick={burgerPrice}> Click</button>
          {ingredients.map((ingredient, index) => (
              <Ingredient
                  key ={index}
                  name={ingredient.name}
                  count={ingredient.count}
                  onAdd={() => onAddIngredient()}
                  onRemove={() => onRemove()}/>
              ))}

      </div>
      <div className="burger"></div>
    </div>
  );
}

export default App;
