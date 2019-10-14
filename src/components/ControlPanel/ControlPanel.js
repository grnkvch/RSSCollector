
import React, { useState, useEffect } from "react"

import axios from "axios"

import dataConditioner from "../../helpers/dataConditioner"

import ItemCard from "../ItemCard"
import SourceButton from "../SourceButton"


import "./ControlPanel.css"

const ControlPanel = props => {
  const { controls, onClick } = props;

  return (
    <div className="control-panel">
      {[...controls].map(([item, checked]) => (
        <SourceButton
          key={item}
          checked={checked}
          onClick={() => onClick(item)}
        >
          {item}
        </SourceButton>
      ))
      }
    </div >
  )
}

export default ControlPanel
