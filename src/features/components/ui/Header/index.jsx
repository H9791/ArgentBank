import './styles.css'
import logo from 'src/assets/img/argentBankLogo.png'
import { Link, useNavigate } from 'react-router-dom'
import { removeUser } from 'src/redux/slices/userSlice'
import { removeToken, selectToken } from 'src/redux/slices/authSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function Header() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    let user = useSelector((state) => state.user.userName)
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
                    <Link className="option" to="/user"><i className="fa fa-user-circle" ></i><span className="optionSpan">{user}</span></Link>
                    <Link className="option" onClick={handleSignout}><i className="fa fa-sign-out" ></i><span className="optionSpan">Sign out</span></Link>
                </>
                    : <Link className="option" to="/signin"><i className="fa fa-user-circle" ></i><span className="optionSpan">Sign in</span></Link>}
            </div>
        </nav>
    </div>)
}