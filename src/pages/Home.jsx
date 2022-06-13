import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getMealCategories } from "../api";
import Preloader from "../components/Preloader";
import CategoriesList from "../components/CategoriesList";
import PrimarySearch from "../components/PrimarySearch";

const defaultErr = "Произошла ошибка. Перезагрузите страницу";

export default function Home()
{
    const [categories, setCategories] = useState([]);
    const [searched, setSearched] = useState([]);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState("");
    const navigate = useNavigate();
    const { pathname, search: searchStrUrl } = useLocation();   

    const searchFn = (str, rawItems = categories) =>
    {        
        if(!str)
        {            
            navigate("/");
            return;
        } 

        setSearched(rawItems.filter(item =>
            item.strCategory.toLowerCase().includes(str.toLowerCase())));        

        if(!pathname.includes(`?search=${str}`)) navigate(`?search=${str}`);
    };

    useEffect(() =>
    {
        if(!categories.length)
        {
            getMealCategories().then(data =>
            {
                if(data)
                {
                    setCategories(data.categories);

                    if(searchStrUrl) searchFn(searchStrUrl.split("=")[1], data.categories);
                    else             setSearched(data.categories);
                }                 
                else setErr(defaultErr);

                setLoading(false);
            });
        }
        else if(searchStrUrl) searchFn(searchStrUrl.split("=")[1]);
        else                  setSearched(categories);        
            
    }, [searchStrUrl]);   

    return (
        <> 
            <PrimarySearch searchFn={searchFn} />           
            {
                searched.length > 0 && !err ?
                <CategoriesList categories={searched} /> :                
                err ? <p>{err}</p> :
                    !searched.length && !loading ? <p>Nothing found.</p> : <Preloader />
            }
                       
        </>
    );
}