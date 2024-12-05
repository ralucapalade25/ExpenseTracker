import logo from '../img/app-logo.png';
import add from '../img/sidebar-icons/add.svg'
import category from '../img/sidebar-icons/category.svg'
import chart from '../img/sidebar-icons/chart.svg'
import paper from '../img/sidebar-icons/paper.svg'
import settings from '../img/sidebar-icons/settings.svg'
import logout from '../img/logout.png';
import './../scss/sidebar.scss'; 
import { Link } from 'react-router-dom';


export default function Sidebar () {
    return (
        <>
            <div className='sidebar'>
                <img src={logo} alt="App logo" width={86} height={86}/>
                <div className='sidebar__menu'>
                    <Link to="Category" className='sidebar__icon'>
                        <img src={category} alt="category icon" width={24} height={24}/>
                    </Link>
                    <Link to="Add" className='sidebar__icon'>
                        <img src={add} alt="add icon" width={24} height={24} />
                    </Link>
                    <Link to="Chart" className='sidebar__icon'>
                        <img src={chart} alt="chart icon" width={24} height={24}/>
                    </Link>
                    <Link to="Paper" className='sidebar__icon'>
                        <img src={paper} alt="paper icon" width={24} height={24}/>
                    </Link>
                    <Link to="Settings" className='sidebar__icon'>
                        <img src={settings} alt="settings icon" width={24} height={24}/>
                    </Link>
                </div>
                <div className='sidebar__logout'>
                    <img src={logout} alt="logout icon" width={24} height={24}/>
                </div>
            </div>
        </>
    )
}