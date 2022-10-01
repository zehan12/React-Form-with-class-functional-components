const React = require("react");

class ClassForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: ""
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(`name:${this.state.name}
    email:${this.state.email}
    password:${this.state.password}`);
  };

  render() {
    return (
      <React.Fragment>
        <h1>Class Form </h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            onChange={(e) => this.handleChange(e)}
            type="text"
            value={this.state.name}
            name="name"
            placeholder="Enter Your Name"
          />
          <br />
          <input
            onChange={(e) => this.handleChange(e)}
            type="text"
            value={this.state.email}
            name="email"
            placeholder="Enter Your Email"
          />
          <br />
          <input
            onChange={(e) => this.handleChange(e)}
            type="password"
            value={this.state.password}
            name="password"
            placeholder="Enter Your Password"
          />
          <br />
          <button type="submit"> Submit </button>
        </form>
      </React.Fragment>
    );
  }
}

export default ClassForm;
