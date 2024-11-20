import React, { useContext, useState, useEffect } from 'react';
import './Fooddisplay.css';
import { StoreContext } from '../../context/Storecontext';
import Fooditem from '../Fooditem/Fooditem';

const Fooddisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000); 
        return () => clearTimeout(timer); 
    }, [category]);

    return (
        <div className="food-display" id="food-display">
            <h2>Below are the top dishes for you</h2>
            {isLoading ? (
                <div className="spinner-container">
                    <div className="spinner"></div>
                </div>
            ) : (
                <div className="food-display-list">
                    {food_list.length > 0 ? (
                        food_list.map((item) =>
                            (category === "All" || category === item.category) && (
                                <Fooditem
                                    key={item._id}
                                    id={item._id}
                                    name={item.name}
                                    description={item.description}
                                    price={item.price}
                                    image={item.image}
                                />
                            )
                        )
                    ) : (
                        <p>No products available in this category.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Fooddisplay;
