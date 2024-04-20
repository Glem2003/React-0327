import NavBarImg from './NavBarImg';
import NavBarLink from './NavBarLink';

function NavBar() {
    return(
        <nav className="navBar">
            <ul className="nav-item">
                <NavBarImg className="Logo" src="/images/AppleLogo.png" alt="Apple.logo" />
                <NavBarLink to="/store" title="商店" />
                <NavBarLink to="/Mac" title="Mac" />
                <NavBarLink to="/ipad" title="ipad" />
                <NavBarLink to="/Watch" title="Watch" />
                <NavBarLink to="/AirPods" title="AirPods" />
                <NavBarLink to="/Tv and Family" title="TV 和家庭" />
                <NavBarLink to="/Funny" title="娛樂" />
                <NavBarLink to="/component" title="配件" />
                <NavBarLink to="/other serve" title="支援服務" />
                <NavBarImg className="Search" src="/images/search-icon.png" alt="Search" />
                <NavBarImg className="Shop-Cart" src="/images/shopp-cart.png" alt="Shop-Cart" />
            </ul>
        </nav>
    )
}


export default NavBar;