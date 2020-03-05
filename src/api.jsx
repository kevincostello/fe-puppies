import React from "react";

export const clicker = (displayList, toggle, textToDisplay) => {
  console.log(displayList, textToDisplay, toggle);
  return (
    <button onClick={event => displayList(event, toggle)}>
      {textToDisplay}
    </button>
  );
};

export const formAnimal = (animal, show, visible, change, submit, save) => {
  return (
    <div>
      <button onClick={show}>show images of dem cuties</button>
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

      <form onSubmit={submit}>
        <label htmlFor="">
          Name:
          <input type="text" onChange={change} name="name" />
        </label>

        <label htmlFor="">
          url:
          <input type="text" onChange={change} name="url" />
        </label>
        <button>Add puppy :)</button>
      </form>

      <button onClick={save}>Save puppies!</button>
    </div>
  );
};
