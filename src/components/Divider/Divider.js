import React, { Component } from 'react';

const Divider = (props) => {

    return (
        <div style={{position:'absolute',marginTop:'100px'}}>
            <h4 class="ui horizontal divider header">
                <i class="info icon"></i>
                {props.header}
            </h4>
            <p style={{textAlign:'center'}}>{props.text}
            </p>
        </div>
    );
}

export default Divider;