import React, { useEffect, useState} from 'react';
import axios from 'axios';
import '../scss/pages/category.scss'
import 'react-tooltip/dist/react-tooltip.css'
import { CategoryInterface } from '../interfaces/CategoryInterface';
import { Tooltip } from 'react-tooltip';

const Category = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<CategoryInterface[]>([]);
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(true);
    };

    const onLeave = () => {
        setHover(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const {data: response} = await axios.get('http://localhost:3001/api/category')
                setData(response);
            } catch (error) {
                console.error(error)  
            }
            setLoading(false);
        }

        fetchData();
    }, []);

    return ( 
        <div className='categories'>
            {loading && <div>Loading</div>}
            <h2 className='categories__title'>View Category</h2>
            {!loading && (
                <div className='categories__grid'>
                    {data.map((item, index) => (
                        <>
                            <img key={item.category_id} src={`/img/categories/${item.image_path}`} alt={item.name} width={80} height={80} onMouseEnter={onHover} onMouseLeave={onLeave} className={`categories__${index}`} />
                            <Tooltip anchorSelect={`.categories__${index}`} place="top">{item.name}</Tooltip>
                        </>
                    ))}
                </div>
            )}

        </div>
    )
}

export default Category;

