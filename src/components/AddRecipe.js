import React, { Component } from 'react';
import { Card, CardTitle, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Consumer } from '../context';
import uuid from 'uuid';

class AddRecipe extends Component {
    state = {

        title: '',
        ingredients: '',
        directions: '',

    }

    onSubmit = (dispatch, e) => {
        e.preventDefault();
        const { title, ingredients, directions } = this.state;
        const newRecipe = {
            id: uuid(),
            title,
            ingredients,
            directions
        }
        dispatch({ type: 'ADD_RECIPE', payload: newRecipe })

        //clear submit form
        this.setState({
            title: '',
            ingredients: '',
            directions: ''
        })
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });


    render() {
        const { title, ingredients, directions } = this.state

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className='container'>
                            <Card className='m-3'>
                                <CardTitle><h4>Add a Recipe</h4></CardTitle>
                                <Form className='mx-2' onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <FormGroup>
                                        <Label for='title'>Title</Label>
                                        <Input
                                            value={title}
                                            type='text'
                                            name='title'
                                            placeholder='Enter Recipe Name'
                                            onChange={this.onChange}
                                        ></Input>
                                    </FormGroup>
                                    {/*<FormGroup>
                                        <Label for='image'>Picture?</Label>
                                        <Input
                                            value={image}
                                            type='image'
                                            name=''
                                            placeholder='select image'
                                            onChange={this.onChange}
                                        ></Input>
                                    </FormGroup>*/}
                                    <FormGroup>
                                        <Label for='ingredients'>Ingredients</Label>
                                        <Input
                                            value={ingredients}
                                            type='text'
                                            name='ingredients'
                                            placeholder='List ingredients and amounts'
                                            onChange={this.onChange}
                                        ></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for='directions'>Directions</Label>
                                        <Input
                                            value={directions}
                                            type='textarea'
                                            name='directions'
                                            placeholder='Directions and notes'
                                            onChange={this.onChange}
                                        ></Input>
                                    </FormGroup>
                                    <Button className='mb-2 btn-light'>Submit Recipe</Button>
                                </Form>
                            </Card>
                        </div>
                    )
                }}
            </Consumer>
        )

    }
}

export default AddRecipe;