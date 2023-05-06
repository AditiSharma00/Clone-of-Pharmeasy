import React, { useEffect, useState } from "react";
import styles from "./CartItem.module.css";

const CartItem = ({ image, title, price }) => {
  // const handleDelete = (id) => {
  //   let data = JSON.parse(localStorage.getItem("cartitem"));
  //   let finaldata = data.filter((ele) => {
  //     if (ele.id != id) return ele;
  //   });
  //   localStorage.setItem("cartitem", JSON.stringify(finaldata));
  //   setdata(finaldata);
  // };
  // useEffect(() => {}, []);

  // function updateqty(id, value) {
  //   let data = JSON.parse(localStorage.getItem("cartitem"));
  //   let finaldata = data.map((ele) => {
  //     if (ele._id == id) return { ...ele, qty: Number(value) };
  //     else {
  //       return ele;
  //     }
  //   });
  //   localStorage.setItem("cartitem", JSON.stringify(finaldata));
  //   setdata(finaldata);
  // }
  // const [cartItems, setCartItems] = useState([]);
  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem("cartItems")) || [];
  //   setCartItems(items);
  //    console.log(items);
  // }, []);
  // console.log(cartItems[0].image_src);
  return (
    <>
      <div className={styles.cartItemsDisplay}>
        <div className={styles.leftCartSection}>
          <div className={styles.imageWrapper}>
            <img src={image} alt="cart item" className={styles.cartItemImage} />
          </div>
        </div>
        <div className={styles.rightCartSection}>
          <div className={styles.itemTitleWrapper}>
            <h1 className={styles.cartItemsTitle}>{title}</h1>
            <div className={styles.deleteButtonWrapper}>
              <button
                className={styles.deleteButton}
                //  onClick={() => handleDelete()}
              >
                <img
                  src="https://assets.pharmeasy.in/web-assets/dist/2fb50086.svg"
                  alt="delete"
                  className={styles.deleteImage}
                />
              </button>
            </div>
          </div>

          <div className={styles.priceAndQuantityWrapper}>
            <div className={styles.priceWrapper}>
              <div className={styles.actualPrice}>₹{price}</div>
            </div>
          </div>
          <div className={styles.arrivalDate}>
            <span className={styles.span1}>Delivery by</span>
            <span className={styles.span2}>
              &nbsp;Tue 4 Oct, before 10:00 AM
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
