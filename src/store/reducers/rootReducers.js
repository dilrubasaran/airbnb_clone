const initialState = {
    modal_list: [],
}

var new_obj = [];
function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "MODAL":           
            new_obj[action.payload.modalName] = { open: action.payload.modalOpen };
            return { ...new_obj };
            break;

        default:
            return false;
            break;
    }
}

export default rootReducer;