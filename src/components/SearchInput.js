import styles from './SearchInput.module.css'
import { IoMdArrowDropdown, IoMdSearch } from 'react-icons/io'

import SearchMenu from "./SearchMenu";

const SearchInput = () => {
    return(
        <div className={styles.search}>
                <form>
                  <div className={styles.categoryButton}>
                    <span>
                      {" "}
                      All <IoMdArrowDropdown />
                    </span>
                    <div className={styles.menu}>
                      <span></span>
                      <SearchMenu />
                    </div>
                  </div>
                  <input
                    type="text"
                    placeholder="Search here..."
                    className={styles.searchInput}
                  />
                  <button type="submit" className={styles.serach_submit_btn}>
                    <IoMdSearch />
                  </button>
                </form>
              </div>
    )
}

export default SearchInput