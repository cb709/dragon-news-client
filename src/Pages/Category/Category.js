import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../Shared/NewsCard/NewsCard';

const Category = () => {
    const news = useLoaderData();
    return (
        <div>
            {
                news.map(n => <NewsCard key={n._id} news={n}></NewsCard>)
            }
        </div>
    );
};

export default Category;