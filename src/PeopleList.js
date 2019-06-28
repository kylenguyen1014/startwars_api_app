import React from 'react';
import People from './People';

function PeopleList () {
    return (
        <div>
            <People key={'1'} name={'Luke'} height={'5\'8'} gender={'Male'} />
            <People key={'2'} name={'Tony'} height={'6\'1'} gender={'Male'} />
        </div>
    )
}

export default PeopleList;