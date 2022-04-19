import React from "react";
import Modal from "../Modal/Modal";
import UserCreateAccountForm from "./UserCreateAccountForm";
import history from "../../history";


class UserCreateAccount extends React.Component {


    renderContent() {

        return (
            <UserCreateAccountForm />
        );
    }

    render() {
        return (
            <Modal
                title="Create Account"
                content={this.renderContent()}
                onDismiss={() => history.pushState('/')}
            />
        );
    }



}

export default UserCreateAccount;