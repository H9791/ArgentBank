import "./styles.css";
import Transactions from "../../components/Transactions";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectProfile, setUser } from "../../redux/slices/userSlice";
import { useFetchProfileQuery } from "../../redux/api/apiSlice";
import { selectToken } from "../../redux/slices/authSlice";

//just fetch data
export default function Mainuser() {
    const navigate = useNavigate();
    const authToken = useSelector(selectToken);
    if (authToken === "") {
        navigate("/");
    }
    //userName should update automatically after store state change
    const profile = useSelector(selectProfile);
    const { data, error, isFetching, isSuccess } =
        useFetchProfileQuery(authToken);

    let content;
    if (isFetching) {
        console.log("fetching data");
        content = <p>Fetching data...</p>;
    } else if (error) {
        content = <p>Error fetching profile</p>;
    }

    if (isSuccess) {
        //have profile data fetched
        //dispatch(setUser(data));
        console.log("user set! ", profile);
    }

    return (
        <>
            {content}
            <main className="main-user">
                <div className="main-user-container">
                    <div className="welcome">
                        <p>Welcome back!</p>
                        <p>
                            <span>{profile.firstName}</span>{" "}
                            <span>{profile.lastName}</span>
                        </p>
                    </div>

                    <Link className="edit-button" to="/useredit">
                        Edit name
                    </Link>

                    <section className="transactions">
                        <Transactions />
                    </section>
                </div>
            </main>
        </>
    );
}
