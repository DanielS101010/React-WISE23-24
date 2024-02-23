import "./shop.css"
import Filter from "../Filter/filter"
import FilteredArticles from "../GetArticles/getArticles"


const Shop = () => {


    return(
        <div className="Shop">
            <div className="Filter">
                <Filter/>
            </div>
            <div className="Products">
                <FilteredArticles />
            </div>
        </div>
    )
}

export default Shop;