import React, { Component } from 'react';


const TextCard = (props) => {


    return (
        <div class="ui cards">
            <div class="card">
                <div class="content">
                    <div class="header">{props.header}</div>
                    <div class="description">
                         {props.description}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default TextCard;