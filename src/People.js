import React from 'react';


function People({name, height, gender}) {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2'>
            <h2 className='f2'>{name}</h2>
            <p>{height}</p>
            <p>{gender}</p>
        </div>
    )
}

export default People;