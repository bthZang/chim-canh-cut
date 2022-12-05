import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0); // => [gia tri cua state, ham de thay doi gia tri state]
  const [text, setText] = useState('');

  function cong(event) {
    let numberInText=parseInt(text)
    if(numberInText%2==0)
    {
      setNumber(number + parseInt(text))
    }
   
  }
  function tru(event) {
    
    setNumber(number - parseInt(text))
  }
  function nhan(event) {
  
    setNumber(number * parseInt(text))
  }
  function chia(event) {
    
    setNumber(number / parseInt(text))
  }

  return (
    <div className="App">
      <p>{number}</p>
      <input type="text" value={text} onChange={(event) => setText(event.target.value)} 
      onClickCapture = {(event)=>setText('')}
      onKeyPress={(event) => {
        if (!/[0-9]/.test(event.key)) {
          event.preventDefault();
        }      }} 
        />
      <button onClick={cong}>+</button>
      <button onClick={tru}>-</button>
      <button onClick={nhan}>x</button>
      <button onClick={chia}>/</button>
    </div>
  );
}

export default App;
