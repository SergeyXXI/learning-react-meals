import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFilteredCategory } from "../api";
import Preloader from "../components/Preloader";
import MealsList from "../components/MealsList";

const defaultErr = "Произошла ошибка. Перезагрузите страницу";

export default function CategoryPage()
{
    const [meals, setMeals] = useState([]);
    const [err, setErr] = useState("");
    const { categoryTitle } = useParams(); 
    
    const navigate = useNavigate();

    useEffect(() =>
    {
        getFilteredCategory(categoryTitle).then(data =>
            data !== null ? setMeals(data.meals) : setErr(defaultErr));
    }, [categoryTitle]); 

    return(
        <>
            <button className="btn" onClick={() => navigate(-1)}>Go Back</button>
            {
                meals.length > 0 && !err ?              
                <MealsList meals={meals} /> :
                err ? <p>{err}</p> : <Preloader />
            }
        </>
    );
}