import fetchData from "./utils/fetchData"
import {v4 as uuidv4} from 'uuid'


const url = process.env.REACT_APP_SERVER_URL + '/user'



export const getClients = async(dispatch, currentUser)=>{
    const result = await fetchData({url, method:'GET', token:currentUser.token}, dispatch)
    if(result){
        result.filter()
        dispatch({type:'UPDATE_USERS', payload:result});
    }
};
