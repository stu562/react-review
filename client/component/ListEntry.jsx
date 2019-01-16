import React from "react";

function ListEntry(props) {
  return (
    <div>
      <li>
        {props.listItem}{" "}
        <input
          type="submit"
          value="edit"
          onClick={() => props.click(props.index)}
        />
        <input
          type="submit"
          value="delete"
          onClick={() => props.delete(props.index)}
        />
      </li>
    </div>
  );
}

export default ListEntry;
