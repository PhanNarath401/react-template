import React from 'react'
import axios from 'axios';
import  { useEffect, useState , useContext} from 'react';
// import './Style.css'
import banner_kids from "../assets/banner_kids.png";
import { ShopContext } from "../context/shop-context";

export const Kids = () => {
  const [list, setList] = useState([]);  // Correctly initializing state to an empty array
  const { addToCart, cartItems } = useContext(ShopContext);

    const ListProduct = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            setList(response.data);  // Setting state with the fetched data
            console.log(list)
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        ListProduct();  // Call the ListProduct function when the component mounts
    }, []);  // Empty dependency array to ensure it runs only once when the component mounts

  return (
    <div>
        <div className="slide-image w-100 h-100 d-flex justify-content-end align-items-center ">
            <img src={banner_kids} alt="icon" className="hero-image w-100" />
        </div>

      <div className="container">
          <div className="w-100 my-3 pt-3 d-flex justify-content-between align-middle" data-aos="fade-up" data-aos-duration="2500">
              <h5 className='text-uppercase'>Populer for kids </h5>
              <h5 className='text-'>More -{'>'}</h5>
          </div>
          <div>
              {list.length > 0 ? (
              <div className="row ">
              {list.map(item => (
                  <div className="product-item col-md-6 col-lg-3 my-3" >
                      <div className="card">
                      <div className="card-body"  key={item.id} >
                          <div className="div-image">
                              <img src={item.image} className="card-img-top img-pro" alt={item.title} />
                          </div>
                          <h5 className="card-title text-2">{item.title}</h5>
                          <p className="text-danger ">{item.price}$</p>
                          <button className="btn btn-primary" onClick={() => addToCart(item.id)}>
                                Order {cartItems[item.id] > 0 && <> ({cartItems[item.id]})</>}
                            </button>
                      </div>
                  </div>              
                  </div>
              ))}
              
          </div>
          
              ) : (
                  <p>Loading products...</p>
              )}
          </div>
      </div>
    </div>
  )
}
