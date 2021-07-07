import React,{ useRef } from 'react'
import { Grid, Header as SemanticHeader, Image,Icon,Card,Form,Button, Select } from 'semantic-ui-react'
import { Prompt  } from 'react-router-dom'
import countries from '../../utils/countries';
import './createcontacts.css';

function CreateContactComponent({ onChange, onSubmit, formInValid,loading,formIsHalfFilled,onImageChange, tempfile }) {
    
    const imagePickRef = useRef(null)

    const chooseImage = () =>{
        if(imagePickRef.current){
            imagePickRef.current.click();
        }
    }


    return (
        <>
          <div>
            
              <Prompt  when={formIsHalfFilled} message={'You have unsave changes. Sure you want to leaave?'} />
              <Grid centered>
                <Grid.Column className='form-column'>
                    <SemanticHeader>
                        <Card fluid>
                            <Card.Content>
                                <Form>
                                    <input  onChange={onImageChange} ref={imagePickRef} type="file" hidden />
                                    <div className='image-wrapper'>
                                        {tempfile && <Image className='contact-picture' src={tempfile} />}
                                        {
                                            !tempfile &&(
                                            <div onClick={chooseImage} className='contact-picture'>
                                                <span>Choose Picture</span>
                                            </div>
                                        )}

                                        <Icon name='pencil' onClick={chooseImage} />
                                    </div>
                                    

                                    

                                    <Form.Group widths={2}>
                                        <Form.Input
                                            fluid
                                            label='First name'
                                            name='firstName'
                                            onChange={onChange}
                                            placeholder='First name'

                                            
                                        />
                                        <Form.Input
                                            fluid
                                            label='Last name'
                                            name='lastName'
                                            onChange={onChange}
                                            placeholder='Last name'

                                        />
                                    </Form.Group>

                                    <Form.Group widths={2}>
                                        <Form.Input
                                            fluid
                                            name='countryCode'
                                            onChange={onChange}
                                            control={Select}
                                            options={countries}
                                            label='Country'
                                            placeholder='Country'
                                        />
                                        <Form.Input
                                            fluid
                                            name='phoneNumber'
                                            onChange={onChange}
                                            label='Phone no.'
                                            placeholder='Phone no'

                                        />
                                    </Form.Group>
                                    <Form.Checkbox name='isFavorite'
                                            onChange={(e, data)=>{
                                                onChange(e,{name:'isFavorite',value:data.checked})
                                            }}
                                            label='Add to Favorite' />
                                    <Button onClick={onSubmit} primary type='submit' disabled={formInValid || loading} loading={loading} fluid>Submit</Button>
                                </Form>
                            </Card.Content>
                        </Card>
                    </SemanticHeader>
                </Grid.Column>
              </Grid>
          </div>
        </>
        
    )
}

export default CreateContactComponent;
