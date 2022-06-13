import { useState } from "react";

export default function PrimarySearch({ searchFn })
{
    const [value, setValue] = useState("");

    const handleKeyDown = e =>
    {    
        if(e.key === "Enter") doSearch();
    };    

    const doSearch = () => searchFn(value);

    return(
        <div className="row">
            <div className="input-field col s12">
                <input placeholder="Search in categories..." type="text"
                       onChange={e => setValue(e.target.value)} onKeyDown={handleKeyDown}
                       style={{ boxSizing: "border-box", paddingRight: "6rem" }} /> 
                <button className="btn" onClick={doSearch}
                        style={{ position: "absolute", right: 0, bottom: "8px" }}
                >Search</button>               
            </div>                       
        </div>
    );
}