import { Link } from "react-router-dom"
import '../assets/css/Navbar.css';

function Navbar() {
  return (
    <nav className="Navbar">
			<div className="logo">
                 <Link className="link"><i class="fa-brands fa-facebook"></i></Link>
                 <Link className="linkj"><i class="fa-solid fa-magnifying-glass"></i></Link>
			</div>
            <div className="center">
                 <Link className="link"><i class="fa-solid fa-house"></i></Link>
                 <Link className="link"><i class="fa-solid fa-tv"></i></Link>
                 <Link className="link"><i class="fa-solid fa-store"></i></Link>
                 <Link className="link"><i class="fa-solid fa-gamepad"></i></Link>
            </div>
				<ul className="list">
                    <li><Link className="link"><i class="fa-solid fa-bars"></i></Link></li>
                    <li><Link className="link"><i class="fa-brands fa-facebook-messenger"></i></Link></li>
                    <li><Link className="link"><i class="fa-solid fa-bell"></i></Link></li>
                    <li><Link className="link"><i class="fa-solid fa-user"></i></Link></li>
				</ul>
    </nav>
  )
}

export default Navbar