import { ChangeEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from '../store/store';
import { filterData } from "../store/store";

export default function SearchField() {
    const dispatch: AppDispatch = useDispatch();
    const { data, loading} = useSelector((state: RootState) => state.users);

    function handleSearch(e: ChangeEvent<HTMLInputElement>) {
        dispatch(filterData(e.target.value));
    }
    
    return <input placeholder="Search" onChange={(e) => handleSearch(e)} className="App_search"/>
}



