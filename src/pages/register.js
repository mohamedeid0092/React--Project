import { useState } from "react";

export default function Register(props) {
    const [registerForm, setRegisterForm] = useState({
        Email: "",
        Password: "",
      });
      const [formErrors, setFormErros] = useState({
        EmailErrors: null,
        passwordErrors: null,
      });
     const handleFormChange =(e)=>{
        if (e.target.name === "Email") {
            setRegisterForm({
              ...registerForm,
              Email: e.target.value,
            });
            setFormErros({
                ...formErrors,
                EmailErrors:
                  e.target.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)  ? null:"this is not a vaild email" ,
              });
     };
     if(e.target.name === "password"){
      setRegisterForm({
        ...registerForm,
    Password: e.target.value,
      });
      setFormErros({
        ...formErrors,
        passwordErrors: e.target.value.length<= 8 ? "thispassword must be more than 8 characters" : null,
      })
    }
    }
    const onFormSubmit = () => (
      registerForm.Email.length <= 0
      ? setFormErros({
          EmailErrors: "This field is required",
        })
      : registerForm.Password.length <= 0
      ? setFormErros({
          passwordErrors: "This field is required",
        }):null
    
    );
    


return (
        <>



<div class="container">
  <form >
    <div class="form-group">
      <label for="usr">Email:</label>
      <input type="email" onChange={handleFormChange} class={`form-control ${
          formErrors.EmailErrors ? "border-danger" : ""
        }`} id="usr" name="Email" value={registerForm.Email}></input>
        <h5 className="text-danger"> {formErrors.EmailErrors}</h5>
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" onChange={handleFormChange} class={`form-control ${
          formErrors.passwordErrors ? "border-danger" : ""
        }`} id="pwd" name="password" value={registerForm.Password}></input>
        <h5 className="text-danger"> {formErrors.passwordErrors}</h5>
    </div>
    <input type="button" class="btn btn-primary" value="submit" onClick={()=>{props.history.push('/')}}/>
  </form>
</div>


        </>
)}
