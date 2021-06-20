import { useState } from 'react'
import Layout from '../components/Layout'

const Register = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        registerButton: 'Submit Info',
        perfect: ''
    })

     const handleChange = (name) => (e) => {
         setState({...state, [name]: e.target.value,
             error: '', perfect: '',
            registerButton: 'Submit Info'
        })
     }
     const handleSubmit = (e) => {

     }
    const applicationForm = () => (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
               <input type="text" 
               className="form-control" 
               onChange={handleChange('name')}
               placeholder="Enter your Full Name"/> 
            </div>
            <br />
            <div className="form-group">
               <input type="email" 
               className="form-control" 
               onChange={handleChange('email')}
               placeholder="Enter your Email"/> 
            </div>
            <br />
            <div className="form-group">
               <input type="password" 
               className="form-control" 
               onChange={handleChange('password')}
               placeholder="Enter your Password"/> 
            </div>
            <br />
            <div className="form-group">
            <button className="btn btn-outline-warning">{state.registerButton}</button>
            </div>
        </form>
    )
    return <Layout>
       <div className="col-md-6 offset-md-3">
         <h1>Register</h1>
         <br />
         {applicationForm()}
       </div>
    </Layout>
    
}

export default Register
