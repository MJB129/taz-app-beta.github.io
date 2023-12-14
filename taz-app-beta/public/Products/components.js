import React from 'react';
import Header from '../../src/Components/header';
import TelegramButton from '../../src/Components/telegram-button';
class ProductTile extends React.Component {
    render() {
        return (
            <div className="product-tile">
                <Header/>
                <h2>{this.props.name}</h2>
                <img src={this.props.image} alt={this.props.name}/>
                <p>{this.props.description}</p>
                <p>{this.props.price}</p>   
                <p>{this.props.quantity}</p>
                <p>{this.props.weight}</p>   
                <p>{this.props.quantity}</p>   
                <p>{this.props.category}</p>   
                <p>{this.props.subcategory}</p>    
            </div>
        );
    }
}
export default ProductTile;