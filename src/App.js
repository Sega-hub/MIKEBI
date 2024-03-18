import React, { useEffect, useState} from 'react';
import axios from 'axios';
import style from "./App.module.css";
import Modal from "./modal/Modal.js";

function App() {

  const[activeModal, setActiveModal] = useState(false);

  const[answer, setAnswer] = useState("");

  const [store, setStore] = useState("");
  const [image, setImage] = useState("");

  useEffect(()=> {
    axios.get('http://localhost:3000/lesson')
    .then(res => {
      const result = res.data;
      console.log(result.images);
      setStore(result);
      setImage(result.images);
    })
    
  },[])

  function checkAnswer(){
    if (answer === "A") {
      alert("Молодец, овтет верный!");
      setAnswer("");
    } else if (answer === "") {
      alert("Сначала нужно выбрать ответ! *-*");
      setAnswer("");
    } else {
      alert("Упппс, не правильно(");
      setAnswer("");
    }
  }


  return (
    <div className={style.main}>
      <div className={style.userContainer}>
        <div className={style.userData}>
          <p className={style.userName}>Anton</p>
          <div className={style.userCoins}>
            <div className={style.coinsSum}>1000</div>
            <img className={style.coinPic} src={image.coinImage}/>
          </div>
        </div>
      </div>

      <div className={style.taskContainer}>
        <div className={style.taskHeader}> 
          <button className={style.closeBtn}><img className={style.closeImage} src={image.closeImage}/></button>
          <div className={style.taskText}>
            <p className={style.taskQuest}>{store.text}</p>
            <p className={style.taskQuestion}>{store.conditions}</p>  
          </div>
          <button className={style.ideaButn} onClick={()=>{setActiveModal(true)}}><img className={style.bulbImage} src={image.bulbImage}/></button>
        </div>
        <div className={style.taskExercise}> 
          <img className={style.taskImage} src={image.tasksImage}/>
        </div>
      </div>

      <div className={style.taskAnswers}>
        <div className={style.answerBackground}>
          <button onClick={()=> setAnswer("A")}>A</button>
          <button onClick={()=> setAnswer("B")}>B</button>
          <button onClick={()=> setAnswer("C")}>C</button>
          <button className={style.checkBtn} onClick={
            ()=>{
              checkAnswer();
            }
          }>check</button>
        </div>
      </div>
      <Modal active={activeModal} setActive={setActiveModal}/>
    </div>
  );
}

export default App;
