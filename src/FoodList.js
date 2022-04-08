import FoodItem from "./FoodItem";
import './FoodList.scss';
import React from 'react';

const FoodList = ({reArr}) => {
    return (
        <div className="FoodList">
            <FoodItem reArr={reArr}/>
        </div>
    )
}

export default React.memo(FoodList);