import "./styles.css";
import argentBankLogo from "../../assets/img/argentBankLogo.png";
import { Link } from "react-router-dom";
import { removeUser, selectUsername } from "../../redux/slices/userSlice";
import { removeToken, selectToken } from "../../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { HiUserCircle } from "react-icons/hi";
import { FaSignOutAlt } from "react-icons/fa";

export default function Header() {
    console.log("header!");
    const dispatch = useDispatch();
    let user = useSelector(selectUsername);
    let signedIn = useSelector(selectToken);
    //remove cookie and empty the store
    const handleSignout = () => {
        dispatch(removeUser());
        dispatch(removeToken());
        //in future add PURGE to extra reducers for redux-persist?
    };

    return (
        <>
            <div className="header">
                <Link to="/">
                    <img className="logo" src={argentBankLogo} />
                </Link>
                <nav>
                    <div className="signOptions">
                        {signedIn ? (
                            <>
                                <Link className="option" to="/logged">
                                    <span className="optionSpan">
                                        <HiUserCircle /> {user}
                                    </span>
                                </Link>
                                <Link
                                    className="option"
                                    to="/"
                                    onClick={handleSignout}
                                >
                                    <span className="optionSpan">
                                        <FaSignOutAlt /> Sign out
                                    </span>
                                </Link>
                            </>
                        ) : (
                            <Link className="option" to="/signin">
                                <span className="optionSpan">
                                    <HiUserCircle /> Sign in
                                </span>
                            </Link>
                        )}
                    </div>
                </nav>
            </div>
        </>
    );
}
