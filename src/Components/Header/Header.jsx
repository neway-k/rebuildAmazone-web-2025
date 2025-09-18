import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import LowerHeader from "./LowerHeader";
// import { BiCart } from "react-icons/bi";

import { LiaCartArrowDownSolid } from "react-icons/lia";
import { DataContext } from "../DataProvider/DataProvider";

// const value = useContext(DataContext);
const Header = () => {
  // Get state and dispatch from context
  const [{ basket }, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  console.log(basket);

  return (
    <section className={classes.fixed}>
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
            <button className={classes.searchButton}>
              <BsSearch size={25} />
            </button>
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
              <Link to="/SignIn">
                <p> Hello, Sign In</p>
                <span>Account & Lists</span>
              </Link>

              <Link to="/orders">
                <p>Returns</p>
                <span>& Orders</span>
              </Link>

              {/* cart */}
              <Link to="/cart" className={classes.cart}>
                {/* icon */}
                <LiaCartArrowDownSolid size={35} />

                <span>{totalItem}</span>
              </Link>
            </div>
          </div>
        </section>
      </section>

      <LowerHeader />
    </section>
  );
};

export default Header;
