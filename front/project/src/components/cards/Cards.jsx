import React, { useEffect } from "react";
import "./cards.scss";
import { useSelector, useDispatch } from "react-redux";
import { addToBasket, addToWishlist, getAllData } from "../../redux/slices/productSlice";
import { GoHeart } from "react-icons/go";
import { MdShoppingCart } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';



import { Autoplay ,Navigation,Pagination} from 'swiper/modules';

const Cards = () => {
  const products = useSelector((state) => state.products.products);
  const wishlist = useSelector((state) => state.products.wishlist);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllData());
  }, []);

  return (
    <section>
      <div className="container">
        <Swiper 
        loop={true}
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        navigation={true} 
          pagination={{
            clickable: true,
          }}
          speed={9000}
          modules={[Autoplay,Navigation,Pagination]} 
          className="mySwiper"
          autoplay={{
            delay:1,
            disableOnInteraction:false
        }}
        >
          {products.map((p) => (
            <SwiperSlide className="cart" key={p._id}>
              <img src={p.image} />
              <h3>{p.title}</h3>
              <p>$ {p.price}</p>
              <div className="icon">
               
                <MdShoppingCart  onClick={(e)=>{
                    e.preventDefault(),e.stopPropagation()
                    dispatch(addToBasket(p))
                    alert("added to basket")
                }} />


                 {
                    wishlist.find((q)=>q._id ===p._id)?(
                        <GoHeart style={{color:"red"}} onClick={(e)=>{
                            e.preventDefault(),e.stopPropagation()
                            dispatch(addToWishlist(p))
                            alert("added to wishlist")
                        }} />
                    ) :(
                        <GoHeart onClick={(e)=>{
                            e.preventDefault(),e.stopPropagation()
                            dispatch(addToWishlist(p))
                            alert("added to wishlist")
                        }} />
                    )
                 }
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Cards;
