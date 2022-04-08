import { MdAdd } from 'react-icons/md';
import './FoodInsert.scss';
import React,{ useRef } from 'react';

const FoodInsert = ({changeMeal,addFoodList,meal,setWhere,whatFood,where,setWhatFood}) => {
  const inputRef = useRef();
    return (
      <form className="FoodInsert" onSubmit={addFoodList}>
        <select onChange={changeMeal} value={meal}>
          <option value="0">아침</option>
          <option value="1">점심</option>
          <option value="2">저녁</option>
          <option value="3">디저트</option>
        </select>
        <input 
          placeholder="어디서?" 
          onChange={(e) => setWhere(e.target.value)} 
          ref={inputRef}
          value={where}
        />
        <input 
          placeholder="뭐먹을거야?" 
          onChange={(e) => setWhatFood(e.target.value)}
          value={whatFood}  
        />
        <button type="submit">
        <MdAdd />
        </button>
      </form>
    );
};

export default FoodInsert;