import "./getArticles.css"
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { loadArticles } from "../reducer/reducer";
import { Link } from 'react-router-dom';



const FilteredArticles = () => {
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(loadArticles())
    },[])

    const { articles, filter } = useSelector(state => ({
        articles: state.articles,
        filter: state.filter,
    }));

    const filteredArticles = articles.filter(article => {
        let matchesFilter = true;
        if (filter.category) {
            matchesFilter = article.categoryId === filter.category;
        }
        if (matchesFilter && filter.subCategory) {
            matchesFilter = article.subcategory == filter.subCategory;
        }
        
        return matchesFilter;
    });

    if (!articles) {
        return <div>
        </div>; 
    }

    return (
        <div className='All__articles'>
            {filteredArticles.map((article) => (
                <Link to={`/article?id=${article._id}`} className= "article__link">
                    <div key={article._id} className='Article'>
                        
                        <div className='Image'>
                            <img src ={article.href}/>
                            
                        </div>
                        <div className='Article__values'>
                            <div>
                                {article.name}
                            </div>
                            <div>
                            <div className='Description'>{article.shortdescription} </div>
                                <span>{article.price}€ </span>
                                <span>{article.rating}*</span>
                            </div>
                        </div>
                
                    </div>
                </Link>
            ))}
        </div>
        
    );
};

export default FilteredArticles;