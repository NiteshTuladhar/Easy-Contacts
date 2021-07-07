import React from 'react'
import { Placeholder,List, Image,Container, Message } from 'semantic-ui-react'
import ImageThumbnail from '../../components/imageThumb/image-thubnail.component'

const ContactsListUI = ({ 
    state: {
        contacts:{ loading,error,contacts }
    }})=> {

    return (
        <div>
            <Container>
            {
                loading? 
                (
                <>
                    
                        <Placeholder>
                        <Placeholder.Header image>
                        <Placeholder.Line />
                        <Placeholder.Line />
                        </Placeholder.Header>
                        <Placeholder.Paragraph>
                        <Placeholder.Line />
                        <Placeholder.Line />
                        <Placeholder.Line />
                        <Placeholder.Line />
                        </Placeholder.Paragraph>
                    </Placeholder>
                    
                    
                </>
            )
            :(

            <List>
                    {
                     contacts.length>0 && 
                        contacts.map((contact)=>(
                            <List.Item key={contact.id}>
                                <List.Content floated='right'>
                                    <span>{contact.phone_number}</span> 
                                </List.Content>

                                <List.Content style={{display:'flex',alignItems:'center'}}>
                                    <ImageThumbnail
                                    circular 
                                    firstName={contact.first_name}
                                    lastName={contact.last_name}
                                    src={contact.contact_picture} 
                                    style={{width:45, height:45}}
                                   
                                    
                                    />
                                    

                                    <span>{contact.first_name}{contact.last_name}</span>
                                </List.Content>

                                

                            </List.Item>
                        ))

                        
                    }

                    {
                        contacts.length<=0 && 

                        <Message>
                            <Message.Header>You have no contacts</Message.Header>
                            <p>
                            There is no list of contacts to show. Create a new contacts to make the list enable.
                            </p>
                        </Message>
                    }
            </List>
            )
        }
            </Container>
        </div>
    )
}

export default ContactsListUI
