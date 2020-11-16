import React, { useState} from 'react'
import Questions from './Questions';
import styled from 'styled-components';
import Select from 'react-select';
import { Link } from 'react-router-dom';

const Styles = styled.div`
    .container {
        margin: auto;
        width: 80%;
    }

    input {
        width: 600px;
        height: 30px;
    }

    .add {
        float: right;
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
    const [selectedKeyword, setSelectedKeyword] = useState();
 
    const handleTopicsChange = (e) => {
        setSelectedTopics(Array.isArray(e) ? e.map(x => x.value) : []);
    }

    const handleDifficultyChange = e => {
        setSelectedDifficulty(e.value);
    }

    const handleKeywordChange = e => {
        setSelectedKeyword(e.target.value.substr(0,20));
    }

    return (
            <Styles>
                <div className="container">
                <span>
                <br/>
                <label><b>Browse Questions</b></label>
                <Link to="./add">
                    <button class="add">
                        Add a Question
                    </button>
                </Link>
                <br/>
                </span>
                <br/>
                <label>Search by keyword:</label>
                <br/>
                <input 
                    type="text"
                    value={selectedKeyword}
                    onChange={handleKeywordChange}
                    placeholder="Browse by keyword"
                />
                <br/>
                <label>Topics:</label>
                <Select 
                    options={topics} 
                    value={topics.filter(obj => selectedTopics.includes(obj.value))}
                    onChange={handleTopicsChange}
                    isMulti
                />
                <a>Difficulty:</a>
                <Select
                    options={difficulty} 
                    value={difficulty.find(obj => obj.value === selectedDifficulty)}
                    onChange={handleDifficultyChange}
                />
                <br/>
                <Questions tags={selectedTopics} difficulty={selectedDifficulty} keyword={selectedKeyword}/>
                </div>
            </Styles>
    );
}

export default Home;
