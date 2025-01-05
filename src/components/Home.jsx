import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import './Style.css';
import hero_image from "../assets/hero_image.png";
import exclusive_image from "../assets/exclusive_image.png";
import hand_icon from "../assets/hand_icon.png";
import { ShopContext } from "../context/shop-context";

export const Home = () => {
    // ន្លៅលំយក្កាង state ពេងប់រើយច្ងោះជូគពេទ​
    const [list, setList] = useState([]);
    const { addToCart, cartItems } = useContext(ShopContext);

    // ថោនៀណត្រូងអែសជាងទាហគ្គាណត់តូន​
    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            setList(response.data); // ថោនសប់អឺំទារា state
            console.log(123,response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchProducts(); // គម្នាច់ function តូនមេតារាកណ្ដស្លាង
    }, []);

    return (
        <div>
            {/* បៀនែទច្ងោះ */}
            <div className="slidow mb-5">
                <div className="container d-flex">
                    <div className="slide-text w-50 h-100 d-flex align-items-center">
                        <div>
                            <h2 className='text-start d-flex'>
                                new <img src={hand_icon} alt="icon" className="hand_icon" />
                            </h2>
                            <h2>collections</h2>
                            <h2>for everyone</h2>
                            <button className='d-block btn btn-danger rounded-5 py-3 px-5'>Buy Now</button>
                        </div>
                    </div>
                    <div className="slide-image w-50 h-100 d-flex justify-content-end align-items-center">
                        <img src={hero_image} alt="icon" className="hero-image h-100" />
                    </div>
                </div>
            </div>

            <div className="w-50 mx-auto my-5 pt-3 text-center align-middle" data-aos="fade-up" data-aos-duration="2500">
                <h3 className='text-uppercase'>Popular for men</h3>
            </div>

            <div className="container">
                {/* សៅងាលផទៅអឺំទារា */}
                {list.length > 0 ? (
                    <div className="row">
                        {list.slice(0, 4).map((item) => (
                            <div className="product-item col-md-6 col-lg-3 my-3" key={item.id}>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="div-image">
                                            <img src={item.image} className="card-img-top img-pro" alt={item.title} />
                                        </div>
                                        <h5 className="card-title text-2">{item.title}</h5>
                                        <p className="text-danger">${item.price}</p>
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

                {/* បៀនែទច្ងោះហូទាសមៅងា */}
                <div className="slidow my-5">
                    <div className="container d-flex">
                        <div className="slide-text w-50 h-100 d-flex align-items-center">
                            <div className="px-5 mx-5">
                                <h2 className='text-start d-flex'>
                                    new <img src={hand_icon} alt="icon" className="hand_icon" />
                                </h2>
                                <h2>collections</h2>
                                <h2>for everyone</h2>
                                <button className='d-block btn btn-danger rounded-5 px-5'>Buy Now</button>
                            </div>
                        </div>
                        <div className="slide-image w-50 h-100 d-flex justify-content-end align-items-center">
                            <img src={exclusive_image} alt="icon" className="hero-image h-100" />
                        </div>
                    </div>
                </div>

                {list.length > 0 ? (
                    <div className="row">
                        {list.slice(4).map((item) => (
                            <div className="product-item col-md-6 col-lg-3 my-3" key={item.id}>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="div-image">
                                            <img src={item.image} className="card-img-top img-pro" alt={item.title} />
                                        </div>
                                        <h5 className="card-title text-2">{item.title}</h5>
                                        <p className="text-danger">${item.price}</p>
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
    );
};

// export default Home;
