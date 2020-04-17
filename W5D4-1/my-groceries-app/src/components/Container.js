import React from 'react';
import ShoppingCart from './ShoppingCart.js';
import GroceryList from './GroceryList.js';

class Container extends React.Component{
    constructor(){
        super();
        this.state = {
            groceryItems: [
                {id: 1, title: 'honing'},
                {id: 2, title: 'brood'},
                {id: 3, title: 'bier'},
                {id: 4, title: 'zalm'}
            ],
            shoppingListItems: [
                {id: 1, title: 'honing', amount: 1}
            ]
        }
    }

    emptyCart = () => {
        this.setState({shoppingListItems: []})
    }

    handleClickGroceryItem = (event) => {
        const text = event.target.innerHTML.trim();
        const match = this.state.shoppingListItems.filter(item => {
            return item.title === text
        })
        

        if(match.length > 0){
            this.setState(prevState => ({
                shoppingListItems: prevState.shoppingListItems.map( item => {
                        return item.title === text ? {...item, amount: item.amount + 1} : item
                    }
                )
            }))
        } else {
            this.setState(prevState => {
                return {
                    shoppingListItems: [
                        ...prevState.shoppingListItems,
                        {id: prevState.shoppingListItems.length + 1, title: text, amount: 1}
                    ]
                }
            })
        }
    }

    handleClickEmptyCart = (event) => {
        console.log(event);
        this.emptyCart();
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        const text = event.target[0].value;
        this.setState(prevState => {
            return {
                groceryItems: [
                    ...prevState.groceryItems,
                    {id: prevState.groceryItems.length + 1, title: text}
                ]
            }
        })
    }

    render() {
        return (
            <div>
                <section className='grocery-list-container'>
                    <h1>Boodschappenlijst</h1>
                    <GroceryList groceryItems={this.state.groceryItems} clickHandler={this.handleClickGroceryItem} onFormSubmit={this.onFormSubmit}/>
                </section>
                <section className='cart-list-container'>
                    <h1>Winkelwagen</h1>
                    <ShoppingCart shoppingListItems={this.state.shoppingListItems} clickHandler={this.handleClickEmptyCart}/>
                </section>
            </div>
        )
    }
}

export default Container;