
import './style.css'
import { useUpdateUsernameMutation } from 'src/redux/api/apiSlice'
import Transactions from 'src/features/components/ui/Transactions'
import { selectProfile } from 'src/redux/slices/userSlice'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { selectToken } from 'src/redux/slices/authSlice'


export default function Edituser() {
    console.log("******************************************************in edit user")
    const navigate = useNavigate()

    //fetch user profile from the store
    const profile = useSelector(selectProfile);
    const authToken = useSelector(selectToken)
    console.log("authToken: ", authToken)
    const [updateUsername, { isSuccess }] = useUpdateUsernameMutation();

    const onUsernameSaved = async (event) => {
        event.preventDefault();
        try {
            //DB update of username, this call invalidates TAG for fetchProfile 
            //which should refresh automatically
            updateUsername({ userName: formUsername, token: authToken })
        } catch (error) {
            console.log("error in Edituser -> onUsernameSaved() : ", error)
        }
    }

    if (isSuccess) {
        navigate("/user")
    }

    const onEditCancelled = () => { navigate("/user") }

    const [formUsername, setFormUsername] = useState(profile.userName)
    const onUsernameChanged = (e) => setFormUsername(e.target.value)

    return (
        <>
            <main className="main-user">
                <div className="main-user-container">
                    <form onSubmit={onUsernameSaved}>
                        <div className="edit">
                            <h2>Edit user info</h2>
                            <p>
                                <label htmlFor="userName">User name: </label>
                                <input type="text" name="userName" id="userName" onChange={onUsernameChanged} value={formUsername}></input>
                            </p>
                            <p>
                                <label htmlFor="firstName">First name: </label>
                                <input type="text" name="firstName" value={profile.firstName} disabled></input>
                            </p>
                            <p>
                                <label>Last name: </label>
                                <input type="text" name="lastName" value={profile.lastName} disabled></input>
                            </p>
                            <p>
                                <button type="submit">Save</button><button onClick={onEditCancelled}>Cancel</button>
                            </p>
                        </div>
                    </form>
                    <section className="transactions">
                        <Transactions />
                    </section>
                </div>
            </main>
        </>
    )
}