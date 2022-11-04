import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../Shared/NewsCard/NewsCard';

const Category = () => {
    const news = useLoaderData();
    const [newsCount, setNewsCount] = useState(3)
    const handleLoadMore = () => {
        console.log('hello')
        setNewsCount(newsCount + 3);
    }
    return (
        <div>
            <h5 className='text-center border rounded p-2 mb-3'>{news.length !== 0 ? news.length : 'No'} News Found</h5>
            {
                news.length !== 0 ? news.slice(0, newsCount).map(n => <NewsCard key={n._id} news={n}></NewsCard>) : ''
            }
            {
                news.length > 3 ? <button className='btn btn-dark w-100' onClick={handleLoadMore}>Load More</button> : ''
            }
            
        </div>
    );
};

export default Category;