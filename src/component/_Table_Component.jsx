import React from 'react';

const Maintable = ({covid}) => {
    return(
        <tr>
            <td>{covid.Provinsi}</td>
            <td>{covid.Kasus_Posi}</td>
            <td>{covid.Kasus_Semb}</td>
            <td>{covid.Kasus_Meni}</td>
        </tr>
    )
}

export default Maintable