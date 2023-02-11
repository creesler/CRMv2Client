import fetchData from "./utils/fetchData"




const url = process.env.REACT_APP_SERVER_URL + '/project'

export const createProject = async (project, currentUser, dispatch)=>{
    dispatch({type:'START_LOADING'})

    const result = await fetchData({url, body:project, token:currentUser?.token}, dispatch)
    if(result){
        dispatch({
            type:'UPDATE_ALERT', 
            payload:{open:true, 
                severity:'success', 
                message:'New Project Added Successfully',
            },
        });
        dispatch({type:'RESET_PROJECT'})
    }

    dispatch({type:'END_LOADING'})
}