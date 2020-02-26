import React from "react";
import { AuthorCard } from "./AuthorCard";

export function AuthorDisplay(props){
    return(
        <div className="display">
            <h3>Authors</h3>
                {props.authors.map(b =>(
                <AuthorCard author={b} key={b.id}  />
                ))}
        </div>
    );
}