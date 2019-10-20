import React, { useState, useEffect } from "react"

import "./ItemCard.css"

export default function ItemCard(props) {
  const { item } = props;
  return (
    <a key={item.link} className='card' href={item.link} target='_blank' rel="noopener noreferrer">
      <h4>{item.sourceTitle}</h4>
      <p className='date'>{new Date(item.pubDate).toLocaleString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' })}<br />
        {new Date(item.pubDate).toLocaleTimeString('ru-RU')}
      </p>
      {!!item.thumbnail && <img
        src={item.thumbnail} alt={`cute random `} style={{ width: '100%', height: '100%' }}
      // onLoad={this.handleImageLoaded.bind(this)}
      // onError={this.handleImageErrored.bind(this)}
      />}
      <p className='description'>{item.title}</p>
    </a >
  )
}