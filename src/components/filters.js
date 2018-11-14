import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterCategory } from '../actions';
import { filterCardsPerPage } from '../actions';

class Filters extends Component{

    handleFilterCategory = event => {
        const category = event.target.value;
        const { cardsPerPage } = this.props.data;
        const currentPage = 1;
        this.props.history.push(`/cards/${currentPage}/${category}/${cardsPerPage}`);
        this.props.filterCategory(currentPage, category);
    }

    handleCardsPerPage = event => {
        const cardsPerPage = event.target.value;
        const { category } = this.props.data;
        const currentPage = 1;
        this.props.history.push(`/cards/${currentPage}/${category}/${cardsPerPage}`);
        this.props.filterCardsPerPage(currentPage, cardsPerPage);
    }

    render(){
        return (
            <div className="row filters">
                    <div className="col-xs-12 col-sm-4">
                        <div className="form-group">
                            <label htmlFor="slelect-category">Filter Category</label>
                            <select className="form-control" id="slelect-category" onChange={this.handleFilterCategory}>
                            <option value="all">All Category</option>
                            <option value="blue">Blue</option>
                            <option value="green">Green</option>
                            <option value="red">Red</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-4">
                        <div className="form-group">
                            <label htmlFor="cards-per-page">Display Cards</label>
                            <select className="form-control" id="cards-per-page" onChange={this.handleCardsPerPage}>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="40">40</option>
                            <option value="50">50</option>
                            </select>
                        </div>
                    </div>
            </div>
        );

    }
}

function mapStateToProps(state) {
    return {
        data: state.data
    }
}

export default connect(mapStateToProps, {filterCategory, filterCardsPerPage})(Filters);
