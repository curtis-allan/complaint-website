import { TextField, Button, Checkbox, Typography } from "@material-ui/core";
import React, { Component } from "react";

class form extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    desc: "",
    evidence: "",
    step: 0,
    checked: false
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, email, phone, desc, evidence } = this.state;
    let data = { name, email, phone, desc, evidence };
    fetch("http://localhost:5000/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => console.log(json));
  };

  handleCheckToggle = () => {
    this.setState({ checked: !this.state.checked });
  };

  handleNextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  handlePrevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  render() {
    const { name, email, phone, desc, evidence, step } = this.state;

    const styles = {
      container: {
        textAlign: "center",
        margin: "0 auto"
      },
      input: {
        padding: "20px"
      }
    };
    return (
      <div style={styles.container}>
        <form onSubmit={this.handleSubmit}>
          {step === 0 && (
            <>
              <TextField
                label="Name"
                name="name"
                margin="normal"
                value={name}
                onChange={this.handleChange}
                style={styles.input}
              />
              <TextField
                label="Email"
                name="email"
                type="email"
                margin="normal"
                value={email}
                onChange={this.handleChange}
                style={styles.input}
              />
              <TextField
                label="Phone"
                margin="normal"
                name="phone"
                type="tel"
                value={phone}
                onChange={this.handleChange}
                style={styles.input}
              />
              <Button onClick={this.handleNextStep}>Next</Button>
            </>
          )}
          {step === 1 && (
            <>
              <TextField
                label="Description"
                margin="normal"
                name="desc"
                value={desc}
                onChange={this.handleChange}
              />
              <Button onClick={this.handlePrevStep}>Back</Button>
              <Button onClick={this.handleNextStep}>Next</Button>
            </>
          )}
          {step === 2 && (
            <>
              <input
                margin="normal"
                name="evidence"
                type="file"
                value={evidence}
                onChange={this.handleChange}
              />
              <Button onClick={this.handlePrevStep}>Back</Button>
              <Typography variant="subtitle1">
                By submitting a complaint you agree to our terms of service and
                that you are 18 years of age or older
              </Typography>
              <Checkbox
                checked={this.state.checked}
                onChange={this.handleCheckToggle}
                value="Confirm"
                required
              />
              <Button type="Submit">Submit</Button>
            </>
          )}
        </form>
      </div>
    );
  }
}

export default form;
