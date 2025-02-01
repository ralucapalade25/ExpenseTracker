import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { TransactionsInterface } from '../interfaces/TransactionsInterface';
import '../scss/pages/transactions.scss'

const Transactions = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<TransactionsInterface[]>([]);
    const token = localStorage.getItem('token');
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    const formatDate = (dateInput: string | Date): string => {
        const date = dateInput instanceof Date ? dateInput : new Date(dateInput);
      
        return date.toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false, 
        });
      };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const {data: response} = await axios.get('http://localhost:3001/api/transactions', config)
                console.log(response);
                setData(response);

            } catch (error) {
                console.error(error)  
            }
            setLoading(false);
        }

        fetchData();
    }, []);

    return ( 
        <div className='transactions'>
           {loading && <div>Loading</div>}
           <div className='transactions__wrapper'>
           <div className='transactions__upper'>
                <h2 className='transactions__title'>Transactions</h2>
                <input className='transactions__search' type="text" name="search" placeholder="Search..." />
           </div>
            {!loading && (
                <div>
                    <div className='transactions__header'>
                        <div>Added</div>
                        <div>Transaction Date</div>
                        <div className='transactions__header-category'>Category</div>
                        <div className='transactions__header-amount'>Amount</div>
                        <div>Description</div>
                    </div>
                    {data.map((item, index) => (
                        <div className='transactions__row' key={index}>
                            <div>{formatDate(item.creation_date)}</div>
                            <div>{formatDate(item.date)}</div>
                            <div className='transactions__row-category' data-category={item.category_name}><span>{item.category_name}</span></div>
                            <div className='transactions__row-amount'>{item.amount} $</div>
                            <div>{item.description}</div>   
                        </div>                           
                    ))}
                </div>
            )}
           </div>
     

        </div>
    )
}

export default Transactions;