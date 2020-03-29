import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <div>
                    <h5 className=" text-center">
                        Data Penyebaran COVID-19 Indonesia
                    </h5>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header
