import '../scss/sidebar.scss'; 
import { NavLink } from 'react-router-dom';



export default function Sidebar () {
    return (
        <>
            <div className='sidebar'>
                <img src="/img/app-logo.png" alt="App logo" width={86} height={86}/>
                <div className='sidebar__menu'>
                    <NavLink to="dashboard" className='sidebar__icon'>
                        <img src="/img/sidebar-icons/category.svg" alt="category icon" width={24} height={24} />
                    </NavLink>
                    <NavLink to="add" className='sidebar__icon'>
                        <img src="/img/sidebar-icons/add.svg" alt="add icon" width={24} height={24}/>
                    </NavLink>
                    <NavLink to="chart" className='sidebar__icon'>
                        <img src="/img/sidebar-icons/chart.svg" alt="chart icon" width={24} height={24}/>
                    </NavLink>
                    <NavLink to="paper" className='sidebar__icon'>
                        <img src="/img/sidebar-icons/paper.svg" alt="paper icon" width={24} height={24}/>
                    </NavLink>
                    <NavLink to="settings" className='sidebar__icon'>
                        <img src="/img/sidebar-icons/settings.svg" alt="settings icon" width={24} height={24}/>
                    </NavLink>
                </div>
                <div className='sidebar__logout'>
                    <img src="/img/logout.png" alt="logout icon" width={24} height={24}/>
                </div>
            </div>
        </>
    )
}