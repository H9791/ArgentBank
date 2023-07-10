import "./style.css";
import { useEffect } from "react";
import { useUpdateUsernameMutation } from "../../redux/api/apiSlice";
import Transactions from "../../components/Transactions";
import { selectProfile } from "../../redux/slices/userSlice";
import { selectToken } from "../../redux/slices/authSlice";
import { useSelector } from "react-redux";
import { useState, FormEvent, ChangeEvent } from "react";

type EdituserProps = {
    showUser: (params: boolean) => void;
};

export default function Edituser({ showUser }: EdituserProps) {
    //fetch user profile from the store
    const profile = useSelector(selectProfile);
    const authToken = useSelector(selectToken);
    const [formUsername, setFormUsername] = useState(profile.userName);
    const [updateUsername, { isSuccess }] = useUpdateUsernameMutation();
    const onUsernameSaved = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            //DB update of username, this call invalidates TAG for fetchProfile
            //which should refresh automatically
            updateUsername({ userName: formUsername, token: authToken });
        } catch (error) {
            console.log("error in Edituser -> onUsernameSaved() : ", error);
        }
    };

    useEffect(() => {
        if (isSuccess) {
            showUser(true);
        }
    }, [isSuccess]);

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
                                <label htmlFor="lastName">Last name: </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                    value={profile.lastName}
                                    disabled
                                ></input>
                            </p>
                            <p>
                                <button type="submit">Save</button>
                                <button
                                    type="button"
                                    onClick={() => showUser(true)}
                                >
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
