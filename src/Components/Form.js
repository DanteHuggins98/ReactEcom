import React from "react";

export const Form = () => {
  return (
    <section className="formText">
      <h1>Contact Us</h1>
      <div className="formcontainer">
        <div className="formImage">
          <img src="https://media.istockphoto.com/photos/set-of-colorful-mens-ties-isolated-on-dark-background-picture-id1097880768?k=20&m=1097880768&s=612x612&w=0&h=8v_UK0jtrr7y-wxzjX5REVcxh9m4i3RwNLZUBJtUBho="/>
          <img src="https://media.istockphoto.com/photos/mens-clothing-and-personal-accessories-picture-id857323498?k=20&m=857323498&s=612x612&w=0&h=w7fR2zIliv5m5Amu-jud9IfkgGXeJiTzQGbtdsYRYuE="/>
        </div>
        <form className="form">
          <div className="firstname">
            <label for="firstName">Enter Your First name</label>
            <input
              type="text"
              name="firstName"
              className="firstName"
              tabIndex="1"
              placeholder="First Name"
              required
            />
          </div>
          <div className="lastname">
            <label for="lastName">Enter Your Last name</label>
            <input
              type="text"
              name="lastName"
              className="lastName"
              tabIndex="2"
              placeholder="Last Name"
              required
            />
          </div>
          <div className="email">
            <label for="email">Enter Your Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="email"
              placeholder="example@gmail.com"
              tabIndex="3"
              required
            />
          </div>
          <div className="state">
            <label for="state">State</label>
            <select id="state" name="state">
              <option value="select">Select Your State</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
          </div>
          <div className="textbox">
            <label for="message">Questions? Comments? Concerns?</label>
            <textarea
              placeholder="We'd love to hear from you."
              className="message"
              name="message"
            />
          </div>

          <button type="submit" className="submit" id="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};
