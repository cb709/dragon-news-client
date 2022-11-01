import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(()=> {
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    return (
        <div>
            <div className="categories-list border rounded p-3">
            {
                categories.map(category => <div key={category.id}> <Link to={`/category/${category.id}`}>{category.name}</Link> </div>)
            }
            </div>
        </div>
    );
};

export default LeftSideNav;