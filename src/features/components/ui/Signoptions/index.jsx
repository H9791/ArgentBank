import './styles.css'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { useFetchProfileMutation } from 'src/redux/api/apiSlice'
import { useEffect, useState } from 'react'
import { removeUser } from 'src/redux/slices/userSlice'
import { useDispatch } from 'react-redux'

export default function Signoptions() {
    //in case of page reload, prevent losing the app state, or recontact server to fetch up to date data
    
    
    const dispatch = useDispatch()
    const [fetchProfile, { result }] = useFetchProfileMutation();
    //check for a cookie token, if it exists, call server and get first name
    const cookie = Cookies.get('token')
    console.log("header cookie data: ", cookie)
    const [userData, setUserData] = useState({})
    const navigate = useNavigate();

    useEffect(() => {
        async function userProfile(t) {
            const data = await fetchProfile(t).unwrap()
            setUserData(data)
        }
        if (cookie) {
            userProfile(cookie)
        }
    }, [])


    console.log("header user data: ", userData)

    //remove cookie and empty the store
    const handleSignout = () => {
        console.log("before removing user")
        dispatch(removeUser())
        console.log('before: ', cookie)
        Cookies.remove('token');
        console.log('after: ', Cookies.get('token'))
        navigate("/")
    }

    //depending on being signed in or signed out, generated elements will change

    return (
        <div className="signOptions">

            {(userData.firstName) ? <>
                <Link className="option" to="/user"><i className="fa fa-user-circle" ></i><span className="optionSpan">{userData.firstName}</span></Link>
                <Link className="option" onClick={handleSignout}><i className="fa fa-sign-out" ></i><span className="optionSpan">Sign out</span></Link>
            </>
                : <Link className="option" to="/signin"><i className="fa fa-user-circle" ></i><span className="optionSpan">Sign in</span></Link>}

        </div>
    )

}