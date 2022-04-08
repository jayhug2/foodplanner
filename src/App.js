import { useEffect, useState, useCallback } from 'react';
import './sassComponent.scss';
import styled, {keyframes} from 'styled-components';
import FoodInsert from './FoodInsert';
import FoodTemplate from './FoodTemplate';
import FoodList from './FoodList';

const loadAni = keyframes`
  from{
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
`;
const Loader = styled.div`
  font-size: 5em;
  animation: ${loadAni} 6s infinite;
`
function App() {
  const [meal, setMeal] = useState('0');
  const [where, setWhere] = useState('');
  const [whatFood, setWhatFood] = useState('');
  const [loading, setLoading] = useState(true);
    
    
  const addFoodList = (e) => {
    e.preventDefault();
    localStorage.setItem(meal,JSON.stringify({ meal, where, whatFood}));
    setWhere('');
    setWhatFood('');
  }
  const changeMeal = useCallback(e => {
    setMeal(e.target.value);
  },[])


  let foodplan = [];
  if(localStorage.length!==0){
    for(let i=0; i<localStorage.length; i++){
      foodplan.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
  }
  let reArr = foodplan.sort((a,b) => {
    return Number(a.meal) - Number(b.meal);
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    },3000)
    
  },[])
  return ( loading 
    ? (<div className="loader">
        <Loader>🍤</Loader>
        <h1>내일 뭐먹지?</h1>
        <p>먹고 싶은게 있었는데 막상 식사시간이 되니 생각이 나지않을 때가 있지 않나요?</p>
        <p>나의 먹킷리스트를 기록해두세요!</p>
      </div>)
    : (
      <FoodTemplate>
        <FoodInsert
          changeMeal={changeMeal}
          addFoodList={addFoodList}
          meal={meal}
          setWhere={setWhere}
          where={where}
          whatFood={whatFood}
          setWhatFood={setWhatFood}
        />
        <FoodList reArr={reArr}/>
      </FoodTemplate>
    )
  );
}

export default App;
