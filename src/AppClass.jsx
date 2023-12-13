import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component {

  imageData = () => {
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

  // code here
  render() {
    let imgData = this.imageData();

    return (
      <div>
        <h1>Kalvium Gallery</h1>
        <div className='body'>
          {imgData.map((ob) => {
            return (
              <img src={ob.img} alt='elephant' />
            )
          })}
        </div>
      </div>
    )
  }

}
