import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(()=> {
        fetch('https://dragon-news-server-cb709.vercel.app/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    return (
        <div>
            <div className="categories-list border rounded p-3">
            {
                categories.map(category => <div key={category.id}> <Link className="nav-link" to={`/category/${category.id}`}>{category.name}</Link> </div>)
            }
            </div>
        </div>
    );
};

export default LeftSideNav;