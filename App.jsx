import './App.css'
import Counter from './counter';

function App() {

  function handleClick(){
    alert('Button Clicked');
  }

  const handleClick2 = () => {
    alert('Clicked here ');
  }

  const addToFive= (num)=> {
    alert(num+5);

  }

  return (
    <>
      <h3>Vite + React</h3>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={()=> {alert("Clicked 3")}}>Click</button>
      <button onClick={()=>addToFive(3)}>Click 5</button>
    </>
  )
}

export default App
