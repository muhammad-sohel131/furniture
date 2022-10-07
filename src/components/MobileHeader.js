import { useState } from "react";

import styles from "./MobileHeader.module.css";

// icons
import { FiLogIn } from "react-icons/fi";
import { MdAppRegistration } from "react-icons/md";
import { BiDownArrow, BiSearch } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { VscHeart } from "react-icons/vsc";
import { GiShoppingBag } from "react-icons/gi";
import MobileMenu from "./MobileMenu";
import { IoMdArrowDropdown } from "react-icons/io";
import SearchInput from "./SearchInput.js";

const MobileHeader = () => {
  let [show, setShow] = useState(false);
  const showMenu = () => {
    setShow(!show);
  };

  return (
    <>
      {/* top mobile header */}
      <div className={styles.top_mobile_header}>
        <div className="container">
          <div className={styles.top_mobile_header_wrapper}>
            <div className={styles.right_column}>
              <div className={styles.loginBtn}>
                <FiLogIn />
                Login
              </div>
              <div className={styles.registerBtn}>
                <MdAppRegistration />
                Register
              </div>
            </div>
            <div className={styles.left_column}>
              <div className={styles.change_currency}>
                <div className={styles.current_currency}>
                  <span>
                    USA <IoMdArrowDropdown />
                  </span>
                  <ul className={styles.currency_menu}>
                    <li className={styles.menu_item}>Euro</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bottom mobile header */}
      <div className={styles.bottom_mobile_header}>
        <div className="container">
          <div className={styles.bottom_mobile_header_wrapper}>
            <div className={styles.mobile_logo}>
              <h2>Muhammad</h2>
            </div>
            <div className={styles.mobile_bar_group}>
              <div className={styles.menu_trigger}>
                <span onClick={showMenu}>
                  <AiOutlineMenu />
                </span>
                <div
                  className={styles.mobileMenu}
                  style={show ? { right: "0%" } : { right: "-100%" }}
                >
                  <span className={styles.hideMenu} onClick={showMenu}>
                    X
                  </span>
                  <MobileMenu />
                </div>
              </div>
              <div className={styles.wishList}>
                <span className={styles.product_quantity}>0</span>
                <VscHeart />
              </div>
              <div className={styles.searchBar}>
                <BiSearch />
              </div>
              <div className={styles.mobileSearch}>
            <SearchInput />
          </div>
              <div className={styles.shopping_bag}>
                <span className={styles.product_quantity}>0</span>
                <GiShoppingBag />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileHeader;
