import React from 'react';
import { connect } from 'react-redux';
import { User } from '../../model/user';
import { IState, IUserState } from '../../reducers';
import { update } from '../../actions/user.actions';
import { UserNewCardComponent } from './user.create.profile.card.somponent';
import { async } from 'q';

interface UserProps{
  uState: IUserState;
  update: any;
}

export class CreateUserInfoComponent extends React.Component<UserProps, {}> {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="centered">
        <h1>New User Page</h1>
        <div className="centered">
        <UserNewCardComponent></UserNewCardComponent>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateUserInfoComponent);
