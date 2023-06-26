import './styles.css'
import logo from 'src/assets/img/argentBankLogo.png'
import { Link, useNavigate } from 'react-router-dom'
import { removeUser, selectUsername } from 'src/redux/slices/userSlice'
import { removeToken, selectToken } from 'src/redux/slices/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { HiUserCircle } from 'react-icons/hi'
import { FaSignOutAlt } from 'react-icons/fa'

export default function Header() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    let user = useSelector(selectUsername)
    let signedIn = useSelector(selectToken)

    //remove cookie and empty the store
    const handleSignout = () => {
        dispatch(removeUser())
        dispatch(removeToken())
        navigate("/")
    }

    return (<div className="header">
        <Link to="/">
            <img className="logo" src={logo} />
        </Link>
        <nav>
            <div className="signOptions">
                {signedIn ? <>
                    <Link className="option" to="/user"><span className="optionSpan"><HiUserCircle /> {user}</span></Link>
                    <Link className="option" onClick={handleSignout}><span className="optionSpan"><FaSignOutAlt /> Sign out</span></Link>
                </>
                    : <Link className="option" to="/signin"><span className="optionSpan"><HiUserCircle /> Sign in</span></Link>}
            </div>
        </nav>
    </div>)
}