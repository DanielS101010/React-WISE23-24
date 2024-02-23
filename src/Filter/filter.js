import "./filter.css"
import { getCategories, getSubCategories, setCategoryFilter, setSubCategoryFilter } from "../reducer/reducer";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from 'react';

const Filter = () => {

    const categories = useSelector((state) => { return state.categories })
    const subCategories = useSelector((state) => { return state.subCategories })
    const dispatch = useDispatch();

    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSubCategory, setSelectedSubCategory] = useState('');

    useEffect(() => {
        dispatch(getCategories())
        dispatch(getSubCategories())
    }, [])

    const handleCategoryChange = (categoryId) => {
        if (selectedCategory === categoryId) {
            setSelectedCategory('');
            dispatch(setCategoryFilter(''));
            setSelectedSubCategory(''); 
            dispatch(setSubCategoryFilter(''));
        } else {
            setSelectedCategory(categoryId);
            dispatch(setCategoryFilter(categoryId));
        }
    };

    const handleSubCategoryChange = (subCategoryId, categoryId) => {
        if (selectedSubCategory === subCategoryId && selectedCategory === categoryId) {
            setSelectedSubCategory('');
            dispatch(setSubCategoryFilter(''));

        } else {
            setSelectedCategory(categoryId);
            setSelectedSubCategory(subCategoryId);
            dispatch(setCategoryFilter(categoryId));
            dispatch(setSubCategoryFilter(subCategoryId));
        }
    };

    if (!categories && !subCategories) {
        return <div>

        </div>;
    }

    return (
        <div className="Filter">
            {categories.map((category) => (
                <div key={category._id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={selectedCategory === category._id}
                            onChange={() => handleCategoryChange(category._id)}
                        />
                        {category.name}
                    </label>
                    {subCategories
                        .filter(subCategory => category.subcategoryIds.includes(subCategory._id))
                        .map((filteredSubCategory) => (
                            <div key={filteredSubCategory._id} className="subcategories">
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={selectedSubCategory === filteredSubCategory._id && selectedCategory === category._id}
                                        onChange={() => handleSubCategoryChange(filteredSubCategory._id, category._id)}
                                    />
                                    {filteredSubCategory.name}
                                </label>
                            </div>
                        ))}
                </div>
            ))}
        </div>
    );
};
export default Filter; 