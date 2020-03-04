import React, { Component } from "react";

export class Puppies extends Component {
  state = {
    pups: [
      {
        name: "jet",
        url: "http://cdn.akc.org/content/hero/puppy_pictures_header.jpg"
      },
      {
        name: "barney",
        url:
          "https://cdn2-www.dogtime.com/assets/uploads/2011/03/puppy-development.jpg"
      },
      {
        name: "aela",
        url:
          "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/05/22224952/beagle-puppy-in-large-cushion-chair.jpg"
      }
    ],
    visiblePups: true
  };
  render() {
    return (
      <div>
        <button onClick={this.showCuties}>show dem cuties</button>
        <ul id="puppylist">
          {this.state.pups.map(pup => {
            return (
              <li key={pup.url}>
                {pup.name}
                {this.state.visiblePups ? (
                  <img height={100} alt="puppy" src={pup.url} />
                ) : null}
              </li>
            );
          })}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">
            Name:
            <input type="text" onChange={this.handleChange} name="name" />
          </label>

          <label htmlFor="">
            url:
            <input type="text" onChange={this.handleChange} name="url" />
          </label>
          <button>Add puppy :)</button>
        </form>

        <button onClick={this.savePuppies}>Save puppies!</button>
      </div>
    );
  }

  componentDidMount() {
    const pups = localStorage.getItem("pups");
    console.log("mounting", pups);
    if (pups) {
      const state = JSON.parse(pups);
      console.log("in here", state);
      this.setState({ pups: state });
    } else {
      console.log("not in here");
      // this.setState({
      //   pups: [
      //     {
      //       name: "jet",
      //       url: "http://cdn.akc.org/content/hero/puppy_pictures_header.jpg"
      //     },
      //     {
      //       name: "barney",
      //       url:
      //         "https://cdn2-www.dogtime.com/assets/uploads/2011/03/puppy-development.jpg"
      //     },
      //     {
      //       name: "aela",
      //       url:
      //         "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/05/22224952/beagle-puppy-in-large-cushion-chair.jpg"
      //     }
      //   ]
      // });
    }
  }

  savePuppies = () => {
    localStorage.setItem("pups", JSON.stringify(this.state.pups));
  };

  showCuties = () => {
    this.setState(currentState => {
      return { visiblePups: !currentState.visiblePups };
    });
  };

  handleChange = event => {
    console.log(event.target.name + event.target.value);
    const { name, value } = event.target;
    this.setState(currentState => {
      return { newPup: { ...currentState.newPup, [name]: value } };
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState(currentState => {
      return { pups: [...currentState.pups, currentState.newPup] };
    });
  };
}

export default Puppies;
