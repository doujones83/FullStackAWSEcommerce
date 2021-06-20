import { useState } from 'react'
import Layout from '../components/Layout'

const Register = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        registerButton: '',
        perfect: ''
    })

    const applicationForm = () => (
        <form>
            <div className="form-group">
               <input type="text" className="form-control" placeholder="Enter your Full Name"/> 
            </div>
            <br />
            <div className="form-group">
               <input type="email" className="form-control" placeholder="Enter your Email"/> 
            </div>
            <br />
            <div className="form-group">
               <input type="password" className="form-control" placeholder="Enter your Password"/> 
            </div>
            <br />
            <div className="form-group">
            <button className="btn btn-outline-warning">Submit Info</button>
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
