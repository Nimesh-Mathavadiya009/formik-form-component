export const registerFormControls = [
    {
        name: "userName",
        label: "UserName :",
        placeholder: "Enter Your Name",
        type: "text",
        componentType: "input"
    },
    {
        name: "email",
        label: "Email :",
        placeholder: "Enter Your Email",
        type: "email",
        componentType: "input"
    },
    {
        name: "age",
        label: "Age :",
        placeholder: "Enter Your Age",
        type: "number",
        componentType: "input"
    },
    {
        name: "number",
        label: "Mo.Number :",
        placeholder: "Enter Your Mobile Number",
        type: "text",
        componentType: "input"
    },
    {
        name: "password",
        label: "Password :",
        placeholder: "Enter Your Password",
        type: "password",
        componentType: "input"
    },
    {
        name: "cPassword",
        label: "Confirm Password :",
        placeholder: "Enter Your Password Again",
        type: "password",
        componentType: "input"
    },
    {
        name: "gender",
        label: "Gender :",
        componentType: "radio",
        options: [
            {id: "male", label: "Male"},
            {id: "female", label: "Female"}
        ]
    },
    {
        name: "hobbies",
        label: "Hobbies :",
        componentType: "checkbox",
        options: [
            {id: "writing", label: "Writing"},
            {id: "reading", label: "Reading"},
            {id: "running", label: "Running"}
        ]
    },
    {
        name: "city",
        label: "City :",
        componentType: "select",
        options: [
            {id: "surat", label: "Surat"},
            {id: "ahemdabad", label: "Ahemdabad"},
            {id: "vadodara", label: "Vadodara"}
        ]
    },
    {
        name: "feedback",
        label: "Feedback :",
        componentType: "textarea",
        placeholder: "Enter Your Feedback"
    }
]

export const initialValues = {
    feedback: "",
    city: "",
    hobbies: [],
    gender: "",
    password: "",
    cPassword: "",
    number: "",
    age: "",
    email: "",
    userName: ""
}