import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import LowerHeader from "./LowerHeader";
// import { BiCart } from "react-icons/bi";

import { LiaCartArrowDownSolid } from "react-icons/lia";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../Utility/firebase";

// const value = useContext(DataContext);
const Header = () => {
  // Get state and dispatch from context
  const [{ user, basket }, dispatch] = useContext(DataContext);
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
            <Link>
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
            <select defaultValue="ALL">
              <option>All</option>
            </select>

            <input type="text" placeholder="search product" />

            {/* icon */}
            <button
              type="submit"
              className={classes.searchButton}
              aria-label="Search"
            >
              <BsSearch />
            </button>
          </div>

          {/* right side link */}

          <div>
            <div className={classes.order__container}>
              <Link to="" className={classes.language}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                  alt="US flag"
                />

                <select>
                  <option value="">EN</option>
                </select>
              </Link>
              <Link to={!user && "/auth"}>
                <div>
                  {user ? (
                    <>
                      <p>Hello, {user?.email?.split("@")[0]}</p>
                      <span onClick={() => auth.signOut()}>Sign Out</span>
                    </>
                  ) : (
                    <>
                      <p>Hello, Sign In</p>
                      <span>Account & Lists</span>
                    </>
                  )}
                </div>
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
