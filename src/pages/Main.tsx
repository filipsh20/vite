import { Link } from "react-router-dom"

export default function Main() {
    return (
        <>
            <h1>Main</h1>
            <ul>
                <li>
                    <Link to='/auth/login'>Login</Link>
                </li>
                <li>
                    <Link to='/auth/register'>Register</Link>
                </li>
            </ul>
        </>
    )
}