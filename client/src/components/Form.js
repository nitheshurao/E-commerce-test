import React from 'react'
import "./CSS/Form.css"

const Form = () => {
    return (
        <div>
            <form className="form">
                <p>name</p>
                <div className="row">


                    <div className="col">

                        <label>FIRST NAME<span class="red-star">★</span> </label>

                        <br />
                        <input type="text" placeholder="name" />

                    </div>

                    <div className="col">
                        <label > LAST NAME <span class="red-star">★</span> </label>

                        <br />
                        <input type="text" placeholder="name" />
                    </div>
                    <div className="col">
                        <label>PHONE</label>

                        <br />
                        <input type="text" placeholder="name" />
                    </div>
                    <div className="col">
                        <label>MOBILE PHONE</label>
                        <br />
                        <input type="text" placeholder="name" />
                    </div>
                    <div className="col">
                        <label>EMAIL</label>
                        <br />
                        <input type="text" placeholder="name" />
                    </div>

                </div>

                <hr width="95%" />
                {/*  */}
                <div className="row">
                    <div className="col">

                        <label>COMPANY NAME</label>
                        <br />
                        <input type="text" placeholder="name" />

                    </div>

                    <div className="col">
                        <label>COMPANY WEBSITE</label>
                        <br />
                        <input type="text" placeholder="name" />
                    </div>
                    <div className="col">
                        <label>ADRESS</label>
                        <br />
                        <input type="text" placeholder="name" />
                    </div>
                    <div className="col">
                        <label>CITY</label>
                        <br />
                        <input type="text" placeholder="name" />
                    </div>
                    <div className="col">
                        <label>STATE</label>
                        <br />
                        <input type="text" placeholder="name" />
                    </div>

                </div>
            </form>
        </div>
    )
}

export default Form
