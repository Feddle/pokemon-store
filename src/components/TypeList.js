import React from "react";

const TypeList = props => (
  <ul className="typeList">
    {props.types.map(t => (
      <li
        key={t.id}
        className={props.selectedType === t.id ? t.name : ""}
        onClick={e => props.onSearch(t.id)}
      >
        {t.name}
      </li>
    ))}
  </ul>
);

export default TypeList;
