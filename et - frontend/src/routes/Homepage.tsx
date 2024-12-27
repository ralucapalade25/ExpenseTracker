import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import { Outlet } from "react-router-dom"

export default function Homepage(){
    return (
        <div className='container'>
            <Sidebar />
            <Header />
            <Outlet />
        </div>
    )
}