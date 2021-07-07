import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Checkbox, Form,Grid, Header as SemanticHeader, Message, Segment } from 'semantic-ui-react'

const LoginUI = ({ 
    userform: { form , onChange, onSubmit,loading, error }
 }) =>{
    return (
        <div>
            <Grid centered>
                <Grid.Column style={{maxWidth:550,marginTop:20}}>
                    <SemanticHeader>Login to your account</SemanticHeader>

                    <Segment>
                        <Form>
                            {
                                error &&
                                <Message content={error?.detail} negative />
                            }
                               
                            <Form.Field>
                                <Form.Input
                                value={form.userName || "" }
                                onChange = {onChange} 
                                name='userName' 
                                placeholser='Username' 
                                label='Username' required 
                               
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
                                
                                />
                            </Form.Field>
                            
                            <Button fluid type='submit' onClick={onSubmit} loading={loading} disabled={loading} primary>Login</Button>
                            <p>Don't have an Account?<Link to='/auth/register/'> Sign Up</Link></p>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>

            
        </div>
    )
}

export default LoginUI
