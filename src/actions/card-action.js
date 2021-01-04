export const ADD_CARD = "ADD_CARD";
export const DELETE_CARD = "DELETE_CARD";


export const add_card = data => {
    return {
        type: ADD_CARD,
        payload: data
    }
}
export const delete_card = data => {
    return {
        type: DELETE_CARD,
        payload: Number(data)
    }
}