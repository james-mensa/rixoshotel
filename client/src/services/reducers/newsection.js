import {SECTIONS} from "./../../config/constants";



export default function newSection(state=null,action){
    switch(action.type){
        case SECTIONS:
            return {...state,Section:action.payload};
        default:
            return state;
    }
}


