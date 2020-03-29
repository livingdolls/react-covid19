import React from 'react'

function CardList({covid}) {
    return (
        <div>
            <div className="card-group">
          <div className="card ">
            <div className="card-body text-white bg-success">
              <h5 className="card-title">Pasien Sembuh</h5>
              <h3 className="card-text">
                  {covid.sembuh}
              </h3>
            </div>
          </div>
          <div className="card">
            <div className="card-body text-white bg-danger">
              <h5 className="card-title">Pasien Positif</h5>
              <h3 className="card-text">
                  {covid.positif}
              </h3>
            </div>
          </div>
          <div className="card">
            <div className="card-body  text-white bg-dark">
              <h5 className="card-title">Pasien Meninggal</h5>
              <h3 className="card-text">
                  {covid.meninggal}
              </h3>
            </div>
          </div>
        </div>
        </div>
    )
}

export default CardList
