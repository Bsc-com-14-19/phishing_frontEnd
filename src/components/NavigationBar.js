import {FaBars,FaUserCircle,FaSearch} from "react-icons/fa";
import './NavigationBar.css'
import logo from'../images/JuiceShop_Logo.png'
import {MdOutlineLanguage} from "react-icons/md"
function NavigationBar() {
  return (
    <header className="Navigation">
      <div className="logos">
       <button>
         <FaBars className="far"/>
         </button>
       <img className="logo" src={logo} alt="logo"/> 
         <h3 className='Logoword'>OWASP  Juice Shop</h3>
       
      </div>
      <nav className="RightCustomise">
        <FaSearch onClick={'------------'}/>
        <a href="/#"><FaUserCircle/>Account</a>
         <a href="/#"><MdOutlineLanguage/>EN</a>
       </nav>
    </header>
    );
}

export default NavigationBar;