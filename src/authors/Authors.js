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
                        age: "68",
                        image: "https://upload.wikimedia.org/wikipedia/en/8/8f/Ssilverstein.jpg"
                    },
                    {
                        id: 2,
                        firstName: "R. L.",
                        lastName: "Stine",
                        age: "76",
                        image: "https://m.media-amazon.com/images/M/MV5BNGEzZWI4YTMtYWIwNC00NDJmLWI0ZWEtOWUzODljNGE3ZDUwXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SY1000_CR0,0,980,1000_AL_.jpg"
                    },
                    {
                        id: 3,
                        firstName: "Mike",
                        lastName: "Lupica",
                        age: "67",
                        image: "http://www.mikelupicabooks.com/images/author_lupica.jpg"
                    },
                    {
                        id: 4,
                        firstName: "J. K.",
                        lastName: "Rowling",
                        age: "54",
                        image: "https://www.dailysignal.com/wp-content/uploads/JKRowling-1250x650.jpg"
                    },
                    {
                        id: 5,
                        firstName: "Brian",
                        lastName: "Selznick",
                        age: "53",
                        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/D03_9553_Brian_Selznick.jpg/1920px-D03_9553_Brian_Selznick.jpg"
                    },
                    {
                        id: 6,
                        firstName: "Stephen",
                        lastName: "King",
                        age: "72",
                        image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Stephen_King%2C_Comicon.jpg"
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