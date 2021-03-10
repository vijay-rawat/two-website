import React from "react"
import Card from "./Card"

const CardSection = ()=>{
    return(
        <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">
          We love new friends!
        </h2>
        <div className="row">
          <div className="col-4">
            <Card title="Rooney" buttonText="Wazza"/>
              
          </div>
          <div className="col-4">
            <div className="card" style={{width:"18rem"}}>
              <img
                src="https://d2x51gyc4ptf2q.cloudfront.net/content/uploads/2021/02/22142505/Bruno-Fernandes-Manchester-United-F365-1.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-success">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    )
}
export default CardSection;