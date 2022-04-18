import FoodItem from "./FoodItem";
import './FoodList.scss';
import React from 'react';

const FoodList = ({reArr, onClick, checkComplate}) => {
    return (
        <div className="FoodList">
            <FoodItem 
                reArr={reArr} 
                onClick={onClick}
                checkComplate={checkComplate}
            />
        </div>
    )
}

export default React.memo(FoodList);