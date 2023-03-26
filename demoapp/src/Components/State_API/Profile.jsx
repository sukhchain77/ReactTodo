import React, { useState } from "react";

const Profile = () =>{
    const[state,setState] =useState({
        name: "Sukh",
        city: "Sangrur",
        gender: "Female",
        image:"https://thumbs.dreamstime.com/b/young-woman-covering-her-face-stress-work-coding-programming-software-frustrated-her-work-out-control-253867801.jpg"
    })

    const getUserData = () =>{
        fetch("https://randomuser.me/api/?results=1")
        .then((res) => res.json())
        .then((userdata) => {
            console.log(userdata);
            setState({
                name: userdata.results[0].name.first,
                city: userdata.results[0].location.city,
                gender: userdata.results[0].gender,
                image: userdata.results[0].picture.medium,
            })
        })
    }
    return(
        <div>
            <div>
               <img src={state.image} height="250px" width="250px"></img>
            </div>
            <div>
              <dl>
                <dt>
                    <b>User Name</b>
                </dt>
                <dd>{state.name}</dd>
                <dt>
                    <b>User City</b>
                </dt>
                <dd>{state.city}</dd>
                <dt>
                    <b>User Gender</b>
                </dt>
                <dd>{state.gender}</dd>
              </dl>
              <button onClick={getUserData}>User</button>
            </div>
        </div>
    )
}

export default Profile;