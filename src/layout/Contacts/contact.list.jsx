import React from 'react'
import { Placeholder,List, Image,Container, Message } from 'semantic-ui-react'
import ImageThumbnail from '../../components/imageThumb/image-thubnail.component'

const ContactsListUI = ({ 
    state: {
        contacts:{ loading,error,contacts,isSearchActive,foundContacts }
    }})=> {


    const currentContacts = isSearchActive ? foundContacts : contacts   
    

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

                     currentContacts.length>0?
                        currentContacts.map((contact)=>(
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
                        : 
                       ( 
                        <Message>
                            <Message.Header>You have no contacts</Message.Header>
                            <p>
                            There is no list of contacts to show. Create a new contacts to make the list enable.
                            </p>
                        </Message>
                        )
                        
                    }

                   {
                       foundContacts?.length>0 &&
                        (
                            <Message>
                            
                            <p>
                            No results found.
                            </p>
                        </Message>
                        )

                   }
            </List>
            )
        }
            </Container>
        </div>
    )
}

export default ContactsListUI
