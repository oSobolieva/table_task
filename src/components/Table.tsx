import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from '../store/store';
import { useEffect } from "react";
import { fetchUsers } from "../store/store";



export default function Table() {
    const dispatch: AppDispatch = useDispatch();
    const { data, loading} = useSelector((state: RootState) => state.users);
    
    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if (loading) {
        return <span className = "loader"></span> ;
    }

    return (<table className="App_table">
        <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Phone</th>
        </tr>
        </thead>
        <tbody>
            {data.map((item) => (
                <tr key = {item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                </tr>
            ))}
      </tbody>
    </table>);
}