import { useState } from "react"
import AuthUser from "./AuthUser";
export default function Login() {
    const {http,setToken}=AuthUser();
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();    
    const submitForm=()=>{
       http.post('/login',{email:email,password:password}).then((res)=>{
        setToken(res.data.user.name,res.data.access_token);
        console.log(res.data);
       })
    }
    return (
        <div className="row justify-content-center pt-5">
            <div className="col-sm-6">
                <div className="card p-4">
                    <form action="/action_page.php">
                        <div className="mb-3 mt-3">
                            <label className="form-label">Email:</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter email" 
                            onChange={e=>setEmail(e.target.value)}
                            name="email" />
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Password:</label>
                            <input type="password" className="form-control" id="pwd" placeholder="Enter password" 
                             onChange={e=>setPassword(e.target.value)}
                            name="pswd" />
                        </div>
                        <button type="button" onClick={submitForm} className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}