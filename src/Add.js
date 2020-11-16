import React, { useState } from 'react';
import Select from 'react-select';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Styles = styled.div`
    
    .container {
        margin: auto;
        width: 80%;
    }

    .description {
        width: 800px;
        height: 30px;
    }
    
    .title-input {
        width: 400px;
        height: 30px;
    }
`;


function Add() {

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
            <br/>
                <div class="container">
                    <label class="title"><b>Add your question</b></label>
                    <br/>
                    <br/>
                    <label>Title: </label>
                    <br/>
                    <input class="title-input" type="text"></input>
                    <br/>
                    <label>Description:</label>
                    <br/>
                    <input class="description" type="text"></input>
                    <br/>
                    <label>Difficulty:</label>
                    <Select
                            options={difficulty} 
                            value={difficulty.find(obj => obj.value === selectedDifficulty)}
                            onChange={handleDifficultyChange}
                    />
                    <label>Topics:</label>
                    <Select 
                            options={topics} 
                            value={topics.filter(obj => selectedTopics.includes(obj.value))}
                            onChange={handleTopicsChange}
                            isMulti
                    />
                    <Link to="/submit">
                        <button>Add</button>
                    </Link>
                </div>
                
        </Styles>
    )
    
}

export default Add;