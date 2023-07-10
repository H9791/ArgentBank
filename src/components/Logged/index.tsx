import { useState } from "react";
import Mainuser from "../Mainuser";
import Edituser from "../Edituser";

export default function Logged() {
    const [showUser, setShowUser] = useState(true);

    return (
        <>
            {showUser ? (
                <Mainuser showUser={setShowUser} />
            ) : (
                <Edituser showUser={setShowUser} />
            )}
        </>
    );
}
