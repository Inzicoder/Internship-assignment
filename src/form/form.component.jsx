import React, { useState } from 'react';
import './form.styles.scss'

function Form() {

    const[CompanyErr, setCompanyErr] = useState(false);
    const [ExpErr, setExpErr] = useState(false);
    const[JobTitleErr,setJobTitleErr]=useState(false)
    const[LocationErr,setLocationErr]=useState(false)
    


    function handleSubmit(e) {
        e.preventDefault()
    }

    function handleChange(e) {
        let item = e.target.value
        if (item.length < 1) {
            setExpErr(true)
        }
        else{
            setExpErr(false)
        }
        
    }

    function CompanyHandler(e) {
        let item = e.target.value
        if (item.length < 3) {
            setCompanyErr(true)
        }
        else{
            setCompanyErr(false)
        }
        
    }


    function Locationhandler(e) {
        let item = e.target.value
        if (item.length < 1) {
            setLocationErr(true)
        }
        else{
            setLocationErr(false)
        }
        
    }

    function Jobhandler(e) {
        let item = e.target.value
        if (item.length < 1) {
            setJobTitleErr(true)
        }
        else{
            setJobTitleErr(false)
        }
        
    }


    
    function ExpHandler(e) {
        let item = e.target.value
        if (item.length < 1) {
            setExpErr(true)
        }
        else{
            setExpErr(false)
        }
        
    }


     
    return (
        <div className="container">
            <h1>Post Job</h1>
            <form onSubmit={handleSubmit} className="forms">
                <h3>Basic Details</h3>

                <label htmlFor="Name"> Company<sup>*</sup>
                    <input
                        type="text"
                        onChange={CompanyHandler}
                        placeholder="Your Company Name" />
                           {CompanyErr?<span style={{color:'red'}}>Company name should not be blank</span>:null}
                </label>



                <label htmlFor="Job-title"> JobTitle<sup>*</sup>
                    <input
                        type="text"
                       placeholder="Job title"
                        onChange={Jobhandler}
                    />
                   
                   {JobTitleErr?<span style={{color:'red'}}>Job Title cannot be blank</span>:null}
                </label>

                <label htmlFor="Location"> Location<sup>*</sup>
                    <input
                        type="text"
                        placeholder="City"        
                        onChange={Locationhandler} />
                        {LocationErr?<span style={{color:'red'}}>Please provide location</span>:null}
                </label>
                <label htmlFor="Experience"> Experience<sup>*</sup>
                    <input type="number"
                        placeholder="experience in years"
                        onChange={ExpHandler} />
                        {ExpErr?<span style={{color:'red'}}>Experience cannot be blank</span>:null}
                </label>
                <label htmlFor="Description"> Job Description
                 <input type="text" placeholder="Details of the job"></input>

                </label>
                <h3>Targeting</h3>

                <label>Category</label>
                <select
                 
                    onChange={handleChange}>

                    <option>
                        Software
                         </option>
                    <option>
                        Marketing
                         </option>
                    <option>
                        Consultancy
                         </option>
                    <option>
                        BPO
                         </option>
                </select>

                <label>Education</label>
                <select
                
                    onChange={handleChange}>
                    Education
                         <option>
                        B.Tech
                         </option>
                    <option>
                        BCA
                         </option>
                    <option>
                        M.tech
                         </option>
                    <option>
                        MCA
                         </option>
                </select>

                <label>Tags</label>
                <input type="text" placeholder="+Tags"></input>
                <button type="submit">Post Job</button>
                

            </form>
        </div>
    )


}






export default Form
