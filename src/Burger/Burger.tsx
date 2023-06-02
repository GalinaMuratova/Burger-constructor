import React from 'react';

interface Ingredient {
    name: string;
    count: number;
    price: number;
}
interface BurgerProps {
    price:number;
    ingredients: Ingredient[];
}
const Burger: React.FC<BurgerProps> = (props) => {
    return (
        <div className="burger">
            <div className="Burger">
                <div className="BreadTop">
                    <div className="Seeds1"></div>
                    <div className="Seeds2"></div>
                </div>
                {props.ingredients.map((ingredient) => (
                    [...Array(ingredient.count)].map((element, index) => (
                        <div key={index} className={ingredient.name}></div>
                    ))
                ))}
                <div className="BreadBottom"></div>
            </div>
            <p className="price-burger">Price: {props.price}$</p>
        </div>
    );
};

export default Burger;