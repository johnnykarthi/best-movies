import React from 'react'

export default function Ott({ item }) {
    return (

        <div className="ott">
            <div className="row align-items-center">
                <div className="col-2">
                    <div className="">
                        <img class="ott-logo" src={item.img} width="100%" alt=""></img>
                    </div>
                </div>
                <div className="col-7">
                    <p>{item.ottName}</p>
                    <small>{item.desc}</small>
                </div>
                <div className="col-3">
                    <div className="watch-btn">
                        <a href={item.link} target='_blank'>Watch</a>
                    </div>
                </div>
            </div>
        </div>


    )
}
