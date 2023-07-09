import "./styles.css";
import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAuthorizeUserMutation } from "../../redux/api/apiSlice";
import { setToken } from "../../redux/slices/authSlice";

export default function Formsignin() {
    //if user already signed in, redirect to the home page
    const navigate = useNavigate();
    //const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);

    const onUsernameChanged = (e: ChangeEvent<HTMLInputElement>) =>
        setUsername(e.target.value);
    const onPasswordChanged = (e: ChangeEvent<HTMLInputElement>) =>
        setPassword(e.target.value);
    const onRememberChanged = (e: ChangeEvent<HTMLInputElement>) =>
        setRemember(e.target.checked);

    const [authorizeUser, { data, isSuccess }] = useAuthorizeUserMutation();

    const onSigninSubmitted = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            console.log("before authorizeUSer");
            authorizeUser({ username: username, password: password });
        } catch (error: any) {
            console.log("error: ", error);
        }
    };

    if (isSuccess) {
        console.log("success, token: ", data.body.token);
        //taken care in extrareducers of authuser slice
        //dispatch(setToken(data.body.token));
        navigate("/user");
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
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username || ""}
                            onChange={onUsernameChanged}
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password || ""}
                            onChange={onPasswordChanged}
                        ></input>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="checkbox"
                            name="remember"
                            checked={remember}
                            onChange={onRememberChanged}
                        ></input>
                        <label htmlFor="checkbox">Remember me</label>
                    </div>
                    <button type="submit">Sign in</button>
                </form>
            </div>
        </main>
    );
}
