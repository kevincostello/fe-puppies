import React, { Component } from "react";

export class Kittens extends Component {
  state = {
    kits: [
      {
        name: "Top Cat",
        url:
          "https://vignette.wikia.nocookie.net/characters/images/f/fa/Top_Cat.png/revision/latest/scale-to-width-down/340?cb=20140620211557"
      },
      {
        name: "Slyvester the Cat",
        url:
          "https://upload.wikimedia.org/wikipedia/en/thumb/8/82/Sylvester_the_Cat.svg/1200px-Sylvester_the_Cat.svg.png"
      },
      {
        name: "Bagpuss",
        url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTS7TjvHRAze7AM0jlgnFttg0StRu9oRhVO5JgzTkNu17Ue0jAR"
      }
    ],
    visibleKits: true,
    displayKittens: true
  };
  render() {
    return this.state.displayKittens ? (
      <div>
        <button onClick={this.displayKittenList}>
          Display list of kittens
        </button>
        <button onClick={this.showCuties}>show images of kittens</button>
        <ul id="kittenlist">
          {this.state.kits.map(kit => {
            return (
              <li key={kit.url}>
                {kit.name}
                {this.state.visibleKits ? (
                  <img height={100} alt="kitten" src={kit.url} />
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
          <button>Add kitten :)</button>
        </form>

        <button onClick={this.savekittens}>Save kittens!</button>
      </div>
    ) : (
      <button onClick={this.displayKittenList}>Display list of kittens</button>
    );
  }

  componentDidMount() {
    const kits = localStorage.getItem("kits");
    console.log("mounting", kits);
    if (kits) {
      const state = JSON.parse(kits);
      console.log("in here", state);
      this.setState({ kits: state });
    } else {
      this.setState({
        kits: [
          {
            name: "Top Cat",
            url:
              "https://vignette.wikia.nocookie.net/characters/images/f/fa/Top_Cat.png/revision/latest/scale-to-width-down/340?cb=20140620211557"
          },
          {
            name: "Slyvester the Cat",
            url:
              "https://upload.wikimedia.org/wikipedia/en/thumb/8/82/Sylvester_the_Cat.svg/1200px-Sylvester_the_Cat.svg.png"
          },
          {
            name: "Bagpuss",
            url:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTS7TjvHRAze7AM0jlgnFttg0StRu9oRhVO5JgzTkNu17Ue0jAR"
          }
        ]
      });
    }
  }

  saveKittens = () => {
    localStorage.setItem("kits", JSON.stringify(this.state.kits));
  };

  showCuties = () => {
    this.setState(currentState => {
      return { visibleKits: !currentState.visibleKits };
    });
  };

  handleChange = event => {
    console.log(event.target.name + event.target.value);
    const { name, value } = event.target;
    this.setState(currentState => {
      return { newKit: { ...currentState.newKit, [name]: value } };
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState(currentState => {
      return { kits: [...currentState.kits, currentState.newKit] };
    });
  };

  displayKittenList = event => {
    event.preventDefault();
    this.setState(currentState => {
      return { displayKittens: !currentState.displayKittens };
    });
  };
}

export default Kittens;
