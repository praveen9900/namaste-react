import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default Location",
      },
    };

    // console.log("Child Constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/praveen9900");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
    // console.log("Child Mound");
  }

  render() {
    // console.log("Child Render");
    const { login, location } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Name : {login}</h2>
        <h3>Location : {location}</h3>
        <h4>Instagram : _praveenpatil</h4>
      </div>
    );
  }
}

export default UserClass;
