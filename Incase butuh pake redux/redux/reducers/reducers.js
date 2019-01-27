// src/redux/reducers/reducers.js
import { combineReducers } from 'redux';
import { ADD_NOTE } from './../actions/actions.js';;

const initialState = {
    notes: [],
    note: {}
}
export default (state=initialState, action) => {
    switch (action.type) {
		case 'ADD_NOTE':
		return {
			...state,
			note: [...state.note, action.newItem]
		}
        case 'LOAD_NOTES' :
        return {
            ...state,
            notes: action.notes
        }
        case 'VIEW_NOTE':
        return {
            ...state,
            note: action.note
        }
        case 'CLAP_ARTICLE':
        let note = Object.assign({}, state.note)
        note.claps++
        console.log(note)
        return {
            ...state,
            note: note
        }
        default:
            return state
    }
}