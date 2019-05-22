import React, { Component } from 'react';
import { Card, CardTitle, Form, FormGroup, Label, Input, Button } from 'reactstrap';

class AddRecipe extends Component {
    state = {
        title: '',
        ingredients: '',
        directions: '',

    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });


    render() {
        const { title, ingredients, directions } = this.state
        return (
            <div className='container'>
                <Card className='m-3'>
                    <CardTitle><h2>Add a Recipe</h2></CardTitle>
                    <Form className='mx-2'>
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
    }
}

export default AddRecipe;