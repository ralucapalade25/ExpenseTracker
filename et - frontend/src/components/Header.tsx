import profile from '../img/profile.png';
import './../scss/header.scss'; 


export default function Header () {
    return (
        <header className="header">
            <h2>Kitty</h2>
            <input type="text" name="search" placeholder="Search Expense"></input>
            <div className='header__profile'>
                <img src={profile} alt="profile logo" width={86} height={86}/>
            </div>
        </header>
    )
}

