import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import { getFact } from '../actions/actions';

const Facts = ({ fact, isFetching, error, getFact }) => {
    useEffect(() => {
        getFact();
    }, []);

    if (error) {
        return <h2> Houston, we have a problem: {error}</h2>;
    }

    if (isFetching) {
        return <h2>Fetching a useless fact, one moment.</h2>;
    }

    const handleClick = () => {
        getFact();
    }

    return (
        <>
        <h2>Useless Fact: {fact}</h2>
        <button onClick={handleClick}>Learn something useless</button>
        </>
    )
};

const mapStateToProps = state => {
    return {
        fact: state.fact,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, {getFact}(Facts));