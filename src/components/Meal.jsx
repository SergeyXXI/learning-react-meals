import { Link } from "react-router-dom"

export default function Meal(props)
{
    const { 
        idMeal: id,
        strMeal: title,
        strMealThumb: imgUrl        
    } = props;    

    return(
        <div className="card card-meal">
            <div className="card-image">
                <img src={imgUrl} alt={title} />                
            </div>            
            <div className="card-content card-meal-content">
                <span className="card-title">{title}</span>                
            </div>
            <div className="card-action">
                <Link to={`/meals/${id}`} className="btn">View recipe</Link>
            </div>
      </div>
    );
}

/*
idMeal: "52959"
strMeal: "Baked salmon with fennel & tomatoes"
strMealThumb : url
*/