import '../scss/header.scss'; 


export default function Header () {
    return (
        <header className="header">
            <div className="header__icons">
                <img src="/img/icons.png" alt="Icons Logo" height={8}/>
            </div>

            <div className="header__user">
                <img className='header__mobile--logo' src="/img/app-logo.png" alt="App logo" width={24} height={24}/>
                <h2>Kitty</h2>
            </div>
            
            <input type="text" name="search" placeholder="Search Expense"></input>

            <div className='header__profile'>
                <img className="header__mobile--search" src="/img/search-black.png" alt="Search icon" width={24} height={24}/>
                <img className="header__profile-logo" src="/img/profile.png" alt="profile logo" width={86} height={86}/>
            </div>
        </header>
    )
}

