import React, { Component } from 'react'
import { Line,Pie, Polar, Bar } from 'react-chartjs-2'
import Axios from 'axios'

export class Cart extends Component {
    state = {
        data: {        }
    }

    componentDidMount()
    {
        this._getData();
    }

    _getData = async () => {
        await Axios.get("https://api.kawalcorona.com/indonesia").then(res => {
          let sembuh = parseInt(res.data[0].sembuh.replace(/,/g, ""));
          let positif = parseInt(res.data[0].positif.replace(/,/g, ""));
          let meninggal = parseInt(res.data[0].meninggal.replace(/,/g, ""));

          
          this.setState({
            data : {
                labels   : ["Sembuh","Positif","Meninggal"],
                datasets : [
                    {
                        label : "Jumlah",
                        backgroundColor : [`rgba(40, 167, 69, 0.75)`,`rgba(220, 53, 69, 0.75)`,`rgba(52, 58, 64, 0.75)`],
                        data : [sembuh,positif,meninggal]
                    }
                ],
            }
          });
        });
      };
      

    render() {
        return (
            <div>
              <Bar
               options = {
                   {responsive : true},
                   {
                       title :{display : false, text: "Corona Di Indonesia",fontSize:25},
                       legend : {display : false},
                       animation : {animateScale : true}
                }
               }
               data = {this.state.data}
              />  
            </div>
        )
    }
}

export default Cart
