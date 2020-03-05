import React, { Component } from "react";
import * as api from "./api";

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
    visiblePups: true,
    displayPuppies: true,
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
    const { kits, pups } = this.state;
    return this.state.displayPuppies && this.state.displayKittens ? ( // show pups and kits
      <div>
        {api.clicker(
          this.displayAnimalList,
          "displayPuppies",
          "Display list of pups"
        )}
        {api.formAnimal(
          pups,
          this.showCuties,
          this.state.visiblePups,
          this.handleChange,
          this.handleSubmit,
          this.savePuppies,
          "newPup",
          "pups"
        )}
        {api.clicker(
          this.displayAnimalList,
          "displayKittens",
          "Display list of kits"
        )}
        {api.formAnimal(
          kits,
          this.showCuties,
          this.state.visibleKits,
          this.handleChange,
          this.handleSubmit,
          this.savePuppies,
          "newKit",
          "kits"
        )}
      </div>
    ) : this.state.displayPuppies ? ( // show pups only
      <div>
        {api.clicker(
          this.displayAnimalList,
          "displayPuppies",
          "Display list of pups"
        )}
        {api.formAnimal(
          pups,
          this.showCuties,
          this.state.visiblePups,
          this.handleChange,
          this.handleSubmit,
          this.savePuppies,
          "newPup",
          "pups"
        )}
        {api.clicker(
          this.displayAnimalList,
          "displayKittens",
          "Display list of kits"
        )}
      </div>
    ) : this.state.displayKittens ? ( // show kits only
      <div>
        {api.clicker(
          this.displayAnimalList,
          "displayPuppies",
          "Display list of pups"
        )}
        {api.clicker(
          this.displayAnimalList,
          "displayKittens",
          "Display list of kits"
        )}
        {api.formAnimal(
          kits,
          this.showCuties,
          this.state.visibleKits,
          this.handleChange,
          this.handleSubmit,
          this.savePuppies,
          "newKit",
          "kits"
        )}
      </div>
    ) : (
      // show neither pups nor kits
      <div>
        {api.clicker(
          this.displayAnimalList,
          "displayPuppies",
          "Display list of pups"
        )}
        {api.clicker(
          this.displayAnimalList,
          "displayKittens",
          "Display list of kits"
        )}
      </div>
    );
  }

  componentDidMount() {
    const pups = localStorage.getItem("pups");
    const kits = localStorage.getItem("kits");
    console.log("mounting");
    if (pups) {
      const state = JSON.parse(pups);
      this.setState({ pups: state });
    }
    if (kits) {
      const state = JSON.parse(kits);
      this.setState({ kits: state });
    } else {
      console.log("not in here");
    }
  }

  savePuppies = () => {
    localStorage.setItem("pups", JSON.stringify(this.state.pups));
    localStorage.setItem("kits", JSON.stringify(this.state.kits));
  };

  showCuties = () => {
    this.setState(currentState => {
      return { visiblePups: !currentState.visiblePups };
    });
  };

  handleChange = (event, animal) => {
    const { name, value } = event.target;
    this.setState(currentState => {
      return { [animal]: { ...currentState[animal], [name]: value } };
    });
  };

  handleSubmit = (event, newAnimal, animalKey) => {
    event.preventDefault();
    this.setState(currentState => {
      return {
        [animalKey]: [...currentState[animalKey], currentState[newAnimal]]
      };
    });
  };

  displayAnimalList = (event, animal) => {
    event.preventDefault();
    this.setState(currentState => {
      return { [animal]: !currentState[animal] };
    });
  };
}

export default Puppies;
