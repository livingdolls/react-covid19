import React, { Component } from 'react'
import Axios from 'axios'
import Maintable from './_Table_Component'
export class Table extends Component {
    state = {
        covid : [],
        nama : [{
            nama : 'nanang',
            umur : 20
        }]
    }

    _getDataCovid = async () => {
        await Axios.get("https://api.kawalcorona.com/indonesia/provinsi")
        .then(res => {
            this.setState({
                covid : res.data
            })
        })
    }

    componentDidMount()
    {
        this._getDataCovid();
    }

    render() {
        let profil = this.state.covid.map(data => {
            return(
                < Maintable covid={data.attributes} key={data.attributes['FID']} />
            )
        })

        return (
            <div>
                <table className="table table-sm table-bordered">
                    <thead className="text-center">
                        <tr>
                            <th className="bg-primary text-white">Provinsi</th>
                            <th className="bg-danger text-white">Kasus Positive</th>
                            <th className="bg-success text-white">Kasus Sembuh</th>
                            <th className="bg-dark text-white">Kasus Meninggal</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        { profil }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table