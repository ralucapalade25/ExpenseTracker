import Header from "../components/Header"
import Sidebar from "../components/Sidebar"

export default function Homepage(){
    return (
        <div className='container'>
            <Sidebar />
            <Header />
        </div>
    )
}