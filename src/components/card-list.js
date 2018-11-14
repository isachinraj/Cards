import React, { Component } from 'react';

export default ({currentCards}) => {

    if(currentCards.length == 0){
        return (
            <div className="col-sm-12">
                <div className="alert alert-danger card-error" role="alert">
                    Sorry! No cards to display
                </div>
            </div>
        );
    }

    return currentCards.map((card, index) => {
        return (
            <div className="col-sm-3 col-lg-3" key={card.id}>
                <div className="card">
                    <img className="card-img-top" src={`/images/${card.img}`} alt="Card image" />
                    <div className="card-body">
                        <h5 className="card-title">{card.title}</h5>
                        <p className="card-text">{card.description}</p>
                    </div>
                </div>
            </div>
        );
    });
}
