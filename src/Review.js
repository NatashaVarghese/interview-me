import React, { Component } from 'react'

export default class Review extends Component {
    render() {
        return (
            <div>
    {this.props.location.state.date.interviewLocation}
                <button>Submit</button>
                <textarea rows="1" cols="50" className="descriptionBox" placeholder = "Enter Description"  vonChange={event => this.setState({description: event.target.value})}></textarea>
            </div>
        )
    }
}
