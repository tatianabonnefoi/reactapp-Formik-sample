import React from 'react';
import './App.css';
import {useFormik} from 'formik';

function App() {
  const formik = useFormik ({
    initialValues: {
      email: '',
      password: '',
      message: 0,
    },
    onSubmit: values =>{
      if(values.email && values.password){
        values.message = 1;
      } 
      console.log('form:',values);
    },
    validate: values => {
      let errors = {};
      if(!values.email) {errors.email = 'Field Required';} else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {errors.email =  'Username should be an email';}
      if(!values.password) errors.password = 'Field Required'
      if (values.message===1) errors.message = alert('successful login');
      return  errors;
    }
  });
    
  return (
    <div >
      <form onSubmit = {formik.handleSubmit}  >
          <div>Email</div>
          <input id='emailField' name= "email" type="text" onChange={formik.handleChange} value={formik.values.email}/>
          {formik.errors.email ?  <div id='emailError' style={{color:'red'}}>{formik.errors.email}</div>: null }
          <div>Password</div>
          <input id='pswField' name= "password" type="text" onChange={formik.handleChange} value={formik.values.password}/>
          {formik.errors.password ?  <div id='pswError' style={{color:'red'}}>{formik.errors.password}</div>: null }
          <div id='MSG' name= "message"  onChange={formik.handleChange} value={formik.values.message}/>
          {formik.errors.message ?  <div ></div>: null }
          <button id='submitBtn' type= "submit" >  Submit </button>

      </form>
 
    </div>
  );
}

export default App;
