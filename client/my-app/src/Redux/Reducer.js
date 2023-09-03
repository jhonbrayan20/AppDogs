import { CLEAR_DETAILS, CLEAR_SEARCH, GET_ALL_TEMPERAMENT, GET_DOGS_ID, GET_DOG_ALL, GET_FILTERED_BREEDS, ORDER_DOGS, SEARCH_BY_NAME,CLEAR_BREEDS,POST_FORM,CLEAR_FORM,SET_INPUT} from "./Types";



const stateInitial={
    breeds: [],
    breedDetail: [],
    temperaments: [],
    foundByName: [],
    filterBreedsTemp:[],
    postForm:[],
    input:1
}


function reducer(state=stateInitial,action){

    switch (action.type) {
        case GET_DOG_ALL:
            return {
                ...state,
                breeds: action.payload
            }
        case GET_DOGS_ID:
            return {
                ...state,
                breedDetail: action.payload
            }
        case GET_ALL_TEMPERAMENT:
            return {
                ...state,
                temperaments: action.payload
            }
        case CLEAR_DETAILS:
            return {
                ...state,
                breedDetail: action.payload
            }
        case CLEAR_BREEDS:
            return {
                ...state,
                breeds: []
            }
        case CLEAR_SEARCH:
            return {
                ...state,
                foundByName: action.payload
            }
        case GET_FILTERED_BREEDS:
            if(action.source==="LisBreeds"){
                return {
                    ...state,
                    filterBreedsTemp: JSON.parse(JSON.stringify(action.payload))
                }
            }
            return{
                ...state,
                    breeds: JSON.parse(JSON.stringify(action.payload))
            }
        case ORDER_DOGS:
            return {
                ...state,
                breeds: JSON.parse(JSON.stringify(action.payload))
            }
        case SEARCH_BY_NAME:
            return {
                ...state,
                foundByName: JSON.parse(JSON.stringify(action.payload))
            }
        case POST_FORM:
            return{
                ...state,postForm:action.payload
            }
        case CLEAR_FORM:
            return{
                ...state,postForm:action.payload
            }
            case SET_INPUT:
                return{
                    ...state,
                    input:action.payload
                }
        default:
            return state
    }

};

export default reducer;