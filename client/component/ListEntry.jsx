import React from "react";

function ListEntry(props) {
  return <div onClick={e => props.click(e)}>{props.listItem}</div>;
}

export default ListEntry;
