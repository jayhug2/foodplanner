import './FoodTemplate.scss';
import React from 'react';

const FoodTemplate = ({children}) => {
  let today = new Date();
    return (
        <div className="FoodTemplate">
          <div className="appTitle">내일 뭐먹지?</div>
          <h2>{`${today.getFullYear()}년 ${today.getMonth()+1}월 ${today.getDate()+1}일 먹킷리스트`}</h2>
          <div className="content">{children}</div>
        </div>
    )
}

export default FoodTemplate;