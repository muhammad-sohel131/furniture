import {
  RiFacebookBoxFill,
  RiWhatsappLine,
  RiUserSharedLine,
} from "react-icons/ri";
import {
  FaTwitter,
  FaInstagramSquare,
  FaPinterestSquare,
  FaDollarSign,
} from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { VscHeart } from "react-icons/vsc";
import { BsArrowLeftRight } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { GiShoppingBag } from "react-icons/gi";
import { BiEuro } from "react-icons/bi";

import styles from "./Header.module.css";
import CategoryMenu from "./CategoryMenu";
import MegaMenu from "./MegaMenu";
import MultiLevelMenu from "./MultiLevelMenu";
import { useState } from "react";
import MobileHeader from "./MobileHeader";
import SearchInput from "./SearchInput";

const multiLevelMenuItems = [
  { text: "Desktops", link: "/" },
  { text: "Laptops", link: "/" },
  { text: "Phones", link: "/" },
  {
    text: "Components",
    link: "/",
    subMenu: [
      { text: "Eyar Phone", link: "/" },
      { text: "Head Phone", link: "/" },
    ],
  },
];

const aboutMenusItems = [
  { text: "Delivery Info", link: "/" },
  { text: "Terms & Conditions", link: "/" },
  { text: "Privacy Policy", link: "/" },
];

const Header = () => {
  const [scrollHeight, setScrollHeight] = useState(0);
  window.onscroll = function () {
    setScrollHeight(window.pageYOffset);
  };

  return (
    <header className={styles.header}>
      {/* Desktop Header */}

      <div className={styles.desktop_header}>
        {/* top header start */}
        <div className={styles.top_header}>
          <div className={styles.header_container}>
            <div className={styles.top_header_wrapper}>
              <div className={styles.social}>
                <ul className={styles.social_menu}>
                  <li className={styles.menu_item}>
                    <a href="/" className={styles.menu_link}>
                      <RiFacebookBoxFill />
                    </a>
                  </li>
                  <li className={styles.menu_item}>
                    <a href="/" className={styles.menu_link}>
                      <FaTwitter />
                    </a>
                  </li>
                  <li className={styles.menu_item}>
                    <a href="/" className={styles.menu_link}>
                      <FaInstagramSquare />
                    </a>
                  </li>
                  <li className={styles.menu_item}>
                    <a href="/" className={styles.menu_link}>
                      <RiWhatsappLine />
                    </a>
                  </li>
                  <li className={styles.menu_item}>
                    <a href="/" className={styles.menu_link}>
                      <FaPinterestSquare />
                    </a>
                  </li>
                </ul>
              </div>
              <div className={styles.contact}>
                <ul className={styles.contact_menu}>
                  <li className={styles.menu_item}>
                    <a href="tell:0293784">
                      <FiPhoneCall className={styles.phone_icon} />
                      CALL NOW:
                      <span>+84783935</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className={styles.current_currency}>
                <span>
                  <FaDollarSign />
                  USA Dollars <IoMdArrowDropdown />
                </span>
                <ul className={styles.currency_menu}>
                  <li className={styles.menu_item}>
                    <BiEuro />
                    Euro
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* top header end */}

        {/* middle header start */}
        <div className={styles.middle_header}>
          <div className={styles.header_container}>
            <div className={styles.middle_header_wrapper}>
              <div className={styles.logo}>
                <h2>Muhammad</h2>
              </div>
              <SearchInput />
              <div className={styles.cart_wrapper}>
                <div className={styles.account}>
                  <div className={styles.account_icon}>
                    <RiUserSharedLine />
                  </div>
                  <div className={styles.account_content}>
                    <span>Account</span>
                    <small>Login / Register</small>
                  </div>
                </div>
                <div className={styles.wishlist}>
                  <div className={styles.wishlist_icon}>
                    <span className={styles.product_quantity}>0</span>
                    <VscHeart />
                  </div>
                  <div className={styles.wishlist_content}>
                    <span>Wishlist</span>
                    <small>Edit your wishlist</small>
                  </div>
                </div>
                <div className={styles.productCompare}>
                  <div className={styles.productCompare_icon}>
                    <span className={styles.product_quantity}>0</span>
                    <BsArrowLeftRight />
                  </div>
                  <div className={styles.productCompare_content}>
                    <span>Compare</span>
                    <small>Product Comparision</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* middle header end */}

        {/* bottom header start */}
        <div
          className={
            scrollHeight < 200
              ? styles.bottom_header
              : `${styles.bottom_header} ${styles.positionfixed}`
          }
        >
          <div className={styles.header_container}>
            <div className={styles.bottom_header_wrapper}>
              <div className={styles.main_menu}>
                <ul className={styles.h_menu}>
                  <li className={styles.menu_item}>
                    <a href="/" className={styles.menu_link}>
                      Categories
                    </a>
                    <div className={styles.menu}>
                      <CategoryMenu />
                    </div>
                  </li>
                  <li className={styles.menu_item}>
                    <a href="/" className={styles.menu_link}>
                      Megamenu
                    </a>
                    <div className={styles.menu}>
                      <MegaMenu />
                    </div>
                  </li>
                  <li className={styles.menu_item}>
                    <a href="/" className={styles.menu_link}>
                      Multilavel
                    </a>
                    <div className={styles.menu}>
                      <MultiLevelMenu items={multiLevelMenuItems} />
                    </div>
                  </li>
                </ul>
              </div>
              <div className={styles.main_menu_2}>
                <ul className={styles.h_menu}>
                  <li className={styles.menu_item}>
                    <a href="/" className={styles.menu_link}>
                      About
                    </a>
                    <div className={styles.menu}>
                      <MultiLevelMenu items={aboutMenusItems} />
                    </div>
                  </li>
                  <li className={styles.menu_item}>
                    <a href="/" className={styles.menu_link}>
                      FAQ
                    </a>
                  </li>
                  <li className={styles.menu_item}>
                    <a href="/" className={styles.menu_link}>
                      Contact
                    </a>
                  </li>
                  <li className={styles.menu_item}>
                    <a href="/" className={styles.menu_link}>
                      Blog
                    </a>
                  </li>
                </ul>
                <div className={styles.cart}>
                  <div className={styles.cart_information}>
                    <span>0 item(s) - $0.00</span>
                  </div>
                  <div className={styles.cart_icon}>
                    <span className={styles.product_quantity}>0</span>
                    <GiShoppingBag />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* bottom header end */}
      </div>

      {/* mobile Header */}
      <div className={styles.mobile_header}>
        <MobileHeader />
      </div>
    </header>
  );
};

export default Header;
