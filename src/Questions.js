import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from "@fortawesome/free-solid-svg-icons";
import { faFrown } from "@fortawesome/free-solid-svg-icons";

const Styles = styled.div`
    .post {
        box-sizing: border-box;
        border: 2px solid #C8C8C8;
        padding: 7px;
        background-color: black;
    }

    .question {
        box-sizing: border-box;
        border: 2px solid #C8C8C8;
        background-color: white;
        clear: both;
    }

    .title {
        box-sizing: border-box;
        border: 2px solid #C8C8C8;
        background-color: white;
        margin-left: 75px;
    }

    .stats {
        color: white;
    }

    .icon-padding {
      padding:3px;
    }
    
    .image-cropper {
      width: 70px;
      height: 70px;
      position: relative;
      overflow: hidden;
      border-radius: 50%;
      float:left;
    }

    .profile-pic {
      display: inline;
      margin: 0 auto;
      height: 100%;
      width: auto;
    } 

    .fa-frown:active {
        color: red
    }
    
    .fa-smile:active {
        color: yellow
    }
    
    .fa-smile:hover {
        color: yellow
    }
`;

export default class Questions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [
            {
                "photo":"images/1.jpg",
                "title":"Reverse a Linked List",
                "question": "Given pointer to the head node of a linked list, the task is to reverse the linked list. We need to reverse the list by changing the links between nodes.",
                "liked": "white",
                "disliked": "white",
                "numLiked": 101,
                "numDisliked": 23,
                "difficulty": "Medium", 
                "tags": ["Linked Lists"],
                "key": 0
            },
            {
                "photo":"images/2.jpg",
                "title":"Nth Stair Problem",
                "question": "There are n stairs, a person standing at the bottom wants to reach the top. The person can climb either 1 stair or 2 stairs at a time. Count the number of ways, the person can reach the topGiven a non-negative integer num, repeatedly add all its digits until the result has only one digit.",
                "liked": "white",
                "disliked": "white",
                "numLiked": 57,
                "numDisliked": 8,
                "difficulty": "Easy", 
                "tags": ["Recursion", "Dynamic Programming"],
                "key": 1
            },
            {
                "photo":"images/3.jpg",
                "title":"Valid Parenthesis",
                "question": "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
                "liked": "white",
                "disliked": "white",
                "numLiked": 63,
                "numDisliked": 14,
                "difficulty": "Easy", 
                "tags": ["Stacks"],
                "key": 2
            },
            {
                "photo":"images/4.jpg",
                "title":"Shuffle String",
                "question": "Given a string 's' and an integer array 'indices' of the same length. The string 's' will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string. Return the shuffled string.",
                "liked": "white",
                "disliked": "white",
                "numLiked": 5,
                "numDisliked": 10,
                "difficulty": "Hard", 
                "tags": ["Sorting"],
                "key": 3
            },
            {
                "photo":"images/5.jpg",
                "title":"Shortest Subarray with Sum at Least K",
                "question": "Return the length of the shortest, non-empty, contiguous subarray of A with sum at least K. If there is no non-empty subarray with sum at least K, return -1.",
                "liked": "white",
                "disliked": "white",
                "numLiked": 2,
                "numDisliked": 5,
                "difficulty": "Easy", 
                "tags": ["Queues"],
                "key": 4
            },
            {
                "photo":"images/6.jpg",
                "title":"Soft Array by Increasing Frequency",
                "question": "Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order. Return the sorted array.",
                "liked": "white",
                "disliked": "white",
                "numLiked": 200,
                "numDisliked": 15,
                "difficulty": "Medium", 
                "tags": ["Sorting"],
                "key": 5
            },
            {
                "photo":"images/7.jpg",
                "title":"Best Time to Buy and Sell Stock",
                "question": "Say you have an array for which the ith element is the price of a given stock on day i. If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit. Note that you cannot sell a stock before you buy one.",
                "liked": "white",
                "disliked": "white",
                "numLiked": 23,
                "numDisliked": 51,
                "difficulty": "Hard", 
                "tags": ["Linked Lists", "Dynamic Programming"],
                "key": 6
            },
            {
                "photo":"images/8.jpg",
                "title":"Backspace String Compare",
                "question": "Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character. Note that after backspacing an empty text, the text will continue empty.",
                "liked": "white",
                "disliked": "white",
                "numLiked": 68,
                "numDisliked": 66,
                "difficulty": "Hard", 
                "tags": ["Stacks", "Recursion", "Queues"],
                "key": 7
            },
            {
                "photo":"images/9.jpg",
                "title":"Basic Calculator",
                "question": "Implement a basic calculator to evaluate a simple expression string. The expression string may contain open ( and closing parentheses ), the plus + or minus sign -, non-negative integers and empty spaces.",
                "liked": "white",
                "disliked": "white",
                "numLiked": 7,
                "numDisliked": 18,
                "difficulty": "Hard", 
                "tags": ["Dynamic Programming", "Stacks"],
                "key": 8
            },
            {
                "photo":"images/10.jpg",
                "title":"Min Stack",
                "question": "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.",
                "liked": "white",
                "disliked": "white",
                "numLiked": 22,
                "numDisliked": 51,
                "difficulty": "Medium", 
                "tags": ["Stacks", "Recursion"],
                "key": 9
            },
            ],
        }
    }
    
    setDislike(editID) {
        var editPost = this.state.posts.find( ({key}) => key === editID );
        var liked = editPost.liked;
        var numLiked = editPost.numLiked;
        var disliked = editPost.disliked;
        var numDisliked = editPost.numDisliked;
        
        if(editPost.liked==="white" && editPost.disliked==="white") { 
            disliked = "red";
            numDisliked = numDisliked + 1;
        }
        else if(editPost.liked==="yellow" && editPost.disliked==="white") { 
            disliked = "red";
            liked = "white";
            numDisliked = numDisliked + 1;
            numLiked = numLiked - 1;
        }
        else if(editPost.liked==="white" && editPost.disliked==="red") {
            disliked = "white";
            numDisliked = numDisliked - 1;
        }
        
        var newPosts = this.state.posts;
        newPosts[editID].liked = liked;
        newPosts[editID].numLiked = numLiked;
        newPosts[editID].disliked = disliked;
        newPosts[editID].numDisliked = numDisliked;
        this.setState({
            posts: newPosts
        });
    }
    
    setLike(editID) {
        var editPost = this.state.posts.find( ({key}) => key === editID );
        var liked = editPost.liked;
        var numLiked = editPost.numLiked;
        var disliked = editPost.disliked;
        var numDisliked = editPost.numDisliked;
        
        if (editPost.liked==="white" && editPost.disliked==="white") { 
            liked = "yellow";
            numLiked = numLiked + 1;
        }
        else if (editPost.liked==="white" && editPost.disliked==="red") { 
            liked = "yellow";
            disliked = "white";
            numLiked = numLiked + 1;
            numDisliked = numDisliked - 1;
        }
        else if(editPost.liked==="yellow" && editPost.disliked==="white") {
            liked = "white";
            numLiked = numLiked - 1;
        }

        var newPosts = this.state.posts;
        newPosts[editID].liked = liked;
        newPosts[editID].numLiked = numLiked;
        newPosts[editID].disliked = disliked;
        newPosts[editID].numDisliked = numDisliked;
        this.setState({
            posts: newPosts
        });
    }
   
    render() {
        var filteredPosts = this.state.posts;

        if (this.props.tags.length!==0) {
            filteredPosts = this.state.posts.filter(post => this.props.tags.every(val => post.tags.includes(val))) 
        }
        if (this.props.difficulty !== "" && this.props.difficulty !== undefined) {
            filteredPosts = filteredPosts.filter(post => post.difficulty === this.props.difficulty)
        }
        if (this.props.keyword !== undefined) {
            filteredPosts = filteredPosts.filter(post => post.title.indexOf(this.props.keyword) !== -1 || post.question.indexOf(this.props.keyword) !== -1)
        }

        return (
            <Styles>
                {filteredPosts.length===0 && 
                <div>
                    <label>Oops! No questions match your search criteria. </label>
                    <label>Try editing your search criteria</label>
                </div>
                }
                {filteredPosts.map(({photo, title, question, liked, disliked, numLiked, numDisliked, difficulty, tags, key}) => 
                    <div key={key}>
                        <div class="post" key={key}>
                            <div class="image-cropper">
                                <img src={photo} alt="profile" class="profile-pic"/>    
                            </div> 
                            <div class="title">
                                <p>{title}</p>
                            </div>
                            <div class="question">
                                <p>{question}</p>
                            </div>
                            <div class="stats">
                            <FontAwesomeIcon color={liked} onClick={this.setLike.bind(this,key)} icon={faSmile}/><span class="icon-padding"/>{numLiked}<span class="icon-padding"/>
                            <FontAwesomeIcon  color={disliked} onClick={this.setDislike.bind(this,key)} icon={faFrown}/><span class="icon-padding"/>{numDisliked}<span class="icon-padding"/>
                            Difficulty: {difficulty}<span class="icon-padding"/>
                            {tags.map((item) => <span>#{item}<span class="icon-padding"/></span>)}
                            </div>
                        </div>
                        <span class="icon-padding"/>
                    </div>
                )} 
            </Styles>
        );
    }
}