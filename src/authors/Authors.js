import React, { Component } from "react";
import "./Authors.css";
import { AuthorDisplay } from "./AuthorDisplay";

export default class Authors extends Component{
    constructor(props){
        super(props);
            this.state = {
                authors: [
                    {
                        id: 1,
                        firstName: "Shel",
                        lastName: "Silverstein",
                        age: "68"
                    },
                    {
                        id: 2,
                        firstName: "R. L.",
                        lastName: "Stine",
                        age: "76"
                    },
                    {
                        id: 3,
                        firstName: "Mike",
                        lastName: "Lupica",
                        age: "67"
                    },
                    {
                        id: 4,
                        firstName: "J. K.",
                        lastName: "Rowling",
                        age: "54"
                    }
                ]
        }
    };

    render(){
    return (
        <div className="Authors">
            <div className="lander">
                <h1>Authors</h1>
                <AuthorDisplay authors={this.state.authors}  />
            </div>
        </div>
        );
    }
}