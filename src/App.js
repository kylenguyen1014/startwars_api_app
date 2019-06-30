import React, { Component } from 'react';
import PeopleList from './PeopleList';
import Scroll from './Scroll';
import './App.css'

class App extends Component {
    constructor(){
        super();
        this.state = {
            people : [],
            search : ''

        }
    }

    async componentDidMount() {
        const response = await fetch('https://swapi.co/api/people');
        const data = await response.json();
        console.log(data, 'data');
        this.setState({people: data.results});
    }

    render (){
        const {people} = this.state;
        // console.log(this.state);
        console.log(this.state.people, 'people');
        console.log(this.state, 'state');
        // console.log(people.length);
        if (!people.length){
            return <h1>Loading..</h1>
        } else {
            return(
                <div className='tc'>
                    <h1 className='f1 pb6'>Starwars</h1>
                    <Scroll>
                        <PeopleList people={people}/>
                    </Scroll>
                </div>
            );
        }
        
    }
}

export default App;