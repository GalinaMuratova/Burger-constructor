import React, {useState} from 'react';
import Ingredient from "./Ingredient/Ingredient";
import Burger from "./Burger/Burger";
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
        return basicPrice;
    };

    const onAddIngredient = (index:number) => {
        const copyIngredients = [...ingredients];
        const ingredientCopy = {...ingredients[index]};
        ingredientCopy.count += 1;
        copyIngredients[index] = ingredientCopy;
        setIngredients(copyIngredients);
    };

    const onRemove = (index:number) => {
        const copyIngredients = [...ingredients];
        const ingredientCopy = {...ingredients[index]};
        if (ingredientCopy.count === 0) {
            ingredientCopy.count = 0;
            copyIngredients[index] = ingredientCopy;
        } else {
            ingredientCopy.count -= 1;
            copyIngredients[index] = ingredientCopy;
        }
        setIngredients(copyIngredients);
    };

    return (
    <div className="container">
      <div className="ingredients">
          {ingredients.map((ingredient, index) => (
              <Ingredient
                  key ={index}
                  name={ingredient.name}
                  count={ingredient.count}
                  onAdd={() => onAddIngredient(index)}
                  onRemove={() => onRemove(index)}
              />
          ))}
      </div>
      <Burger price={burgerPrice()} ingredients={ingredients}/>
    </div>
  );
}
export default App;
