import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { newSaleItem } from '../../actions/sales.actions';
import { SaleItem } from '../../model/saleItem';
import { IState } from '../../reducers';
import { Button } from "reactstrap";

interface ISaleItemSmallCardProps extends RouteComponentProps<{}> {
    saleItem: SaleItem;
    newSaleItem: (newSaleItem: SaleItem, history: any) => void
}

export class SaleItemSmallCardComponent extends React.PureComponent<ISaleItemSmallCardProps> {

    goToSalePage = () => {
        this.props.newSaleItem(this.props.saleItem, this.props.history);
    }

    render() {
        const saleItem = this.props.saleItem;
        const currentBidPrice = saleItem.currentBid? saleItem.currentBid.currentBidPrice : NaN;
        const itemDate = new Date(this.props.saleItem.endDate);
        return (
            <div className="card col-md-4 col-md-6 col-xs-12 ItemCard ">
                <img src={saleItem.itemImg.url}
                    className="card-img-top SaleItemPicture"
                    alt="..." onClick={this.goToSalePage} />
                <div className="card-body">
                    <h5 className="card-title">{saleItem.title}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Current Bid: ${currentBidPrice}</li>
                    <li className="list-group-item">End Date: {itemDate.toDateString()}</li>
                    <li className="list-group-item">
                        <Button className="btn btn-success" onClick={this.goToSalePage}>Go To</Button>
                    </li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state: IState) => {
    return {
    }
}

const mapDispatchToProps = {
    newSaleItem: newSaleItem
}

export default connect(mapStateToProps, mapDispatchToProps)(SaleItemSmallCardComponent);
