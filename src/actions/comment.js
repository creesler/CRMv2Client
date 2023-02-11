import fetchData from './utils/fetchData';

const url = process.env.REACT_APP_SERVER_URL + '/user';

export const getComments = async (dispatch) => {
    dispatch({ type: 'START_LOADING' });
    const result = await fetchData({ url, method: 'GET' }, dispatch);
    if (result) {
        result.sort((a, b) => a.timestamp - b.timestamp);
        dispatch({ type: 'ADD_COMMENT', payload: result });
    }
    dispatch({ type: 'END_LOADING' });
    };
    
    
    
    
    