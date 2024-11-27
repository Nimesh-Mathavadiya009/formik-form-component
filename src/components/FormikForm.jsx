import { Formik, Field, ErrorMessage } from 'formik'
import React, { useState } from 'react'
import { Form } from 'formik'

function FormikForm({formControllers, formInitialValues, formValidationSchema, setFormData}) {


    const types = {
        SELECT: "select",
        INPUT: "input",
        RADIO: "radio",
        CHECKBOX: "checkbox",
        TEXTAREA: "textarea"
    }

    const getControllerItem = (getControllerItem) => {
         let element = undefined

         switch(getControllerItem.componentType){
            case types.INPUT: 
                       element = (
                           <div style={{display: "flex", alignItems: "center", gap: "2px", padding: "4px", border: "2px solid black", borderRadius: "5px"}}>
                                <label htmlFor={getControllerItem.name}>{getControllerItem.label}</label>
                                
                                <Field name={getControllerItem.name} 
                                id={getControllerItem.name} 
                                type={getControllerItem.type}
                                placeholder={getControllerItem.placeholder} />
                                
                                <div style={{color: "red"}}>
                                            <ErrorMessage name={getControllerItem.name}/>
                                </div>
                           </div> 
                       )
                       break;
            case types.CHECKBOX: 
                        element = (
                            <div style={{display: "flex", alignItems: "center", gap: "2px", padding: "4px", border: "2px solid black", borderRadius: "5px"}}>
                                <label htmlFor={getControllerItem.name}>{getControllerItem.label}</label>
                                
                                <div style={{display: "flex",alignItems: "center", gap: "1px"}}>
                                        {
                                            getControllerItem.options && getControllerItem.options.length > 0 ? getControllerItem.options.map((ele, idx) => 
                                            <div key={idx} style={{display: "flex",alignItems: "center", gap: "1px"}}>
                                                <Field id={ele.id}
                                                name={getControllerItem.name}
                                                type={getControllerItem.componentType}
                                                value={ele.id}/>
                                                <label htmlFor={ele.id}>{ele.label}</label>
                                            </div>  ) : null
                                        }
                                </div>
                                
                                <div style={{color: "red"}}>
                                            <ErrorMessage name={getControllerItem.name}/>
                                </div> 
                                
                            </div> 
                        )
                        break;  
            case types.RADIO:
                        element = (
                            <div style={{display: "flex", alignItems: "center", gap: "2px", padding: "4px", border: "2px solid black", borderRadius: "5px"}}>
                            <label htmlFor={getControllerItem.name}>{getControllerItem.label}</label>
                            
                            <div style={{display: "flex",alignItems: "center", gap: "1px"}}>
                                    {
                                        getControllerItem.options && getControllerItem.options.length > 0 ? getControllerItem.options.map((ele, idx) => 
                                        <div key={idx} style={{display: "flex",alignItems: "center", gap: "1px"}}>
                                            <Field id={ele.id}
                                            name={getControllerItem.name}
                                            type={getControllerItem.componentType}
                                            value={ele.id}/>
                                            <label htmlFor={ele.id}>{ele.label}</label>
                                        </div>  ) : null
                                    }
                            </div>
                            
                            <div style={{color: "red"}}>
                                            <ErrorMessage name={getControllerItem.name}/>
                            </div> 
                        </div>                        
                        )   
                        break;
            case types.SELECT:
                        element = (
                            <div style={{display: "flex", alignItems: "center", gap: "2px", padding: "4px", border: "2px solid black", borderRadius: "5px"}}>
                                <label htmlFor={getControllerItem.name}>{getControllerItem.label}</label>

                                <Field id={getControllerItem.name} name={getControllerItem.name} as="select">
                                        {
                                            getControllerItem.options && getControllerItem.options.length > 0 ? getControllerItem.options.map((ele, idx) => 
                                            <option key={idx} value={ele.id}>{ele.label}</option>) : null
                                        }
                                </Field>

                                <div style={{color: "red"}}>
                                            <ErrorMessage name={getControllerItem.name}/>
                                </div> 
                            </div>
                        )   
                        break;   
            case types.TEXTAREA:
                        element = (
                            <div style={{display: "flex", alignItems: "center", gap: "2px", padding: "4px", border: "2px solid black", borderRadius: "5px"}}>
                            <label htmlFor={getControllerItem.name}>{getControllerItem.label}</label>
                            
                            <Field name={getControllerItem.name} 
                            id={getControllerItem.name} 
                            as="textarea"
                            placeholder={getControllerItem.placeholder} />
                            
                            <div style={{color: "red"}}>
                                            <ErrorMessage name={getControllerItem.name}/>
                            </div> 
                       </div>
                        )   
                        break;  
                        
                      default: 
                        element = (
                            <div style={{display: "flex", alignItems: "center", gap: "2px", padding: "4px", border: "2px solid black", borderRadius: "5px"}}>
                                <label htmlFor={getControllerItem.name}>{getControllerItem.label}</label>
                                
                                <Field name={getControllerItem.name} 
                                id={getControllerItem.name} 
                                type={getControllerItem.type}
                                placeholder={getControllerItem.placeholder} />
                                
                                <div style={{color: "red"}}>
                                            <ErrorMessage name={getControllerItem.name}/>
                                </div> 
                            </div> 
                        )
                        break;
         }
      
        return element  
    }

  return (
    <div>
       <Formik initialValues={formInitialValues}
         validationSchema={formValidationSchema}
         onSubmit={(values) => {
                setFormData(values)
         }}>
         {({resetForm}) => (
                    <Form>
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", gap: "2px"}}>
                        {
                            formControllers.map((controllerItem, idx) => (
                                <div key={idx}>
                                        {
                                        getControllerItem(controllerItem)
                                        }
                                </div>
                            ))
                        }
                        <div style={{padding: "4px", border: "2px solid black", borderRadius: "5px", textAlign: "center"}}>
                                <button type='submit'>Submit</button>
                        </div>
                        <div style={{padding: "4px", border: "2px solid black", borderRadius: "5px", textAlign: "center"}}>
                                <button type='button' onClick={() => resetForm()}>Reset</button>
                        </div>
                    </div>
                    </Form>
         )}   
       </Formik>
    </div>
  )
}

export default FormikForm
