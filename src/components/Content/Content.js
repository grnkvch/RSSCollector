
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import dataConditioner from '../../helpers/dataConditioner'

import * as actions from '../../redux/actions'

import { getSources, getContent } from '../../redux/selectors'

import ItemCard from '../ItemCard'

import './Content.css'


const Content = props => {
  const { fetchSource,
    sources,
    fetchContent,
    data
  } = props;

  const [columnCount, setColumnCount] = useState(1);
  const [content, setContent] = useState([]);

  useEffect(() => {
    const setCount = () => {
      const width = document.querySelector('.content-container').offsetWidth
      if (!width) return;
      const n = Math.floor(width / 200) < 1 ? 1 : Math.floor(width / 200);
      if (n !== columnCount) setColumnCount(n)
    }
    setCount();
    window.addEventListener('resize', setCount)
  }, [])

  useEffect(() => {
    fetchContent()
  }, [sources])

  useEffect(() => {
    fetchSource()
  }, [])

  useEffect(() => {
    if (!Array.isArray(data)) return;
    setContent(dataConditioner(data, columnCount,
      item => {
        return (<ItemCard item={item} />)
      }));
  }, [columnCount, data])

  return (
    <div className='content-container'>
      {content.map(item =>
        (<div
          className='content-column'
          style={{ maxWidth: `${1 / columnCount * 100}%` }}>
          {item}
        </div>))}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  sources: getSources(state),
  data: getContent(state),
})

const mapDispatchToProps = { ...actions }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);
