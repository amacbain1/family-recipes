import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class AddRecipe extends Component {
    state = {
        title: '',
        ingredients: '',
        directions: ''
    }


    render() {
        return (
            <Form className='container'>
                <h2>Add a Recipe</h2>
                <FormGroup>
                    <Label>Title</Label>
                    <Input placeholder='Enter Recipe Name'></Input>
                </FormGroup>
                <FormGroup>
                    <Label>Ingredients</Label>
                    <Input placeholder='List ingredients and amounts'></Input>
                </FormGroup>
                <FormGroup>
                    <Label></Label>
                    <Input></Input>
                </FormGroup>
                <FormGroup>
                    <Label>Directions</Label>
                    <Input placeholder='Directions and notes'></Input>
                    <FormText></FormText>
                </FormGroup>
            </Form>
        )
    }
}

export default AddRecipe;