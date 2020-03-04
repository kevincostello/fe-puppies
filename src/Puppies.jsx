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
      </div>
    );
  }

  showCuties = () => {
    this.setState(currentState => {
      return { visiblePups: !currentState.visiblePups };
    });
  };
}

export default Puppies;
