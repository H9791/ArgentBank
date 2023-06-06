import './styles.css'
import Transactions from 'src/features/components/ui/Transactions'
import { useSelector, useDispatch } from 'react-redux'
import { selectProfile, setNameOfUser } from 'src/redux/slices/userSlice'
import { useState } from 'react'
import { useUpdateUsernameMutation } from 'src/redux/api/apiSlice'
import { selectToken } from 'src/redux/slices/authSlice'
import { useCookies } from 'react-cookie'

export default function Mainuser() {
    
    const profile = useSelector(selectProfile)
    const [userName, setUsername] = useState(profile.userName)
    const [containerContent, setContainerContent] = useState("welcome")
    const [updateUsername, data] = useUpdateUsernameMutation();
    const [cookies] = useCookies('token')
    const token = useSelector(selectToken)
    const dispatch = useDispatch()

    console.log("profile: ", profile)

    const handleClick = () => {
        console.log("handleClick edit")
        setContainerContent("edit")
    }

    const onUsernameSaved = async () => {

        try {
            console.log("call apiSlice username:", userName)
            console.log("cookie token: ", cookies.token)
            const result = await updateUsername({ userName, token }).unwrap()
            console.log("data:", data)
            console.log("result:", result)
            console.log("username: ", userName)
            dispatch(setNameOfUser(userName))
            setContainerContent('welcome')
            console.log(profile.userName)

        } catch (error) {
            console.log("error: ",)
        }
    }

    const onEditCancelled = () => {
        setContainerContent("welcome")
    }

    const onUsernameChanged = (e) => setUsername(e.target.value)

    return (<>
        <main className="main-user">
            <div className="main-user-container">

                {containerContent === "welcome" ? <>
                    <div className="welcome">
                        <p>Welcome back!</p>
                        <p><span>{profile.firstName}</span> <span>{profile.lastName}</span></p>
                    </div>
                    <button className="edit-button" onClick={handleClick}>Edit name</button>
                </> : <>
                    <div className="edit">
                        <h2>Edit user info</h2>
                        <p>
                            <label htmlFor="userName">User name: </label>
                            <input type="text" name="userName" id="userName" onChange={onUsernameChanged} value={userName}></input>
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
                            <button onClick={onUsernameSaved}>Save</button><button onClick={onEditCancelled}>Cancel</button>
                        </p>
                    </div>
                </>
                }
                <section className="transactions">
                    <Transactions />
                </section>
            </div>
        </main>
    </>)


}


