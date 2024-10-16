
import {Link} from 'react-router-dom'

const Navigation=() => {

    return <>
    <nav className = "navigation-container">
        Navigation Bar
        <ul>
            <li>
                    <Link to="/">Dashborad</Link>
            </li>
             <li>
                    <Link to= "/watch">Watchlist</Link>
                </li>
            </ul>
        </nav>
    </>

}
export default Navigation;