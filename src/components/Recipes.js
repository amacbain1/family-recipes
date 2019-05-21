import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import { Consumer } from '../context'

class Recipes extends Component {

    state =
        {
            collapse: false,
        }


    render() {

        return (
            <Consumer>
                {value => {
                    const { recipes } = value;
                    const { collapse } = this.state;
                    return (
                        <div className='container'>
                            {recipes.map(recipe => (
                                <Card className='m-3'
                                    key={recipe.id}>
                                    <CardTitle>
                                        <h2>{recipe.title}</h2>
                                    </CardTitle>
                                    <CardImg
                                        width='100%'
                                        src={recipe.imgSource}
                                        alt='placeholder photo' />
                                    <CardBody>
                                        <Button
                                            color='success'
                                            onClick={() => this.setState({ collapse: !this.state.collapse })}
                                            className='m-4'
                                            style={{ cursor: 'pointer' }}
                                        >See Ingredient List <i className='fas fa-sort-down m-2' />
                                        </Button>
                                        <div >
                                            {collapse ? (<ul>
                                                {recipe.ingredients.map(ingredient =>
                                                    <li>{ingredient}</li>
                                                )}
                                            </ul>) : null}
                                        </div>
                                        <CardText>
                                            {recipe.directions}
                                        </CardText>
                                    </CardBody>

                                </Card>
                            ))}

                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default Recipes;