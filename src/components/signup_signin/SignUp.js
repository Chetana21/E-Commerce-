import React from "react";
const SignUp = () => {
  return (
    <section>
    <div className="sign_container">
        <div className="sign_header">
            <img src="./images/blacklogoamazon.png" alt="signupimg" />
        </div>
        <div className="sign_form">
            <form method="POST">
                <h1>Create account</h1>
                <div className="form_data">
                    <label htmlFor="name">Your name</label>
                    <input type="text" name="fname"
                        id="name" />
                </div>
                <div className="form_data">
                    <label htmlFor="email">email</label>
                    <input type="email" name="email"
                        id="email" />
                </div>
                <div className="form_data">
                    <label htmlFor="mobile">Mobile number</label>
                    <input type="number" name="mobile"
                        id="mobile" />
                </div>
                <div className="form_data">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password"
                        id="password" placeholder="At least 6 characters" />
                </div>
                <div className="form_data">
                    <label htmlFor="passwordg">Password again</label>
                    <input type="password" name="cpassword"
                        id="passwordg" />
                </div>
                <button type="submit" className="signin_btn" >Continue</button>
            </form>
        </div>
    </div>
</section>

  );
};

export default SignUp;
