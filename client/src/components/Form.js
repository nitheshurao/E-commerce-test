import React from 'react'
import "./CSS/Form.css"

const Form = () => {
    return (
        <div>
            <form className="form">
                <p> <span class="red-star">★</span> indicates a required field </p>
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
                        <label>PHONE <span class="red-star">★</span></label>

                        <br />
                        <input type="text" placeholder="name" />
                    </div>
                    <div className="col">
                        <label>MOBILE PHONE <span class="red-star">★</span></label>
                        <br />
                        <input type="text" placeholder="name" />
                    </div>
                    <div className="col">
                        <label>EMAIL <span class="red-star">★</span></label>
                        <br />
                        <input type="text" placeholder="name" />
                    </div>

                </div>

                <hr width="95%" />
                {/*  */}
                <div className="row">
                    <div className="col">

                        <label>COMPANY NAME <span class="red-star">★</span></label>
                        <br />
                        <input type="text" placeholder="name" />

                    </div>

                    <div className="col">
                        <label>COMPANY WEBSITE <span class="red-star">★</span></label>
                        <br />
                        <input type="text" placeholder="name" />
                    </div>
                    <div className="col">
                        <label>ADRESS <span class="red-star">★</span></label>
                        <br />
                        <input type="text" placeholder="name" />
                    </div>
                    <div className="col">
                        <label>CITY</label>
                        <br />
                        <input type="text" placeholder="name" />
                    </div>
                    <div className="col">
                        <label>STATE<span class="red-star">★</span></label>
                        <br />
                        <input type="text" placeholder="name" />
                    </div>

                </div>
            </form>
        </div>
    )
}

export default Form
