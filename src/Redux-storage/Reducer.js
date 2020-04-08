
const reducer = (state = [], action) => {
    switch (action.type) {
        case 'Add-user':
            return [
                ...state,
                action.data
            ]
        default: return state
    }
}

export default reducer