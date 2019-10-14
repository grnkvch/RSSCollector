import React from "react"

import "./SourceButton.css"

export default function SourceButton(props) {
  const { onClick = () => { }, checked } = props;
  return (
    <div onClick={onClick} className={`button ${checked && 'checked'}`}>
      {props.children}
    </div >
  )
}