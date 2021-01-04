

import {ADD_CARD,DELETE_CARD} from "../actions/card-action";


const defaultState = {
    products: [{
        "id": 0,
        "name": "IPHONE 12 PRO",
        "paraf": "Buy a Iphone 12 Pro",
        "price": "1100$",
        "image": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-blue-hero?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604021661000"
    }, {
        "id": 1,
        "name": "IPHONE 12 ",
        "paraf": "Buy a Iphone 12",
        "price": "950$",
        "image": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-white-select-2020?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604343705000"
    }, {
        "id": 2,
        "name": "IPHONE 12 Mini",
        "paraf": "Buy a Iphone 12 Mini",
        "price": "780$",
        "image": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-mini-blue-select-2020?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604343706000"
    }],
    cards: []
}


const cardReducers = (state= defaultState,{type,payload}) => {
    switch(type) {
        case ADD_CARD:
            return {
                ...state,
                cards: [...state.cards,payload]
            }
        case DELETE_CARD:
            console.log(state.cards.filter(card => card.id === payload ? null : card));
            return {
                ...state,
                cards:  state.cards.filter(card => card.id === payload ? null : card)
            }
        default:
            return state
    }
} 
export default cardReducers;