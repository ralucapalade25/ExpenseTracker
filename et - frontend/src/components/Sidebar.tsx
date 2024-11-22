import logo from '../img/app-logo.png';
import './../scss/sidebar.scss'; 



export default function Sidebar () {
    return (
        <>
            <div className='sidebar'>
                <img src={logo} alt="App logo" width={86} height={86}/>
            </div>
        </>
    )
}