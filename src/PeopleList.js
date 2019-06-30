import React from 'react';
import People from './People';

function PeopleList ({people}) {
    return (
        <div>
            {
                people.map((person, i) => {
                    return (
                        <People 
                            key = {i}
                            name={person.name}
                            height={person.height}
                            gender={person.gender}
                        />
                    );
                })
            }
        </div>
    )
}

export default PeopleList;