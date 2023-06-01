import './styles.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useAuthorizeUserMutation, useFetchProfileMutation } from 'src/redux/api/apiSlice'
import { setToken } from 'src/redux/slices/authSlice'
import { setUser }  from 'src/redux/slices/userSlice'
import { useCookies } from 'react-cookie'

export default function Formsignin() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [remember, setRemember] = useState(false)
    const [errorMessage, setErrorMessage] = useState("");

    const [authorizeUser, {isSuccess} ] = useAuthorizeUserMutation()
    const [fetchProfile, {data}] = useFetchProfileMutation()

    const [cookies, setCookie] = useCookies(['token']);

    const onSigninClicked = async (event) => {
        event.preventDefault();
        setErrorMessage("");
        console.log("before")
        try {
            setErrorMessage("");
            const payload = await authorizeUser({ username: username, password: password }).unwrap()
            console.log("token", payload.body.token)
            dispatch(setToken(payload.body.token))
            setCookie('token', payload.body.token)
            const profile = await fetchProfile(payload.body.token).unwrap()

            //store user data in the store
            dispatch(setUser(profile))
            navigate("/user")
        }
        catch (error) {
            console.log("error: ", error.data.message)
            setErrorMessage(error.data.message)
        }
    }

    const onUsernameChanged = (e) => setUsername(e.target.value)
    const onPasswordChanged = (e) => setPassword(e.target.value)
    const onRememberChanged = (e) => setRemember(e.target.value)


    return (

        <main className="form-main">

            <div className="form-container">
                <div className="form-heading">
                    <i className="fa fa-user-circle"></i>
                    <p>Sign In</p>
                </div>

                <span>{errorMessage}</span>

                <form className="form-signin">
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

                    <button type="button" onClick={onSigninClicked}>Sign in</button>
                </form>
            </div>

        </main>
    )
}