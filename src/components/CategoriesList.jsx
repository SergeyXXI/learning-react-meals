import Category from "./Category";

export default function CategoriesList({ categories })
{
    return(
        <div className="categories-list">
            {
                categories.map(item => <Category key={item.idCategory} {...item} />)
            }
        </div>
    );
}