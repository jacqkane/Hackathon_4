export default function reducer(state, action) {
    switch (action.type) {

        case 'picturesList/barwidth':
            return {
                ...state,
                barWidth: action.payload
            }

        case 'picturesList/barheight':
            return {
                ...state,
                barHeight: action.payload
            }


    }
    return state;
}