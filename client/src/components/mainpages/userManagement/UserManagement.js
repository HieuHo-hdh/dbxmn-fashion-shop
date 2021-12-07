import React, {useContext, useEffect} from 'react'
import {GlobalState} from '../../../GlobalState'
import {Link} from 'react-router-dom'
import axios from 'axios'

function OrderHistory() {
    const state = useContext(GlobalState)
    const [history, setHistory] = state.userAPI.history
    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token
    

    useEffect(() => {
        if(token){
            const getAllUsers = async() =>{
                if(isAdmin){
                    const res = await axios.get('/user/getAllUsers', {
                        headers: {Authorization: token}
                    })
                    setHistory(res.data.products)
                }

                // const getAllUsers = async () => {
                //     const res = await axios.get('/user/getAllUsers')
                // }
                // getAllUsers()
            }
            getAllUsers()
        }
    },[token, isAdmin, setHistory])

    return (
        <div className="history-page">
            <h2>Users Management</h2>

            <h4>Total of users: {history.length}</h4>

            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Created Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        history.map(items => (
                            <tr key={items._id}>
                                <td>{history.indexOf(items) + 1}</td>
                                <td>{items.name}</td>
                                <td>{items.email}</td>
                                <td>{new Date(items.createdAt).toLocaleDateString()}</td>
                                {/* <td><Link to={`/history/${items._id}`}>View</Link></td> */}
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default OrderHistory
