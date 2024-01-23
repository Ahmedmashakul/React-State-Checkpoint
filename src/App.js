import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    // Initial state
    this.state = {
      person: {
        fullName: 'John Doe',
        bio: 'A passionate developer',
        imgSrc: 'https://thumbs.dreamstime.com/b/unknown-male-avatar-profile-image-businessman-vector-unknown-male-avatar-profile-image-businessman-vector-profile-179373829.jpg',
        profession: 'Software Engineer',
      },
      show: false,
      mountTime: new Date(),
    };
  }

  // Lifecycle method to run when the component is mounted
  componentDidMount() {
    // Set up an interval to update the mounted time every second
    this.intervalId = setInterval(() => {
      this.setState({ mountTime: new Date() });
    }, 1000);
  }

  // Lifecycle method to run when the component is unmounted
  componentWillUnmount() {
    // Clear the interval to prevent memory leaks
    clearInterval(this.intervalId);
  }

  // Toggle the show state
  toggleShow = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    const { person, show, mountTime } = this.state;

    return (
      <div>
        <h1>React Class Component</h1>
        <button onClick={this.toggleShow}>Toggle Profile</button>

        {show && (
          <div>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt="Profile" />
            <p>Profession: {person.profession}</p>
          </div>
        )}

        <p>Time since mount: {Math.floor((new Date() - mountTime) / 1000)} seconds</p>
      </div>
    );
  }
}

export default App;

