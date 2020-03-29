import React, { Component } from "react";
import Axios from "axios";
import CardList from "./CardList";

export class Card extends Component {
  state = {
    covidindo: []
  };

  _getData = async () => {
    await Axios.get("https://api.kawalcorona.com/indonesia").then(res => {
      this.setState({
        covidindo: res.data
      });
    });
  };

  componentDidMount() {
    this._getData();
  }

  render() {
    let data = this.state.covidindo;

    let render = data.map(covid => {
      return (
        <CardList covid={ covid } key={ covid.sembuh } />
      );
    });
    
    return <div>{render}</div>;
  }
}

export default Card;
