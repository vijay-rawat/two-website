import React from "react"

const Card = ({title="football", buttonText="My Button"}) => {
    return(
        <div className="card" style={{width:"18rem"}}>
        <img
          src="https://assets.manutd.com/AssetPicker/images/0/0/10/126/687700/Legends-Profile_Wayne-Rooney31523460265900_thumb.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            Wayne Rooney is the best player in the history of Manchester United 
          </p>
          <a href="#" className="btn btn-success">{buttonText}</a>
        </div>
      </div>
    

    )
}
export default Card;