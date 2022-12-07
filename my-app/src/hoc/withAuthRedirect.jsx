import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../services/firebase/firebase";
import {useLocation, useNavigate} from "react-router-dom";

export const withAuthRedirect = Component => ({ ...props }) => {
    const navigate = useNavigate();
    const {pathname} = useLocation()

    onAuthStateChanged(auth, (currentUser)=> {
        if (!currentUser && pathname !=='/auth') {
            navigate(`/auth`)
        } else if (currentUser && pathname ==='/auth') {
            navigate(`/`)
        }
    })

    return <Component {...props} />
}
