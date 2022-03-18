import React from 'react';

const Menu = (props) => {
  return (
  <>
    <div className="section-center">
      {props.items.map((item) => (
        <article key={item.id}> 
          <img src={item.img} alt={item.name} className='photo' />
          <div className="item-info">
            <header>
              <h4>{item.title}</h4>
              <h4 className="price">{item.price}</h4>
            </header>
            <p className="item-text">{item.desc}</p>
          </div>
        </article>
      ))}
    </div>
  </>
  )
};

export default Menu;
