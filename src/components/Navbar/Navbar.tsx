import Logo from '../../assets/logo.png';
import SearchField from '../SearchField/SearchField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Navbar.scss';

const Navbar = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="nav">
                    <div className="logo">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="search-field">
                        <SearchField />
                    </div>
                    <div className="login-btn">
                        <button
                            onClick={() => toast('I am working on this feature')}
                        >
                            Login
                        </button>
                    </div>
                </nav>
                <ToastContainer />
            </div>
        </header>
    )
}

export default Navbar;
