import './styles.css'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

export default function Signoptions() {

    const navigate = useNavigate();

    const handleSignout = () => {
        console.log('before: ', Cookies.get('token'))
        Cookies.remove('token');
        console.log('after: ', Cookies.get('token'))
        navigate("/") 

    }
    
    //depending on being signed in or signed out, generated elements will change
    let user="Tony";
    return (
        <div className="signOptions">
            <Link className="option" to="/signin"><i className="fa fa-user-circle" ></i><span className="optionSpan">Sign in</span></Link>
            <Link className="option" to="/user"><i className="fa fa-user-circle" ></i><span className="optionSpan">{user}</span></Link>
            <Link className="option" onClick={handleSignout}><i className="fa fa-sign-out" ></i><span className="optionSpan">Sign out</span></Link>
        </div>  
    )

}