
import {Link} from 'react-router-dom'

const Navigation=() => {

    return <>
    <nav className = "navigation-container">
        Navigation Bar
        <ul>
            <li>
                    <Link to="/">Dashboard</Link>
            </li>
             <li>
                    <Link to= "/WatchList">Watchlist</Link>
                </li>
            </ul>
        </nav>
    </>

}
export default Navigation;