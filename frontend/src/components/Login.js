import { Formik } from "formik"
import React from "react"
import { NavLink } from "react-router-dom"
import Swal from "sweetalert2"

const Login = () => {
  const userSubmit = async (formdata) => {
    console.log(formdata);

    const res = await fetch("http://localhost:5000/user/authenticate", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: { "Content-Type": "application/json" },
    });

    if(res.status === 200){
      Swal.fire({
        icon : 'success',
        title : 'WellDone!!',
        text : 'Loggedin Successfully!!'
      })
    }else if(res.status === 401){
      Swal.fire({
        icon : 'error',
        title : 'OOops!!',
        text : 'Loggin Failed!!'
      })
    }else{
      Swal.fire({
        icon : 'error',
        title : 'OOops!!',
        text : 'Some Error Occured!!'
      })
    }

  }

  return (
    <div>
      <div className="col-md-3 mx-auto pt-5">
        <div className="card">
          <div className="card-body">
            <p className="text-center h4">Login Form</p>
            <hr />
            <Formik initialValues={{ email: "", password: "" }} onSubmit={userSubmit}>
              {({ values, handleSubmit, handleChange }) => (
                <form onSubmit={handleSubmit}>
                  <label>Email Address</label>
                  <input className="form-control mb-3" value={values.email} onChange={handleChange} name="email" />

                  <label>Password</label>
                  <input className="form-control mb-3" type="password" value={values.password} onChange={handleChange} name="password" />

                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                  <h5><center>or</center></h5>
                    <NavLink className='nav-link ' to="/signup" >Signup here</NavLink>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login