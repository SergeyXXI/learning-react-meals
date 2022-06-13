import { API_URL } from "./config";

const getMealById = async id =>
{
    try
    {
        const response = await fetch(`${API_URL}lookup.php?i=${id}`);   
        return await response.json();
    }
    catch(e)
    {
        console.error(e);
        return null;
    }    
};

const getMealCategories = async ()=>
{
    try
    {
        const response = await fetch(`${API_URL}categories.php`);
        return await response.json();
    }
    catch(e)
    {
        console.error(e);
        return null;
    }
    
};

const getFilteredCategory = async title =>
{
    try
    {
        const response = await fetch(`${API_URL}filter.php?c=${title}`);
        return await response.json();
    }
    catch(e)
    {
        console.error(e);
        return null;
    }    
};

export { getMealById, getMealCategories, getFilteredCategory };