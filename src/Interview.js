import React from 'react';
import Datetime from "react-datetime"
import "react-datetime/css/react-datetime.css"
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';
import { people } from './people'
import ReactStars from "react-rating-stars-component";
import styled from 'styled-components';
import moment from 'moment';

const Styles = styled.div`
    .scheduler {
        background-color: #99CCFF;
        box-sizing: border-box;
    }

    .interview {
        box-sizing: border-box;
        border: 2px solid #C8C8C8;
        padding: 7px;
        background-color: black;
        color: white;
    }
    
    .interview-info {
        box-sizing: border-box;
        border: 2px solid #C8C8C8;
        padding: 7px;
        background-color: white;
        color: black;
    }

    .icon-padding {
        padding: 3px;
    }
`;

class Feedback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            professionalism: 0,
            communication: 0,
            correctness: 0,
            enthusiasm: 0,
            description: "",
            showReview: true
        }
    }

    submit() {
        this.setState({showReview: false});
    }

    render() {
        return (
            <div>
                {this.state.showReview && 
                <div>
                    <br/>
                    <label>How would you rate the following qualites during the interview?</label><br/><br/>
                    <span>
                    Professionalism
                    <ReactStars
                        onChange={(event) => this.setState({professionalism: event})}
                        size={24}
                    />
                    </span>
                    <label>Communication</label>
                    <ReactStars
                        onChange={(event) => this.setState({communication: event})}
                        size={24}
                    />
                    <label>Correctness</label>
                    <ReactStars
                        onChange={(event) => this.setState({correctness: event})}
                        size={24}
                    />
                    <span>
                    Enthusiasm
                    <ReactStars
                        onChange={(event) => this.setState({enthusiasm: event})}
                        size={24}
                    />
                    </span>
                    <label>Please give a short critique of the Interview:</label><br/>
                    <textarea rows="10" cols="50" className="descriptionBox" placeholder = "Enter Critique" value={this.state.description} onChange={event => this.setState({description: event.target.value})}></textarea><br/>
                    <button onClick={this.submit.bind(this)}>Submit Review</button>
                </div>                   
                } 
                {
                    !this.state.showReview && <div><label>Thank you for your feedback!</label></div> 
                }
            </div>                   
        );
    }
}


class Interview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            interviews: [],
            nextID: 0,
            person: null,
            date: null,
            location: "",
            showReviewButton: true,
        } 
    }

    handleDateChange = this.handleDateChange.bind(this);

    handleDateChange(dateTime) {
        this.setState({date: dateTime});
    }

    submit() {
        if (this.state.person === null) {
            alert("Please enter an interviewee");
            return false;
        }
        if (this.state.location === "") {
            alert("Please enter a location");
            return false;
        }
        if (this.state.date === null) {
            alert("Please enter a date");
            return false;
        }
        this.setState({
            nextID: this.state.nextID + 1,
            person: null,
            location: "",
            date: null,
            showReviewButton: true,
            interviews: [...this.state.interviews,
                        {   interviewee: this.state.person,
                            interviewLocation: this.state.location,
                            interviewDate: this.state.date,
                            interviewID: this.state.nextID + 1,
                            showReviewButton: this.state.showReviewButton,
                        }
            ]
        })
    }

    render() {
        return (
            <Styles>
                <div className="scheduler"><br/>
                    <label><b>Schedule an Interview</b></label><br/><br/>
                    <label>Interviewee: </label>
                    <Select
                        options={people}
                        onChange={(event) => this.setState({person: event.label})}
                    />
                    <div>Date &amp; Time: </div>
                    <Datetime
                        value={this.state.date}
                        onChange={this.handleDateChange}
                        timeFormat={true}
                        inputProps={{ placeholder: "Start Date" }}
                    />
                    <div>Meeting Location or Link: </div>
                    <input class="scheduleLink" type="text"  onChange={(event) => this.setState({location: event.target.value})} value={this.state.location}></input><br/>
                    <button class="submit" onClick={this.submit.bind(this)}>Schedule Interview</button>
                </div>
                <div>
                    <br/>
                    <label><b>Your Interviews: </b></label>
                    {this.state.interviews.map(
                        ({interviewee, interviewLocation, interviewDate, interviewID}) =>
                        <div>
                            <div class="interview" key={interviewID}>
                                <div class="interview-info">
                                    {interviewee}
                                    Date: {moment(interviewDate).format("ddd MMM DD YYYY hh:mm a").toString()}<br/>
                                    Location: {interviewLocation} 
                                </div>
                                <Feedback></Feedback>
                            </div>
                            <span class="icon-padding"/>
                        </div>
                    )}
                </div> 
            </Styles>
        );
    }
}

export default Interview;
