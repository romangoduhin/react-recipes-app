import {setToLocStor} from "../../assets/localStorage";
import {setSearchTypeAction} from "../actions/appActions";

export const setSearchTypeThunk = (type) => {
    return async function (dispatch) {
        setToLocStor('searchType', type)

        dispatch(setSearchTypeAction(type))
    }
}
