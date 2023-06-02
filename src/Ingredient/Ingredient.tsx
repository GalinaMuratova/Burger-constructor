import React from 'react';

interface IngredientProps {
   name: string;
   count: number;
   onAdd: React.MouseEventHandler;
   onRemove: React.MouseEventHandler;
}
const Ingredient:React.FC<IngredientProps> = (props) => {
    return (
        <div>
            <div className="block-ingredient">
                <button className={props.name + '-btn'} onClick={props.onAdd}></button>
                <span className="burger-name">{props.name}</span>
                <span className="burger-count">x{props.count}</span>
                <button className="remote-btn" onClick={props.onRemove}>Remove</button>
            </div>
        </div>
    );
};

export default Ingredient;