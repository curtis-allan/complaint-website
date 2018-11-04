import { TextField, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { Component } from "react";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: "100px"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
});

class form extends Component {
  state = { name: "", email: "", phone: "", desc: "", evidence: "", data: {} };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.evidence);
  };

  handleSubmit = e => {
    e.preventDefault();
    const data = { ...this.state };
    fetch("http://localhost:5000/api", {
      method: "POST",
      body: data
    }).then(res => console.log(res.json()));
  };

  render() {
    const { classes, step } = this.props;
    const { name, email, phone, desc, evidence } = this.state;
    return (
      <form
        className={classes.container}
        noValidate
        onSubmit={this.handleSubmit}
      >
        {() =>
          this.state.data.map(item => (
            <div key={item.name}>
              {item.name} : {item.value}
            </div>
          ))
        }
        {step === 0 && (
          <>
            <TextField
              className={classes.textField}
              label="Name"
              name="name"
              margin="normal"
              value={name}
              onChange={this.handleChange}
            />
            <TextField
              className={classes.textField}
              label="Email"
              name="email"
              type="email"
              margin="normal"
              value={email}
              onChange={this.handleChange}
            />
            <TextField
              className={classes.textField}
              label="Phone"
              margin="normal"
              name="phone"
              type="tel"
              value={phone}
              onChange={this.handleChange}
            />
          </>
        )}
        {step === 1 && (
          <>
            <TextField
              className={classes.textField}
              label="Description"
              margin="normal"
              name="desc"
              value={desc}
              onChange={this.handleChange}
            />
          </>
        )}
        {step === 2 && (
          <>
            <input
              className={classes.textField}
              margin="normal"
              name="evidence"
              type="file"
              value={evidence}
              onChange={this.handleChange}
            />
            <Button type="Submit">Submit</Button>
          </>
        )}
      </form>
    );
  }
}

form.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(form);
