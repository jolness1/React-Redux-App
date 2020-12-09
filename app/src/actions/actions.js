import axios from 'axios';

export const FETCHING_DATA_START = 'FETCHING_DATA_START';
export const FETCHING_DATA_SUCCESS = 'FETCHING_DATA_SUCCESS';
export const FETCHING_DATA_FAIL = 'FETCHING_DATA_FAIL';


export const getFact = () => {
    return (dispatch => {
        dispatch({type:FETCHING_DATA_START});

            axios
                .get("https://uselessfacts.jsph.pl/random.json?language=en")
                .then(res => {
                    // console.log(res.data.text);
                    dispatch({type:FETCHING_DATA_SUCCESS, payload:res.data.text});
                })          
                .catch(err => {
                    dispatch({type:FETCHING_DATA_FAIL, payload:err.response.message})
                });
    });
}

const setFetchStart = (name) => {
    return({type:FETCHING_DATA_SUCCESS});
}

const setFetchSuccess = (name) => {
    return({type:FETCHING_DATA_SUCCESS});
}

const setFetchFail = (name) => {
    return({type:FETCHING_DATA_FAIL});
}