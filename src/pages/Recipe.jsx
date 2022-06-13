import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMealById } from "../api";
import Preloader from "../components/Preloader";

const defaultErr = "Произошла ошибка. Перезагрузите страницу";

export default function Recipe()
{
    const [meal, setMeal] = useState({});
    const [err, setErr] = useState("");
    const { idRecipe } = useParams();
    const navigate = useNavigate();

    const {
        strMeal: title,
        strMealThumb: imgUrl,
        strCategory: category,
        strArea: area,
        strInstructions: text,
        strYoutube: youtubeUrl
    } = meal;  
    const mealKeys = Object.keys(meal);

    useEffect(() =>
    {
        getMealById(idRecipe).then(data =>
            data !== null ? setMeal(data.meals[0]) : setErr(defaultErr));
    }, [idRecipe]); 

    return(
        <>
            <button className="btn" onClick={() => navigate(-1)}>Go Back</button>
            {
                mealKeys.length && !err ?

                <div className="recipe">                    
                    <h1>{title}</h1>
                    <img src={imgUrl} className="recipe__img" alt={title} />
                    <h4>Category: {category}</h4> 
                    {area && <h5>Area: {area}</h5>}
                    <p>{text}</p>
                    <table className="centered responsive-table">
                        <thead>
                        <tr>
                            <th>Ingredient</th>
                            <th>Measure</th>                            
                        </tr>
                        </thead>
                        <tbody>
                        {
                            mealKeys.map(key =>
                            {
                                if(key.includes("Ingredient") && meal[key])
                                {
                                    const num = key.slice(13);

                                    return(
                                        <tr key={key}>
                                            <td>{meal[key]}</td>
                                            <td>{meal[`strMeasure${num}`]}</td>
                                        </tr>                                        
                                    );
                                }

                                return "";
                            })
                        }
                        </tbody>
                    </table>
                    {
                        youtubeUrl &&
                        <div className="row recipe-iframe-container">
                            <iframe src={`https://www.youtube.com/embed/${youtubeUrl.slice(-11)}`}
                                    title="YouTube video player" frameBorder="0"
                                    allowFullScreen></iframe>                       
                        </div> 
                    }                                      
                </div> :
                
                err ? <p>{err}</p> : <Preloader />
            }
        </>            
        
    );
}

/* Meal:
strMeal: "Teriyaki Chicken Casserole"
strMealThumb: "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg"
strCategory: "Chicken"
strArea: "Japanese" - не всегда
strInstructions: ...text
strYoutube: "https://www.youtube.com/watch?v=4aZr5hZXP_s" - не всегда
strIngredient1: "soy sauce"
strIngredient2: "water"
strIngredient3: "brown sugar"
strIngredient4: "ground ginger"
strIngredient5: "minced garlic"
strIngredient6: "cornstarch"
strIngredient7: "chicken breasts"
strIngredient8: "stir-fry vegetables"
strIngredient9: "brown rice"
strIngredient10: ""
strIngredient11: ""
strIngredient12: ""
strIngredient13: ""
strIngredient14: ""
strIngredient15: ""
strIngredient16: null
strIngredient17: null
strIngredient18: null
strIngredient19: null
strIngredient20: null
strMeasure1: "3/4 cup"
strMeasure2: "1/2 cup"
strMeasure3: "1/4 cup"
strMeasure4: "1/2 teaspoon"
strMeasure5: "1/2 teaspoon"
strMeasure6: "4 Tablespoons"
strMeasure7: "2"
strMeasure8: "1 (12 oz.)"
strMeasure9: "3 cups"
strMeasure10: ""
strMeasure11: ""
strMeasure12: ""
strMeasure13: ""
strMeasure14: ""
strMeasure15: ""
strMeasure16: null
strMeasure17: null
strMeasure18: null
strMeasure19: null
strMeasure20: null
dateModified: null
idMeal: "52772"
strCreativeCommonsConfirmed: null
strDrinkAlternate: null
strImageSource: null
strSource: null
strTags: "Meat,Casserole"
*/