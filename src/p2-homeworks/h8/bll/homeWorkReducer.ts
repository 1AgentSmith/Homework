import {UserType} from "../HW8";

type SortType = {
    type: 'sort',
    payload: 'up' | 'down',
}
type CheckType = {
    type: 'check',
    payload: number
}

type AllActionType = SortType | CheckType
export const homeWorkReducer = (state: UserType, action: AllActionType): UserType => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            const copyState = [...state]

            if(action.payload === 'up') {
                copyState.sort((a, b)=> a.name > b.name ? 1: -1)
            }
            if(action.payload === 'down') {
                copyState.sort((a, b)=> a.name < b.name ? 1: -1)
            }

            return copyState
        }
        case 'check': {
            // need to fix
            return state.filter(f=> f.age >= action.payload)
        }
        default:
            return state
    }
}
