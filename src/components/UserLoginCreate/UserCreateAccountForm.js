import React, { useState } from 'react';

import Dropdown from '../Dropdown/Dropdown';

const UserCreateAccountForm = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRetype, setPasswordRetype] = useState('');
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [type, setType] = useState(options[0]);


    const options = [
        {
            label: 'student',
            value: 'student',
        },
        {
            label: 'teacher',
            value: 'teacher',
        },
    ];

    return (
        <div>
            <div class="ui label">
                Email
                <div class="ui input">
                    <input type="text" placeholder="Email" onChange={(evt) => setEmail(evt.target.value)} />
                </div>
            </div>
            <div class="ui label">
                Username
                <div class="ui input">
                    <input type="text" placeholder="Username" onChange={(evt) => setUsername(evt.target.value)} />
                </div>
            </div>
            <div class="ui label">
                Password
                <div class="ui input">
                    <input type="text" placeholder="Password" onChange={(evt) => setPassword(evt.target.value)} />
                </div>
            </div>
            <div class="ui label">
                Retype password
                <div class="ui input">
                    <input type="text" placeholder="Password" onChange={(evt) => setPasswordRetype(evt.target.value)} />
                </div>
            </div>
            <div class="ui label">
                Full name
                <div class="ui input">
                    <input type="text" placeholder="Full name" onChange={(evt) => setFullName(evt.target.value)} />
                </div>
            </div>
            <Dropdown label="Join as:"
                selected={type}
                onSelectedChange={setType}
                options={options}
            />

        </div>
    );
}

export default UserCreateAccountForm;