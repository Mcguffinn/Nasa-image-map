import {
    GRAB_DATA_SUCESS,
    GRAB_DATA_FAILURE,
} from "../actions/NasaCaller";

const init = {
    data: {},
    error: '',
    grabbing: false
}

function callReducer (state = init, action) {
    switch(action.type){

        case GRAB_DATA_SUCESS:
            return{
                ...state,
                error:'',
                grabbing:false,
                data: action.payload
            }

        case GRAB_DATA_FAILURE:
            return{
                ...state,
                error: action.payload
            }
            
        default:
            return state;
    }
    

}

export default callReducer;// yeah 