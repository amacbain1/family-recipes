import React, { Component } from 'react';


const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_RECIPE':
            return {
                ...state,
                recipes: [action.payload,
                ...state.recipes]
            };
        default:
            return state;
    }
}

//Ingredients array currently crashes app=>work on this later, leave as string for now*/ }

export class Provider extends Component {

    state = {
        recipes: [
            {
                id: 1,
                title: 'Frozen Bananas',
                ingredients: `'martinis', 'cornballs', 'frozen bananas'`,
                directions: 'Oh…yeah…the guy in the $4,000 suit is holding the elevator for a guy who doesnt make that in three months. Come on! Busters in what we like to call a light to no coma. In laymans terms, it might be considered a very heavy nap. Go ahead, touch the Cornballer. Did you know that more frozen bananas are sold right here on this boardwalk than anywhere on the OC? ♪♪ Its The Final Countdown ♪♪',
                imgSource: './appetizer.jpg'
            },
            {
                id: 2,
                title: 'Delicious Food',
                ingredients: `'this and that', 'the other', 'the kitchen sink'`,
                directions: 'I love cheese, especially cheeseburger lancashire. Cauliflower cheese everyone loves cheese on toast roquefort red leicester bavarian bergkase blue castello mascarpone. Blue castello cheese slices cauliflower cheese chalk and cheese gouda cheese and biscuits red leicester roquefort. Feta ricotta manchego cheese and biscuits hard cheese halloumi ricotta ricotta. St. agur blue cheese cheese and biscuits hard cheese camembert de normandie.',
                imgSource: './appetizer.jpg'
            },
            {
                id: 3,
                title: 'Something Sweet',
                ingredients: `'a pinch of this', 'a dash of that', 'pepper'`,
                directions: 'Macaroon liquorice powder cupcake fruitcake tiramisu lollipop dragée. Croissant gingerbread powder. Topping bear claw sweet pie oat cake jelly-o gingerbread dessert',
                imgSource: './appetizer.jpg'
            }

        ],
        dispatch: action => this.setState(state =>
            reducer(state, action))
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;
