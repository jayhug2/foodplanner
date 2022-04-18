import { useEffect, useState, useCallback, useRef } from 'react';
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
  const inputRef = useRef();

  let complate = false;
  //로컬스토리지에 메뉴 추가 및 인풋 초기화
  const addFoodList = (e) => {
    e.preventDefault();
    if(where==="" && whatFood===""){
      alert("식사계획을 입력하세요");
      return false;
    }
    localStorage.setItem(meal,JSON.stringify({ meal, where, whatFood, complate}));
    setWhere('');
    setWhatFood('');
    inputRef.current.focus();
  }
  //키값 변경
  const changeMeal = useCallback(e => {
    setMeal(e.target.value);
  },[])

  //로컬스토리지 데이터로 배열생성 및 재정렬
  let foodplan = [];
  if(localStorage.length!==0){
    for(let i=0; i<localStorage.length; i++){
      foodplan.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
  }
  let reArr = foodplan.sort((a,b) => {
    return Number(a.meal) - Number(b.meal);
  });

  //로컬스토리지에서 데이터 삭제 및 배열에서도 동일한 데이터 삭제.
  const removeFoodList = (index) => {
    localStorage.removeItem(index);
    reArr.splice(index, 1);
  }
  const [flist, setFlist] = useState(reArr);

  useEffect(() => {
    setFlist(reArr);
  },[reArr]);

  //체크박스 상태변경
  const checkComplate = (e) => {
    let currentData = JSON.parse(localStorage.getItem(e));
    currentData.complate = !currentData.complate;
    localStorage.setItem(e,JSON.stringify(currentData));
    
  }

  
  //어플리케이션 실행화면 세팅
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
          inputRef={inputRef}
        />
        <FoodList 
          reArr={flist} 
          onClick={removeFoodList}
          checkComplate={checkComplate}
        />
      </FoodTemplate>
    )
  );
}

export default App;
