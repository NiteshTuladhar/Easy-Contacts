import React from 'react'
import { Button, Checkbox, Form,Grid, Header as SemanticHeader, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
const RegisterUI = ({ 
    userform: { form , onChange, onSubmit,loading, fieldErrors }
 }) =>{
    return (
        <div>
            <Grid centered>
                <Grid.Column style={{maxWidth:550,marginTop:20}}>
                    <SemanticHeader>Sign Up</SemanticHeader>

                    <Segment>
                        <Form>
                            <Form.Field>
                                <Form.Input
                                value={form.userName || "" }
                                onChange = {onChange} 
                                name='userName' 
                                placeholser='Username' 
                                label='Username' required 
                                error={
                                    fieldErrors.username && {
                                        content:fieldErrors.username,
                                        pointing: 'below',
                                    }
                                }
                                />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input
                                value={form.firstName || "" }
                                onChange = {onChange}
                                 name='firstName' 
                                 placeholser='First Name' 
                                 label='First Name' required 
                                error={
                                    fieldErrors.first_name && {
                                        content:fieldErrors.firstName,
                                        pointing: 'below',
                                    }
                                } 
                                />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input 
                                value={form.lastName || "" }
                                onChange = {onChange}
                                name='lastName' 
                                placeholser='Last Name' 
                                label='Last Name' required 
                                error={
                                    fieldErrors.last_name && {
                                        content:fieldErrors.lastName,
                                        pointing: 'below',
                                    }
                                }
                                />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input 
                                value={form.email || "" }
                                onChange = {onChange}
                                name='email' 
                                type='email' 
                                placeholser='Email' 
                                label='Email' required 
                                error={
                                    fieldErrors.email && {
                                        content:fieldErrors.email,
                                        pointing: 'below',
                                    }
                                }
                                />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input
                                value={form.password || "" }
                                onChange = {onChange} 
                                name='password' 
                                type='password' 
                                placeholser='Password' 
                                label='Password' required 
                                error={
                                    fieldErrors.password && {
                                        content:fieldErrors.password,
                                        pointing: 'below',
                                    }
                                }
                                />
                            </Form.Field>
                            
                            <Form.Field>
                                <Checkbox label='I agree to the Terms and Conditions' />
                            </Form.Field>
                            <Button primary fluid type='submit' onClick={onSubmit} loading={loading} disabled={loading}>Join Now</Button>
                            <p>Already have an account?<Link to='/auth/login/'> Sign In</Link></p>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>

            
        </div>
    )
}

export default RegisterUI
