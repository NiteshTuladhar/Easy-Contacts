import { ContactTypes } from '../../../constants/actionTypes/contact.types';
import { FIREBASE_IMAGE_REF } from '../../../constants/firebase.types';
import axiosInstance from "../../../helpers/axiosInstance"
import { storage } from '../../../helpers/firebase';

const CreateContact = (formdata) =>(dispatch)=> {

    
    const {firstName:first_name,lastName:last_name,phoneNumber:phone_number,countryCode:country_code,contactPicture:contact_picture} = formdata
    console.log('ACTION CALLED with image ')

    const saveToBackend = (url=null)=>{
        console.log('SAVE TO THE BACKEND')
        axiosInstance().post('/contacts/',{
            first_name,
            last_name,
            phone_number,
            country_code,
            contact_picture:url,
        }).then((res)=>{
            console.log('res',res)
            
            dispatch({
                type:ContactTypes.ADD_CONTACT_SUCCESS,
                payload: res.data
            });
        }).catch((err)=>{
            console.log('err',err);
            dispatch({
                type: ContactTypes.ADD_CONTACT_ERROR,
                payload: err.response? err.response.data: ContactTypes.CONNECTION_ERROR
            });
        }) 
     }

    dispatch({
        type:ContactTypes.ADD_CONTACT_LOADING
    });

    console.log('OUTSIDE IF CONTACT PICTURE', contact_picture)
    if (contact_picture) {
      console.log('IF CONTACT PICTURE', contact_picture)
    storage
      .ref(`${FIREBASE_IMAGE_REF}/${contact_picture.name}`)
      .put(contact_picture)
      .on(
        "state_changed",
        (snapshot) => {},
        async (error) => {},
        async () => {
          const url = await storage
            .ref(FIREBASE_IMAGE_REF)
            .child(contact_picture.name)
            .getDownloadURL();

            console.log('ASYN RUNNING :',url)
          saveToBackend(url);
        }
        
      );
      console.log('IMGAE SAVED TO FIREBASE')
  } else {
    saveToBackend();
  }

    
}


export default CreateContact;
