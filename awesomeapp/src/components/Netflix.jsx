import React from "react";

function Netflix(props){
    return(
        <>
        <div className="cards">
        <div className="card">
            <img src={props.imgsrc} alt="cardpic" className="card_img" />
            <div className="card_info">
                <span className="card_cat">{props.title}</span>
                <h2 className="card_title">{props.sname}</h2>
                <a href={props.link} target="_blank">
                    <button>Watch now</button>
                </a>
            </div>
        </div>
        </div>
        </>
    )
}

export default Netflix;