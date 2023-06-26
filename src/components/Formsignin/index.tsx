import './styles.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useAuthorizeUserMutation } from 'src/redux/api/apiSlice'
import { setToken } from 'src/redux/slices/authSlice'

export default function Formsignin() {

    //if user already signed in, redirect to the home page
    const navigate = useNavigate()
    /*useEffect(()=>{
        Cookies.get('token') && navigate("/")
    }
    ,[])*/

    const dispatch = useDispatch()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [remember, setRemember] = useState(false)
    const onUsernameChanged = (e) => setUsername(e.target.value)
    const onPasswordChanged = (e) => setPassword(e.target.value)
    const onRememberChanged = (e) => setRemember(e.target.value)
    
    const [authorizeUser, {data, isSuccess} ] = useAuthorizeUserMutation()

/*     const onSigninSubmitted = async (event) => {
        event.preventDefault();
        try {
            const payload = await authorizeUser({ username: username, password: password }).unwrap()
            dispatch(setToken(payload.body.token))
            navigate("/user")
        }
        catch (error) {
            console.log("error: ", error.data.message)
        }
    } */

    const onSigninSubmitted =  (event) => {
        event.preventDefault();
        try {
            authorizeUser({ username: username, password: password }) 
        }
        catch (error) {
            console.log("error: ", error.data.message)
        }
    }

        if (isSuccess){
            console.log("success, token: ", data.body.token )
            dispatch(setToken(data.body.token))
            navigate("/user")
        }

     return (
        <main className="form-main">
            <div className="form-container">
                <div className="form-heading">
                    <i className="fa fa-user-circle"></i>
                    <p>Sign In</p>
                </div>
                <span>{}</span>
                <form className="form-signin" onSubmit={onSigninSubmitted}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" value={username || ''} onChange={onUsernameChanged}></input>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" value={password || ''} onChange={onPasswordChanged}></input>
                    </div>
                    <div>
                        <input type="checkbox" id="checkbox"></input>
                        <label htmlFor="checkbox" id="remember" name="remember" value={remember || ''} onChange={onRememberChanged}>Remember me</label>
                    </div>
                    <button type="submit">Sign in</button>
                </form>
            </div>

        </main>
    )
}