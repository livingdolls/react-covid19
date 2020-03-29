import React, { Component } from "react";
import Card from "./Card";
import Table from "./Table";
import Header from "./Header";
import Cart from "./Cart";
import CartBall from "./CartBall";

export class Main extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <br/>
        <p className="text-center">Diagram COVID-19 Indonesia</p>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="card text-center">
                <div className="card-body">
                  <CartBall />
                </div>
                <div className="card-footer text-muted">Hari Ini</div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card text-center">
                <div className="card-body">
                  <Cart />          
                </div>
                <div className="card-footer text-muted">Hari Ini</div>
              </div>
            </div>
          </div>
          <hr/>
          <Card />
          <Table />
        </div>
      </div>
    );
  }
}

export default Main;
