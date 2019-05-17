import React from 'react';
import { UserBid } from '../../model/UserBid';

interface IUserBidListCardProps {
  userBid: UserBid;
}

export class UserBidListCardComponent extends React.PureComponent<IUserBidListCardProps> {

  render() {
    const userBid = this.props.userBid;
    const itemDate = new Date(userBid.saleItem.endDate);
    return (
      <div className="card col-md-4 col-sm-6 col-xs-12">
        <img src={userBid.saleItem.itemImg.url}
          className="card-img-top"
          alt="..." />
        <div className="card-body">
          <h5 className="card-title">{userBid.saleItem.title}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Current Bid Price: {userBid.saleItem.currentBid.currentBidPrice}</li>
          <li className="list-group-item">End Date: {itemDate.toDateString()}</li>
        </ul>
      </div>
    )
  }
}