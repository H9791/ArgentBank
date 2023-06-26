import "./style.css";
import { useUpdateUsernameMutation } from "../../redux/api/apiSlice";
import Transactions from "../../components/Transactions";
import { selectProfile } from "../../redux/slices/userSlice";
import { selectToken } from "../../redux/slices/authSlice";
import { useSelector } from "react-redux";
import { useState, FormEvent, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

export default function Edituser() {
    const navigate = useNavigate();

    //fetch user profile from the store
    const profile = useSelector(selectProfile);
    const authToken = useSelector(selectToken);
    console.log("authToken: ", authToken);
    const [updateUsername, { isSuccess }] = useUpdateUsernameMutation();

    const onUsernameSaved = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            //DB update of username, this call invalidates TAG for fetchProfile
            //which should refresh automatically
            updateUsername({ userName: formUsername, token: authToken });
        } catch (error) {
            console.log("error in Edituser -> onUsernameSaved() : ", error);
        }
    };

    if (isSuccess) {
        navigate("/user");
    }

    const onEditCancelled = () => {
        navigate("/user");
    };

    const [formUsername, setFormUsername] = useState(profile.userName);
    const onUsernameChanged = (e: ChangeEvent<HTMLInputElement>) =>
        setFormUsername(e.target.value);

    return (
        <>
            <main className="main-user">
                <div className="main-user-container">
                    <form onSubmit={onUsernameSaved}>
                        <div className="edit">
                            <h2>Edit user info</h2>
                            <p>
                                <label htmlFor="userName">User name: </label>
                                <input
                                    type="text"
                                    name="userName"
                                    id="userName"
                                    onChange={onUsernameChanged}
                                    value={formUsername}
                                ></input>
                            </p>
                            <p>
                                <label htmlFor="firstName">First name: </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={profile.firstName}
                                    disabled
                                ></input>
                            </p>
                            <p>
                                <label>Last name: </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={profile.lastName}
                                    disabled
                                ></input>
                            </p>
                            <p>
                                <button type="submit">Save</button>
                                <button onClick={onEditCancelled}>
                                    Cancel
                                </button>
                            </p>
                        </div>
                    </form>
                    <section className="transactions">
                        <Transactions />
                    </section>
                </div>
            </main>
        </>
    );
}
