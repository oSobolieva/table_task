import { ChangeEvent } from "react";


export default function SearchField() {

    function handleSearch(e:ChangeEvent) {
         //alert function for filter array in store and give e.target.input.value
    }
    
    return <input placeholder="Search" onChange={(e) => handleSearch(e)} className="App_search"/>
}



