import React from 'react'

const Item = () => {
    return (
      <main>
        {this.props.items.map(el => (
            <h1>{el.title}</h1>
        ))}
      </main>
    )
  }

export default Item;