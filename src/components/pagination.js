import React, { Component } from 'react';
import Pagination from "react-paginating";
import { connect } from 'react-redux';
import { nextPage } from '../actions';

class Paginate extends Component{

    handlePageChange = page => {
        const { category, cardsPerPage } = this.props.data;
        this.props.history.push(`/cards/${page}/${category}/${cardsPerPage}`);
        this.props.nextPage(page);
    }

    render(){

        const cardData = this.props.data;
        const { cards, currentPage, cardsPerPage, pageCount } = cardData;
        const total = cards.length;

        return (
            <Pagination
                total={Number(total)}
                limit={Number(cardsPerPage)}
                pageCount={Number(pageCount)}
                currentPage={ Number(currentPage) }
            >
                {({
                    pages,
                    currentPage,
                    hasNextPage,
                    hasPreviousPage,
                    previousPage,
                    nextPage,
                    totalPages,
                    getPageItemProps
                }) => (
                        <nav>
                            <ul className="pagination">
                                <li className="page-item">
                                    <a className="page-link"
                                        {...getPageItemProps({
                                            pageValue: 1,
                                            onPageChange: this.handlePageChange
                                        })}
                                    >
                                        First
                                    </a>
                                </li>
            
                                {hasPreviousPage && (
                                    <li className="page-item">
                                        <a className="page-link"
                                            {...getPageItemProps({
                                                pageValue: previousPage,
                                                onPageChange: this.handlePageChange
                                            })}
                                        >
                                            {"<"}
                                        </a>
                                    </li>
                                )}
            
                                {pages.map(page => {
                                    let activePage = null;
                                    if (currentPage === page) {
                                        activePage = { backgroundColor: "#fdce09" };
                                    }
                                    return (
                                        <li className="page-item" key={page}>
                                            <a className="page-link"
                                                style={activePage}
                                                {...getPageItemProps({
                                                    pageValue: page,
                                                    onPageChange: this.handlePageChange
                                                })}
                                            >
                                                {page}
                                            </a>
                                        </li>
                                    );
                                })}
            
                                {hasNextPage && (
                                    <li className="page-item">
                                        <a className="page-link"
                                            {...getPageItemProps({
                                                pageValue: nextPage,
                                                onPageChange: this.handlePageChange
                                            })}
                                        >
                                            {">"}
                                        </a>
                                    </li>
                                )}

                                <li className="page-item">
                                    <a className="page-link"
                                        {...getPageItemProps({
                                            pageValue: totalPages,
                                            onPageChange: this.handlePageChange
                                        })}
                                    >
                                        Last
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    )}
            </Pagination>
        );

    }
}

function mapStateToProps(state) {
    return {
        data: state.data
    }
}

export default connect(mapStateToProps, {nextPage})(Paginate);
