import Category from "../components/Category"
import Transactions from "../components/Transactions"

export default function Dashboard(){
    return (
        <>
            <div className="wrapper">
                <Category />
                <Transactions />
            </div>     
        </>
    )
}