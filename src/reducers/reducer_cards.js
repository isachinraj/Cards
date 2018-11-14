import { FETCH_CARDS, ACTIVE_PAGE, FILTER_CARDS_PER_PAGE, 
    PAGE_COUNT, FILTER_CATEGORY, DEFAULT_CATEGORY } from '../actions';

export default function (state = [], action){

    let dataArr = [];
    
    switch(action.type) {
        
        case FETCH_CARDS:
        
        const cardData = action.payload.data;
        const cardFilterCategory = action.category;
        if(cardFilterCategory != DEFAULT_CATEGORY){
            dataArr.cards = cardData.filter((card, index) => {
                return card.category == cardFilterCategory;
            });
        }else{
            dataArr.cards = cardData;
        }

        //dataArr.cards = action.payload.data;
        dataArr.currentPage = action.currentPage;
        dataArr.category = cardFilterCategory;
        dataArr.cardsPerPage = action.cardsPerPage;
        dataArr.pageCount = PAGE_COUNT;
        return dataArr;

        case ACTIVE_PAGE:
        
        dataArr.cards = state.cards;
        dataArr.currentPage = action.payload;
        dataArr.category = state.category;
        dataArr.cardsPerPage = state.cardsPerPage;
        dataArr.pageCount = state.pageCount;
        return dataArr;

        case FILTER_CARDS_PER_PAGE:

        dataArr.cards = state.cards;
        dataArr.currentPage = action.currentPage;
        dataArr.category = state.category;
        dataArr.cardsPerPage = action.payload;
        dataArr.pageCount = state.pageCount;
        return dataArr;

        case FILTER_CATEGORY:

        const cards = action.payload.data;
        const cardCategory = action.category;
        if(cardCategory != DEFAULT_CATEGORY){
            dataArr.cards = cards.filter((card, index) => {
                return card.category == cardCategory;
            });
        }else{
            dataArr.cards = cards;
        }
        dataArr.currentPage = action.currentPage;
        dataArr.category = cardCategory;
        dataArr.cardsPerPage = state.cardsPerPage;
        dataArr.pageCount = state.pageCount;
        return dataArr;

        default:
        return state;
    }
}
