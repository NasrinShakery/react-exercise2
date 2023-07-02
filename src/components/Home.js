import React, { Component } from "react";

import style from "../styles/style.module.css";

import img1 from "../images/slider/1.jpg";
import img2 from "../images/slider/2.jpg";
import img3 from "../images/slider/3.jpg";
import img4 from "../images/slider/4.jpg";
import img5 from "../images/slider/5.jpg";
import img6 from "../images/slider/6.jpg";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
      img: [img1, img2, img3, img4, img5, img6],
    };
  }

  countDownHandler = ()=>{
    if( this.state.counter <= this.state.img.length && this.state.counter >= 2){
        this.setState( (prevstate) => ({
            counter : prevstate.counter-1,
        }));
    }else if( this.state.counter > this.state.img.length || this.state.counter <= 1){
        this.setState({
            counter : this.state.img.length
        })
    }
  }
  countUpHandler = ()=>{
    if( this.state.counter <= this.state.img.length-1 && this.state.counter >= 1){
        this.setState( (prevstate) => ({
            counter : prevstate.counter+1,
        }));
    }else if( this.state.counter >= this.state.img.length || this.state.counter <= 0){
        this.setState({
            counter : 1,
        })
    }

  }

  render() {
    const{counter, img} = this.state;
    return (
      <>
        <div className={style["slider-container"]}>

          <div className={style["slider-btn-box"]}>
            <a href="#" onClick={this.countDownHandler} className={style["circle"]}><span className={style["slider-left-btn"]}></span></a>
          </div>

          <div className={style["slider-section"]}>
            <img src={`./images/slider/${counter}.jpg`} alt="spring" className={style["slider-img"]} />
          </div>

          <div className={style["slider-btn-box"]}>
            <a href="#" onClick={this.countUpHandler} className={style["circle"]}><span className={style["slider-right-btn"]}></span></a>
          </div>

        </div>
      </>
    );
  }
}

export default Home;
