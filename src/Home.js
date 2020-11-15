import React, { useState} from 'react'
import Questions from './Questions';
import styled from 'styled-components';
import Select from 'react-select';

const Styles = styled.div`
    .container {
        margin: auto;
        width: 80%;
    }
`;

function Home() {
    const topics = [
                {value: 'Recursion', label:'Recursion'},
                {value: 'Sorting', label:'Sorting'},
                {value: 'Linked Lists', label:'Linked Lists'},
                {value: 'Queues', label:'Queues'},
                {value: 'Stacks', label:'Stacks'},
                {value: 'Dynamic Programming', label:'Dynamic Programming'}
            ];
    const difficulty = [
                {value: "Easy", label: 'Easy'},
                {value: "Medium", label: 'Medium'},
                {value: "Hard", label: 'Hard'},
                {value: "", label: 'All'},
    ];

    const [selectedTopics, setSelectedTopics] = useState([]);
    const [selectedDifficulty, setSelectedDifficulty] = useState();
 
    const handleTopicsChange = (e) => {
        setSelectedTopics(Array.isArray(e) ? e.map(x => x.value) : []);
    }

    const handleDifficultyChange = e => {
        setSelectedDifficulty(e.value);
    }

    return (
            <Styles>
                <div className="container">
                <p>Browse Questions</p>
                <label>Topics</label>
                <Select 
                    options={topics} 
                    value={topics.filter(obj => selectedTopics.includes(obj.value))}
                    onChange={handleTopicsChange}
                    isMulti
                />
                <a>Difficulty</a>
                <Select
                    options={difficulty} 
                    value={difficulty.find(obj => obj.value === selectedDifficulty)}
                    onChange={handleDifficultyChange}
                />
                <br/>
                <Questions tags={selectedTopics} difficulty={selectedDifficulty}/>
                </div>
            </Styles>
    );
}

export default Home;
