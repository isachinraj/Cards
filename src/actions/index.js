import axios from 'axios';
export const FETCH_CARDS = 'FETCH_CARDS';
export const ACTIVE_PAGE = 'ACTIVE_PAGE';
export const FILTER_CARDS_PER_PAGE = 'FILTER_CARDS_PER_PAGE';
export const FILTER_CATEGORY = 'FILTER_CATEGORY';
export const DEFAULT_CATEGORY = 'all';
export const DEFAULT_PAGE = 1;
export const CARDS_PER_PAGE = 10;
export const PAGE_COUNT = 10;

const ROOT_URL = 'http://localhost:3001/cards';

export const fetchCards = (currentPage, category, cardsPerPage) => {
    const request = axios.get(ROOT_URL).then(response => {
    return {
        type: FETCH_CARDS,
        payload: response,
        currentPage: !currentPage ? DEFAULT_PAGE : currentPage,
        category: !category ? DEFAULT_CATEGORY : category,
        cardsPerPage: !cardsPerPage ? CARDS_PER_PAGE : cardsPerPage
    }});
    return request;
}

export const nextPage = id => {
    return {
        type: ACTIVE_PAGE,
        payload: Number(id)
    };
}

export const filterCardsPerPage = (currentPage, cardsPerPage) => {
    return {
        type: FILTER_CARDS_PER_PAGE,
        payload: Number(cardsPerPage),
        currentPage
    };
}

export const filterCategory = (currentPage, category) => {
    const request = axios.get(ROOT_URL).then(response => {
    return {
        type: FILTER_CATEGORY,
        payload: response,
        currentPage,
        category
    }});
    return request;
}


