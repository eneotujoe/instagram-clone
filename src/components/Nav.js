import logo from '../img/logo.png'
import searchIcon from '../img/searchIcon.png'
import Menu from './Menu'
import '../styles/nav.scss'

function Nav() {
    return (
        <div className='nav'>
            <div className='container' >
                <img className='logo' src={logo} alt='instagram logo' />
                <div className='search'>
                    <img className='search__icon' src={searchIcon} alt='search icon' />
                    <span className='search__text'>Search</span>
                </div>
                <Menu />
            </div>
        </div>
    )
}

export default Nav
