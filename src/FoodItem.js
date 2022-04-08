import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline
} from 'react-icons/md';
import './FoodItem.scss';

const FoodItem = ({reArr}) => {
  
  return (
    localStorage.length===0 ? (
      <div className="FoodItem">
        <div className="checkbox">
          <MdCheckBoxOutlineBlank />
          <div className="text">ex ) <span>아침</span>엔 <span>집</span>에서 <span>짜파게티</span> 먹을거야!</div>
        </div>
        <div className="remove">
          <MdRemoveCircleOutline />
        </div>
      </div>) : reArr.map((menu) => 
        (
          <div className="FoodItem" key={menu.meal}>
          <div className="checkbox">
            <MdCheckBoxOutlineBlank />
            <div className="text">
              {`${menu.meal==='0'? '아침' : menu.meal==='1' ? '점심' : menu.meal==='2' ? '저녁' : '디저트'}엔 ${menu.where}에서 ${menu.whatFood} 먹을거야!`}
            </div>
          </div>
          <div className="remove">
            <MdRemoveCircleOutline />
          </div>
        </div>
        )
      )
  )
}

export default React.memo(FoodItem);