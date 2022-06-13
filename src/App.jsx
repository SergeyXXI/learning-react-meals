import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CategoryPage from "./pages/CategoryPage";
import Recipe from "./pages/Recipe";
import NotFoundPage from "./pages/NotFoundPage";
// import { getMealById, getMealCategories, getFilteredCategory } from "./api";

export default function App()
{
    return (
        <>
            <Router basename="learning-react-meals/">
                <Header />
                <main className="container content">                    
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="categories/:categoryTitle" element={<CategoryPage />} />
                        <Route path="/meals/:idRecipe" element={<Recipe />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>                    
                </main>
                <Footer />
            </Router>
        </>
    );
}

// console.log("by id:", getMealById(52772).then(console.log));
//  console.log("all categories: ", getMealCategories().then(console.log));
//  console.log("category", getFilteredCategory("Seafood").then(console.log));