
import { Outlet, Link } from "react-router-dom";

const Layout = () =>{
    return <div> 
        <nav>
            <ul>
                <li>
                    <Link to={"/home"}> Home</Link> 
                </li>
                <li>
                    <Link to={"/search-page"}> Searchpage</Link> 
                </li>
            </ul>
        </nav>
    </div>;
} 
export default Layout;