import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      fullName: "",
      dateOfBirth: "",
      gender: "",
      country: "",
      receiveNewsLetters: false,
      controls: [
        "email",
        "password",
        "fullName",
        "dateOfBirth",
        "gender",
        "country",
        "receiveNewsLetters",
      ],
      errors: {
        email: [],
        password: [],
        fullName: [],
        dateOfBirth: [],
        gender: [],
        country: [],
        receiveNewsLetters: [],
      },
      message: "",
      dirty: {
        email: false,
        password: false,
        fullName: false,
        dateOfBirth: false,
        gender: false,
        country: false,
        receiveNewsLetters: false,
      },
    };
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <h1>Register</h1>
          <div className="row mb-3">
            <label className="col-lg-4 col-form-label" htmlFor="email">
              Email
            </label>
            <div className="col-lg-8">
              <input
                type="text"
                id="email"
                className="form-control"
                autoFocus="autofocus"
                value={this.state.email}
                onChange={(event) => {
                  let dirty = this.state.dirty;
                  dirty.email = true;
                  //this.validate will called automatically after completion of setstate
                  this.setState(
                    {
                      email: event.target.value,
                      dirty: dirty,
                    },
                    this.validate
                  );
                }}
                onBlur={(event) => {
                  let dirty = this.state.dirty;
                  dirty.email = true;
                  //revalid the updated value so call this.validate
                  this.setState({ dirty: dirty }, this.validate);
                }}
              />

              <div className="text-danger">
                {this.state.errors.email[0] && this.state.dirty.email
                  ? this.state.errors.email
                  : ""}
              </div>
            </div>
          </div>

          {/* email ends*/}

          <div className="row mb-3">
            <label className="col-lg-4 col-form-label" htmlFor="password">
              Password
            </label>
            <div className="col-lg-8">
              <input
                type="password"
                id="password"
                className="form-control"
                value={this.state.password}
                onChange={(event) => {
                  let dirty = this.state.dirty;
                  dirty.password = true;
                  this.setState(
                    {
                      password: event.target.value,
                      dirty: dirty,
                    },
                    this.validate
                  );
                }}
                onBlur={(event) => {
                  let dirty = this.state.dirty;
                  dirty.password = true;
                  //revalid the updated value so call this.validate
                  this.setState({ dirty: dirty }, this.validate);
                }}
              />
              <div className="text-danger">
                {this.state.errors.password[0] && this.state.dirty.password
                  ? this.state.errors.password
                  : ""}
              </div>
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-lg-4 col-form-label" htmlFor="fullName">
              Full Name
            </label>
            <div className="col-lg-8">
              <input
                type="text"
                id="fullName"
                className="form-control"
                value={this.state.fullName}
                onChange={(event) => {
                  let dirty = this.state.dirty;
                  dirty.fullName = true;
                  this.setState(
                    {
                      fullName: event.target.value,
                      dirty: dirty,
                    },
                    this.validate
                  );
                }}
                onBlur={(event) => {
                  let dirty = this.state.dirty;
                  dirty.fullName = true;
                  //revalid the updated value so call this.validate
                  this.setState({ dirty: dirty }, this.validate);
                }}
              />

              <div className="text-danger">
                {this.state.errors.fullName[0] && this.state.dirty.fullName
                  ? this.state.errors.fullName
                  : ""}
              </div>
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-lg-4 col-form-label" htmlFor="dateOfBirth">
              Date of Birth
            </label>
            <div className="col-lg-8">
              <input
                type="date"
                id="dateOfBirth"
                className="form-control"
                value={this.state.dateOfBirth}
                onChange={(event) => {
                  let dirty = this.state.dirty;
                  dirty.dateOfBirth = true;
                  this.setState(
                    {
                      dateOfBirth: event.target.value,
                      dirty: dirty,
                    },
                    this.validate
                  );
                }}
                onBlur={(event) => {
                  let dirty = this.state.dirty;
                  dirty.dateOfBirth = true;
                  //revalid the updated value so call this.validate
                  this.setState({ dirty: dirty }, this.validate);
                }}
              />
              <div className="text-danger">
                {this.state.errors.dateOfBirth[0] &&
                this.state.dirty.dateOfBirth
                  ? this.state.errors.dateOfBirth
                  : ""}
              </div>
            </div>
          </div>

          {/* dateOfBirth ends */}

          {/*gender starts*/}

          <div className="row mb-3">
            <label className="col-lg-4" htmlFor="">
              Gender
            </label>
            <div className="col-lg-8">
              <div className="form-check">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  className="form-check-input"
                  value="male"
                  checked={this.state.gender === "male" ? true : false}
                  onChange={(event) => {
                    let dirty = this.state.dirty;
                    dirty.gender = true;
                    this.setState({ gender: event.target.value, dirty: dirty });
                  }}
                  onBlur={(event) => {
                    let dirty = this.state.dirty;
                    dirty.gender = true;
                    this.setState({ dirty: dirty });
                  }}
                />
                <label className="form-check-label" htmlFor="male">
                  Male
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  className="form-check-input"
                  value="female"
                  checked={this.state.gender === "female" ? true : false}
                  onChange={(event) => {
                    let dirty = this.state.dirty;
                    dirty.gender = true;
                    this.setState({ gender: event.target.value, dirty: dirty });
                  }}
                  onBlur={(event) => {
                    let dirty = this.state.dirty;
                    dirty.gender = true;
                    this.setState({ dirty: dirty });
                  }}
                />
                <label className="form-check-label" htmlFor="male">
                  Female
                </label>
              </div>
              <div className="text-danger">
                {this.state.errors.gender[0] && this.state.dirty.gender
                  ? this.state.errors.gender
                  : ""}
              </div>
            </div>
          </div>
          {/*gender ends*/}

          {/*country starts*/}
          <div className="row mb-3">
            <label className="col-lg-4 col-form-label" htmlFor="country">
              Country
            </label>
            <div className="col-lg-8">
              <select
                className="form-control"
                value={this.state.country}
                onChange={(event) => {
                  let dirty = this.state.dirty;
                  dirty.country = true;
                  this.setState(
                    { country: event.target.value, dirty: dirty },
                    this.validate
                  );
                }}
                onBlur={(event) => {
                  let dirty = this.state.dirty;
                  dirty.country = true;
                  this.setState({ dirty: dirty });
                }}
              >
                <option value="">Please select</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Japan">Japan</option>
                <option value="France">France</option>
                <option value="Mexico">Mexico</option>
                <option value="Canada">Canada</option>
              </select>

              <div className="text-danger">
                {this.state.errors.country[0] && this.state.dirty.country
                  ? this.state.errors.country
                  : ""}
              </div>
            </div>
          </div>
          {/*country ends*/}

          {/*receiveNewsLetters starts*/}
          <div className="row">
            <label className="col-lg-4"></label>
            <div className="col-lg-8">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  value="true"
                  checked={this.state.receiveNewsLetters}
                  onChange={(event) => {
                    let dirty = this.state.dirty;
                    dirty.receiveNewsLetters = true;
                    this.setState(
                      {
                        receiveNewsLetters: event.target.checked,
                        dirty: dirty,
                      },
                      this.validate
                    );
                  }}
                  onBlur={(event) => {
                    let dirty = this.state.dirty;
                    dirty.receiveNewsLetters = true;
                    this.setState({
                      dirty: dirty,
                    });
                  }}
                  id="receivenewsletters"
                />
                <label
                  className="form-check-label"
                  htmlFor="receivenewsletters"
                >
                  Receive News letters
                </label>
                <div className="text-danger">
                  {this.state.errors.receiveNewsLetters[0] &&
                  this.state.dirty.receiveNewsLetters
                    ? this.state.errors.receiveNewsLetters
                    : ""}
                </div>
              </div>
            </div>
          </div>

          {/*Receive News Letters starts*/}
          <div className="row">
            <div className="col-lg-12">
              <div className="text-end">{this.state.message}</div>
              <div className="text-end">
                <button
                  className="btn btn-success m-2"
                  onClick={this.onRegisterClick}
                >
                  Register
                </button>
              </div>

              <ul className="text-danger">
                {Object.keys(this.state.errors).map((control) => {
                  if (this.state.dirty[control]) {
                    return this.state.errors[control].map((err) => {
                      return <li key={err}>{err}</li>;
                    });
                  } else {
                    return "";
                  }
                })}
              </ul>
              {/* <div>{JSON.stringify(this.state.errors)}</div>*/}
            </div>
          </div>
        </div>
      </div>
    );
  } //end of render

  validate = () => {
    const validEmailRegex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    const validPasswordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15})/;
    let errors = {};
    //reading each control from 'controls' array
    this.state.controls.forEach((control) => {
      errors[control] = [];

      switch (control) {
        case "email":
          //email cannot be blank
          if (!this.state[control]) {
            errors[control].push("email cann't be blank");
          }
          //checking email regular expression
          if (this.state.email) {
            if (!validEmailRegex.test(this.state[control])) {
              errors[control].push("Proper email address is expected");
            }
          }
          break;

        case "password":
          //password cann't be blank
          if (!this.state[control]) {
            errors[control].push("password cann't be blank");
          }
          //checking password reg exp
          if (this.state.password) {
            if (!validPasswordRegex.test(this.state[control])) {
              errors[control].push(
                "Password should be 6 to 15 characters long with at least one uppercase letter and lowercase letter and one digit"
              );
            }
          }
          break;
        case "fullName":
          //fullName cann't be blank
          if (!this.state[control]) {
            errors[control].push("Full Name can't be blank");
          }
          break;

        case "dateOfBirth":
          console.log(this.state[control]);
          //dateOfBirth can't be blank
          if (!this.state[control]) {
            errors[control].push("Date Of Birth can't be blank");
          }
          //dateOfBirth should be 18 years older
          if (this.state[control]) {
            //dob lai millisecond ma lageko getTIme use garera
            let dob = new Date(this.state[control]).getTime();

            let today = new Date().getTime(); //no. of milliseconds since jan 1 1970

            if (today - 18 * 365.25 * 24 * 60 * 60 * 1000 < dob) {
              errors[control].push("Minimum age is 18 years");
            }
          }
          break;

        case "gender":
          //gender cannot be blank condition
          if (!this.state[control]) {
            errors[control].push("Gender can't be blank");
          }
          break;

        case "country":
          //country cann't be blank
          if (!this.state[control]) {
            errors[control].push("Country can't be blank");
          }
          break;
        default:
          break;
      }
    });
    //set errors
    //agadi ko state ko error pachadi ko local variable of this function
    //errors:errors jastai ho same code choto banako
    this.setState({ errors });
  };
  //checks state.errors property for error messages

  isValid = () => {
    let valid = true;

    //reading all controls form this.state.errors
    for (let control in this.state.errors) {
      if (this.state.errors[control].length > 0) {
        valid = false;
      }
    }
    return valid;
  };

  //executes when the user clicks on Register button
  onRegisterClick = async () => {
    //make all dirty
    var dirty = this.state.dirty;
    Object.keys(dirty).forEach((control) => {
      dirty[control] = true;
    });

    this.setState({ dirty: dirty });

    //invokes validate method to check all control's values
    this.validate();

    if (this.isValid()) {
      //valid form ayepachi post garne server ma
      //this.setState({ message: "Valid" });
      //tesko lagi function async() banaune
      //user ma sabai data laune ani json format ma post grne
      let user = {
        email: this.state.email,
        password: this.state.password,
        fullName: this.state.fullName,
        dateOfBirth: this.state.dateOfBirth,
        gender: this.state.gender,
        country: this.state.country,
        receiveNewsLetters: this.state.receiveNewsLetters,
      };
      let response = await fetch("http://localhost:5000/users", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json",
        },
      });

      let body = await response.json();
      if (response.ok) {
        this.setState({
          message: (
            <span className="text-success">Successfully Registered</span>
          ), //You can use history object to redirect to login page
        });
      } else {
        //for verification purpose
        console.log(response, body);
        this.setState({
          message: <span className="text-danger">Error in Registration</span>,
        });
      }
    } else {
      this.setState({ message: "Invalid" });
    }
  };
}

export default Register;
