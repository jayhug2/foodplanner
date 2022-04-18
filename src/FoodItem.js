import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline
} from 'react-icons/md';
import './FoodItem.scss';

const FoodItem = ({reArr, onClick, checkComplate}) => {


  const removeItems = (e) => {
    return () => {
      return onClick(e)
    }
  }
  
  return (
    localStorage.length===0 ? (
      <div className="FoodItem">
        <div className="checkbox">
          <MdCheckBoxOutlineBlank />
          <div className="text">ex ) <span>디저트</span>는 <span>스타벅스</span>에서 <span>바닐라라떼</span> 먹을거야!</div>
        </div>
        <div className="remove">
          <MdRemoveCircleOutline />
        </div>
      </div>) : reArr.map((menu) => 
        (
          <div className="FoodItem" key={menu.meal}>
          <div className={menu.complate? "checkbox checked" : "checkbox"} onClick={() => checkComplate(menu.meal)}>
            {menu.complate ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            <div className="text">
              {`${menu.meal==='0'? '아침' : menu.meal==='1' ? '점심' : menu.meal==='2' ? '저녁' : '디저트'}은(는) ${menu.where}에서 ${menu.whatFood} 먹어야지!`}
            </div>
          </div>
          <div className="remove" onClick={removeItems(menu.meal)}>
            <MdRemoveCircleOutline />
          </div>
        </div>
        )
      )
  )
}

export default React.memo(FoodItem);