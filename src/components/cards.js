import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCards } from '../actions';
import CardList from './card-list';
import Paginate from './pagination';
import Filter from './filters';

class Cards extends Component {
    
    componentDidMount() {
        const { pageId, category, cardsPerPage } = this.props.match.params;
        this.props.fetchCards(pageId, category, cardsPerPage);
    }

    render() {
        const cardData = this.props.data;

        if (!cardData.cards) {
            return <div>Loading...</div>
        }

        const { cards, currentPage, cardsPerPage, pageCount } = cardData;

        // Logic for displaying current cards
        const indexOfLastPage = currentPage * cardsPerPage;
        const indexOfFirstPage = indexOfLastPage - cardsPerPage;
        const currentCards = cards.slice(indexOfFirstPage, indexOfLastPage);
        return (
            <div className="container">
                <Filter history={this.props.history}/>
                <div className="row card-holder">
                    <CardList currentCards={currentCards}/>
                </div>
                <div className="row pagination-container">
                    <Paginate history={this.props.history} />
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

export default connect(mapStateToProps, { fetchCards })(Cards); //ES6
