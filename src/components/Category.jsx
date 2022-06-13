import { Link } from "react-router-dom"

export default function Category(props)
{
    const { 
       // idCategory: id,
        strCategory: title,
        strCategoryDescription: descr,
        strCategoryThumb: imgUrl
    } = props;    

    return(
        <div className="card card-category">
            <div className="card-image">
                <img src={imgUrl} alt={title} />                
            </div>            
            <div className="card-content card-category-content">
                <span className="card-title card-category__title">{title}</span>
                <p>{`${descr.slice(0, 100)}...`}</p>
            </div>
            <div className="card-action">
                <Link to={`categories/${title}`} className="btn">View category</Link>
            </div>
      </div>
    );
}

/*
Categories:
    idCategory: "1"
    strCategory: "Beef"
    strCategoryDescription: "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]"
    strCategoryThumb:
*/