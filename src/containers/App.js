import React , { useState, useEffect} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/Searchbox';
import Scroll from '../components/Scroll';


function App () {

    const [robots, setRobot] = useState([]);
    const [searchfield, setSearchfield] = useState('');
    

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {setRobot(users)});
    }, []);

   const onSearchChange = (event) =>{
        setSearchfield(event.target.value);     
    }

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    if(robots.length === 0){
        return <h1>Loading</h1>
    } else {
        return (
            <div className='tc'>
                <h1>Robo friends</h1>
                <SearchBox searchChange = {onSearchChange}/>
                <Scroll> 
                    <CardList robots={filteredRobots}/>
                </Scroll>
                
            </div>
        );
    }
}

export default App