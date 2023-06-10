import './styles.css'
import Transactions from 'src/features/components/ui/Transactions'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectProfile, setUser } from 'src/redux/slices/userSlice'

import { useFetchProfileQuery } from 'src/redux/api/apiSlice'
import { selectToken } from 'src/redux/slices/authSlice'

//just fetch data
export default function Mainuser() {
    console.log("mainuser")
    const authToken = useSelector(selectToken)

    const { data, error, isFetching } = useFetchProfileQuery(authToken)
       
    const dispatch = useDispatch()
    const navigate = useNavigate()

    //userName should update automatically after store state change
    const profile = useSelector(selectProfile)
    

    const handleClick = () => {
        navigate("/useredit")
     }
    
    let content
    if (isFetching){
        console.log("fetching data")
        content = <p>Fetching data...</p>
    } else if( error ) {
        content = <p>Error fetching profile</p>
    } else {
        //have profile data fetched
        dispatch(setUser(data))
        console.log("PROFILE DATA2:", profile)
    }

    return (<>
        
        {content}

        <main className="main-user">
        <div className="main-user-container">
                <div className="welcome">
                    <p>Welcome back!</p>
                    <p><span>{profile.firstName}</span> <span>{profile.lastName}</span></p>
                </div>
                <button className="edit-button" onClick={handleClick}>Edit name</button>
            <section className="transactions">
                <Transactions />
            </section>
        </div>
    </main>

    </>)

}


