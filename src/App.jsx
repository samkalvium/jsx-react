import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = () => {
  let data = [
    {
      id: 1,
      img: elephant
    },
    {
      id: 2,
      img: elephant
    },
    {
      id: 3,
      img: elephant
    },
    {
      id: 4,
      img: elephant
    }
  ]
  return data;
}

function App() {
  // code here
  let imgg = imageData();

  return (
    <div>
      <h1>Kalvium Gallery</h1>
      <div className='body'>
        {imgg.map((ob) => {
          return (
            <img src={ob.img} alt='elephant' />
          )
        })}
      </div>
    </div>
  )
}

export default App;
