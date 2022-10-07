import styles from "./SearchMenu.module.css";

const categoryItems = [
  "Fasion",
  "Bags",
  "Health & Beauty",
  "footware",
  "food",
  "home",
  "Electronics",
  "baby and kids",
  "followers",
  "Health & Beauty",
  "footware",
  "food",
  "home",
  "Electronics",
  "baby and kids",
  "Fasion",
  "Bags",
  "Health & Beauty",
  "footware",
];

const SearchMenu = () => {
  return (
    <div className={styles.searchMenu}>
      <ul>
        <li className={styles.menu_item}>
          <a href="/" className={styles.menu_link}>
            all
          </a>
        </li>
        {categoryItems.map((category) => {
          return (
            <li className={styles.menu_item}>
              <a href="/" className={styles.menu_link}>
                {category}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchMenu;
