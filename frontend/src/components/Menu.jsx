import React from 'react';
import {data} from '../restApi.json'; // ✅ make sure this path is correct and file exists

const Menu = () => {
  return (
    <section className='menu' id='menu'>
     
     <div className="container">
        <div className="heading_section">
            <h1 className='heading'> POPULER DISHES</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt beatae repellendus alias iure, excepturi 
                facilis explicabo inventore dolore deleniti laborum ipsum eum illo? Minus ullam eligendi, qui sunt adipisci facilis.</p>
        </div>
        <div className="dishes_container">
            {
                data[0].dishes.map(element =>{
                    return(

                        <div className="card" key={element.id}>
                            <img src={element.image} alt={element.title} />
                            <h3>{element.title}</h3>
                            <button>{element.category}</button>
                        </div>
                    )
                })
            }
        </div>
     </div>
    </section>
  );
}

export default Menu;
