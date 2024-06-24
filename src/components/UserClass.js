import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      userInfo: {
        name: "Dummy",
        location: "SGG",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/skshiwali30");
    const json = await data.json();

    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { login, location, avatar_url, blog } = this.state.userInfo;
    return (
      <div className="user-card">
        <h3>Count: {this.state.count}</h3>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <img src={avatar_url} />
        <h2>Name: {login}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: {blog}</h3>
      </div>
    );
  }
}

export default UserClass;
