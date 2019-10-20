import React from "react"

import "./ItemCard.css"

export default function ItemCard(props) {
  const { item } = props;
  return (
    <a key={item.link}
      className='card'
      href={item.link}
      target='_blank'
      rel="noopener noreferrer">

      <div className='dateTime'>
        <p>
          {new Date(item.pubDate).toLocaleString('ru-RU',
            { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        <p>
          {new Date(item.pubDate).toLocaleTimeString('ru-RU')}
        </p>
      </div>
      <p className='source'>{item.sourceTitle}</p>
      <p className='description'>{item.title}</p>
      {!!item.thumbnail && <img
        src={item.thumbnail} alt={`cute random `} style={{ width: '100%', height: '100%' }}
      // onLoad={this.handleImageLoaded.bind(this)}
      // onError={this.handleImageErrored.bind(this)}
      />}
    </a >
  )
}