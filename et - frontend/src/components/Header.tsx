import profile from '../img/profile.png';
import logo from '../img/app-logo.png';
import magnifying from '../img/search-black.png';
import icons from '../img/icons.png';
import './../scss/header.scss'; 


export default function Header () {
    return (
        <header className="header">
            <div className="header__icons">
                <img src={icons} alt="Icons Logo" height={8}/>
            </div>

            <div className="header__user">
                <img className='header__mobile--logo' src={logo} alt="App logo" width={24} height={24}/>
                <h2>Kitty</h2>
            </div>
            
            <input type="text" name="search" placeholder="Search Expense"></input>

            <div className='header__profile'>
                <img className="header__mobile--search" src={magnifying} alt="Search icon" width={24} height={24}/>
                <img className="header__profile-logo" src={profile} alt="profile logo" width={86} height={86}/>
            </div>
        </header>
    )
}

