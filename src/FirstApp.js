
import React from 'react';
import PropTypes from 'prop-types';

const FirstApp = ( {salute, subtitle } )=> {
    
    // const salute = 'Hello World'//{name: 'John', age: 36}
    const paragraph = [1,2,3]

    

    return (
    <>
        <h1>{salute}</h1>
        {/* <pre>{JSON.stringify(salute, null, 3)}</pre> */}
        <p>{subtitle} </p>
    </>
    )
}

FirstApp.propTypes = {
    salute: PropTypes.string.isRequired,
    subtitle: PropTypes.string,   
}

FirstApp.defaultProps = {
    salute: 'Hello default salute',
    subtitle: 'Property default for this component'
}


export default FirstApp