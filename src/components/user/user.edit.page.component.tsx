import React from 'react';
import { connect } from 'react-redux';
import { User } from '../../model/user';
import { IState, IUserState } from '../../reducers';
import { UserEditCardComponent } from './user.editable.profile.card.somponent';
import { update } from '../../actions/user.actions';

interface UserProps {
    uState: IUserState;
    update: (newUser: User) => void;
}
export class EditUserInfoComponent extends React.Component<UserProps, {}> {
    render() {
        return (
            <div>
                <h1>Edit User Info Page</h1>
                    {this.props.uState.currentUser != undefined &&
                        <UserEditCardComponent TheUser={this.props.uState.currentUser} update={this.props.update}></UserEditCardComponent>}
            </div>
        );
    }
}

const mapStateToProps = (state: IState) => {
    return {
        currentUser: state.auth.currentUser,
        uState: state.auth
    }
}

const mapDispatchToProps = {
    update: update
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUserInfoComponent);
