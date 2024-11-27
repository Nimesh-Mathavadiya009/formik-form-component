import React, {useState} from 'react'
import './App.css'
import { initialValues, registerFormControls } from './conf'
import * as Yup from "yup"
import FormikForm from './components/FormikForm'


function App() {

  const [formData, setFormData] = useState({})

  console.log(formData)

  const validationSchema = Yup.object({
         userName: Yup.string().min(6).max(10).required("This Field is Required!"),
         email: Yup.string().email("Please Enter Valid Character!").required("This Field is Required!"),
         age: Yup.number().min(18, "Age Must be 18+!").max(70).required("This Field is Required!"),
         password: Yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Input should containes alpha-Numeric and special character!").required("Enter minimum 8 character"),
         cPassword: Yup.string().oneOf([Yup.ref('password'), null], "Should be same as above password!").required("This Field is Required!"),
         number: Yup.string().matches(/^\d{10}$/, "Enter Valid Mo.Number!").required("This Field is Required!"),
         gender: Yup.string().min(1).required("This Field is Required!"),
         hobbies: Yup.array().min(1).required("This Field is Required!"),
         city: Yup.string().min(1).required("This Field is Required!"),
         feedback: Yup.string().min(10).max(500).required("This Field is Required!")
  }) 

  return (
    <div id="root" style={{height: "100vh", width: "100%"}}>
      <div id="main" style={{height:"100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
         <div style={{minWidth: "250px", minHeight: "400px"}}>
              <FormikForm formControllers={registerFormControls}
              formInitialValues={initialValues}
              formValidationSchema={validationSchema}
              setFormData={setFormData}/>
         </div>
      </div>
    </div>
  )
}

export default App
