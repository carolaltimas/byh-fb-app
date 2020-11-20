import React, { useState, useContext } from 'react';
import RequiresLogin from '../../HOC/requires-login';
import CheckUserLevel from '../../HOC/check-user-level';
import {ByhReqContext} from '../../contexts/byh-req-context';
import Button from '@material-ui/core/Button';
import FormTable from '../sub-components/form-table';

function ProtectedPage(props){
    const [formData,setFormData] = useState(null);
    const {getForms} = useContext(ByhReqContext); 
    const placeholderStyles = {
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    };

    const getFormData = async () =>{
        try{
            let response = await getForms();
            setFormData(response.message);
        }
        catch(e){
            setFormData(null);
        }
    };

    const formElement = formData ? (<p>{formData}</p>) : null;
    const formTable = formData ? (<FormTable forms={[formData.document]}/>) : null;
    return(
        <div style={placeholderStyles}>
            <p>protected page</p>
            <div>
                <Button variant="contained" color="primary" onClick={(e) => getFormData()}>Get Protected Forms</Button>
            </div>
            {formElement}
            <div>
                {formTable}
            </div>
        </div>
    )
}

export default RequiresLogin()(CheckUserLevel(1)(ProtectedPage));
