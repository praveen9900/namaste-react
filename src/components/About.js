import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent Mound");
  }

  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>About Us</h1>
        <h2>This is Namaste React</h2>
        {/* <User /> */}
        <UserClass name={"Praveen from Classs"} />
      </div>
    );
  }
}

export default About;
