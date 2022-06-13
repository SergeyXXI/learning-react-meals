import Meal from "./Meal";

export default function MealsList({ meals })
{    
    return(
        <div className="meals-list">
            {
                meals.map(item => <Meal key={item.idMeal} {...item} />)
            }
        </div>        
    );
}