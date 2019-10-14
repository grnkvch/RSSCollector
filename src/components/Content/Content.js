
import React, { useState, useEffect } from "react"

import axios from "axios"

import dataConditioner from "../../helpers/dataConditioner"

import ItemCard from "../ItemCard"
import SourceButton from "../SourceButton"


import "./Content.css"

const initialCheckboxesState = {
  check1: false,
  check2: false,
  check3: false,
}

const Content = () => {
  const [data, setData] = useState([]);
  const [content, setContent] = useState([]);
  const [query, setQuery] = useState('');
  const [columnCount, setColumnCount] = useState(1);
  const [checkboxesState, setCheckboxesState] = useState(
    localStorage.preferences
      ? JSON.parse(localStorage.preferences)
      : initialCheckboxesState);

  useEffect(() => {
    axios
      .get(`https://rss-collector-back.herokuapp.com/?${query ? query : 'source[]'}`)
      .then(response => {
        setData(response.data)
      })
  }, [query])

  useEffect(() => {
    const setCount = () => {
      const width = document.querySelector('.content-container').offsetWidth
      console.log('width', width);
      if (!width) return;
      const n = Math.floor(width / 200) < 1 ? 1 : Math.floor(width / 200);
      if (n !== columnCount) setColumnCount(n)
    }
    setCount();
    changeSource();
    window.addEventListener('resize', setCount)
  })

  useEffect(() => {
    if (!Array.isArray(data)) return;
    setContent(dataConditioner(data, columnCount,
      item => {
        return (<ItemCard item={item} />)
      }));
  }, [columnCount, data])

  const changeSource = (id) => {
    let queryStr = '';
    let newCheckboxesState
    if (!id) newCheckboxesState = checkboxesState
    else newCheckboxesState = { ...checkboxesState, [id]: !checkboxesState[id] }
    for (const key in newCheckboxesState) {
      if (newCheckboxesState[key]) queryStr += `source[]=${key[key.length - 1]}&`
    }
    setQuery(queryStr);
    typeof window !== 'undefined' &&
      localStorage.setItem('preferences', JSON.stringify(newCheckboxesState));
    setCheckboxesState(newCheckboxesState);
  }

  return (
    <div className='container'>
      <div className="control-panel">
        <SourceButton
          checked={checkboxesState.check1}
          onClick={() => changeSource("check1")}>
          Onliner</SourceButton>
        <SourceButton
          checked={checkboxesState.check2}
          onClick={() => changeSource("check2")}>
          TUT.BY</SourceButton>
        <SourceButton checked={checkboxesState.check3}
          onClick={() => changeSource("check3")}>
          NAVINY.BY</SourceButton>
      </div>
      <div className='content-container'>
        {content.map(item => (<div style={{ maxWidth: `${1 / columnCount * 100}%` }}>{item}</div>))}
      </div>
    </div >
  )
}

export default Content
