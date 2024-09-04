import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from '../store/store';
import { filterData } from "../store/store";

export default function SearchField() {
    const dispatch: AppDispatch = useDispatch();

    function handleSearch(e: ChangeEvent<HTMLInputElement>) {
        dispatch(filterData(e.target.value));
    }
    
    return <input placeholder="Search" onChange={(e) => handleSearch(e)} className="App_search"/>
}



