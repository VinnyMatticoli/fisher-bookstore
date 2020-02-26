import React, { Component } from "react";
import "./Books.css";
import { BookDisplay } from "./BookDisplay";

export default class Books extends Component{
    constructor(props) {
        super(props);
            this.state = {
                books: [
                    {
                        id: 1,
                        title: "Domain Driven Design",
                        author: "Eric Evans",
                        isbn: "978-0321125217"
                    },
                    {
                        id: 2,
                        title: "Accelerate",
                        author: "Nicole Forsgren",
                        isbn: "978-1942788331"
                    },
                    {
                        id: 3,
                        title: "Holes",
                        author: "Louis Sachar",
                        isbn: "978-0788742699"
                    },
                    {
                        id: 4,
                        title: "Harry Potter and the Sorcerer's Stone",
                        author: "J.K. Rowling",
                        isbn: "978-8700631625"
                    },
                    {
                        id: 5,
                        title: "Harry Potter and the Chamber of Secrets",
                        author: "J.K. Rowling",
                        isbn: "978-0605928183" 
                    },
                    {
                        id: 6,
                        title: "Harry Potter and the Goblet of Fire",
                        author: "J.K. Rowling",
                        isbn: "978-1781101544" 
                    },
                    {
                        id: 7,
                        title: "Harry Potter and the Half Blood-Prince",
                        author: "J.K. Rowling",
                        isbn: "978-8884516374" 
                    },
                    {
                        id: 8,
                        title: "Harry Potter and the Philosopher's Stone",
                        author: "J.K. Rowling",
                        isbn: "978-8700631625" 
                    }
                ]
            }
    };
    render(){
    return ( 
        <div className="Books">
            <div className="lander">
                <h1>Books</h1>
                <BookDisplay books={this.state.books}  />
            </div>
        </div>
        );
    }
}
