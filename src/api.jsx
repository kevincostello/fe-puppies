import React from "react";

export const clicker = (displayList, toggle, textToDisplay) => {
  return (
    <button onClick={event => displayList(event, toggle)}>
      {textToDisplay}
    </button>
  );
};

export const formAnimal = (
  animal,
  show,
  visible,
  change,
  submit,
  save,
  newAnimal,
  keyName
) => {
  return (
    <div>
      <button onClick={show}>show images of {keyName}</button>
      <ul id="puppylist">
        {animal.map(pup => {
          return (
            <li key={pup.url}>
              {pup.name}
              {visible ? <img height={100} alt="puppy" src={pup.url} /> : null}
            </li>
          );
        })}
      </ul>

      <form onSubmit={event => submit(event, newAnimal, keyName)}>
        <label htmlFor="">
          Name:
          <input
            type="text"
            onChange={event => change(event, newAnimal)}
            name="name"
          />
        </label>

        <label htmlFor="">
          url:
          <input
            type="text"
            onChange={event => change(event, newAnimal)}
            name="url"
          />
        </label>
        <button>Add {keyName} :)</button>
      </form>

      <button onClick={save}>Save puppies!</button>
    </div>
  );
};

export const saveAnimal = (
  animal,
  show,
  visible,
  change,
  submit,
  save,
  newAnimal,
  keyName
) => {};
