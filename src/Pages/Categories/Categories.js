import React, { useEffect, useState } from 'react';

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(()=> {
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])

    return (
        <div>
            <h3>This is category</h3>
        </div>
    );
};

export default Categories;