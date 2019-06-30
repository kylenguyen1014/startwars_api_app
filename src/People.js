import React from 'react';


function People({name, height, gender}) {
    return (
        <div className='tc bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-1'>
            <h2 className='f2'>{name}</h2>
            <p>Height: {height}</p>
            <p>Gender: {gender}</p>
        </div>
    )
}

export default People;