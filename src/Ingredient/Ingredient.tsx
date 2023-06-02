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
            <div>
                <button className={props.name + '-btn'} onClick={props.onAdd}></button>
                <span>{props.name}</span>
                <span>{props.count}</span>
                <button onClick={props.onRemove}>Remove</button>
            </div>
        </div>
    );
};

export default Ingredient;