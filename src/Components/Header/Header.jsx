import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import LowerHeader from "./LowerHeader";
// import { BiCart } from "react-icons/bi";

import { LiaCartArrowDownSolid } from "react-icons/lia";

const Header = () => {
  return (
    <>
      <section>
        <section className={classes.header__container}>
          <div className={classes.logo__container}>
            {/* logo  */}
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </Link>
            {/* delivery */}
            <div className={classes.delivery}>
              <span>
                {/* icon */}
                <SlLocationPin />
              </span>

              <div>
                <p>Deliver to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          <div className={classes.search}>
            {/* search */}
            <select name="" id="">
              <option value="">All</option>
            </select>

            <input type="text" placeholder="search product" />

            {/* icon */}
            <button className={classes.searchButton}></button>
            <BsSearch size={25} />
          </div>

          {/* right side link */}

          <div>
            <div className={classes.order__container}>
              <a href="" className={classes.language}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                  alt="US flag"
                />

                <select>
                  <option value="">EN</option>
                </select>
              </a>
              <a href="">
                <p> Hello, Sign In</p>
                <span>Account & Lists</span>
              </a>

              <Link to="/orders">
                <p>Returns</p>
                <span>& Orders</span>
              </Link>

              {/* cart */}
              <Link to="/cart" className={classes.cart}>
                {/* icon */}
                <LiaCartArrowDownSolid size={35} />

                <span>0</span>
              </Link>
            </div>
          </div>
        </section>
      </section>

      <LowerHeader />
    </>
  );
};

export default Header;
