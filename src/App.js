import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Hey Man, I am Hungry",
      img1:
        "https://www.growingyourbaby.com/wp-content/uploads/2010/08/iStock_000009413779XSmall.jpg"
    };
    this.HandleClick = this.HandleClick.bind(this);
  }

  HandleClick() {
    this.setState(mystate => {
      return {
        name: "Yummmy!!Thank you so much",
        img1:
          "https://img.huffingtonpost.com/asset/5d01b3cb250000ae13e0dd33.jpeg?ops=scalefit_720_noupscale&format=webp"
      };
    });
  }

  render() {
    return (
      <div style={{ backgroundColor: "blue" }}>
        <h1> {this.state.name}</h1>
        <img src={this.state.img1} width="200" height="200" alt="sad baby" />
        <br />
        <button
          onClick={this.HandleClick}
          style={{
            backgroundColor: "green",
            fontcolor: "purple",
            fontSize: "30px"
          }}
        >
          {" "}
          Feed me !!!{" "}
        </button>
      </div>
    );
  }
}
export default App;
