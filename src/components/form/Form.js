import React from "react";
import Items from "../itemsList/Items";
import styles from "./form.module.css";
import { FaSearch } from "react-icons/fa";

function Form(props) {
  return (
    <form className={styles.wrapper}>
      <div className={styles.search_div}>
        <div className={styles.inputParent}>
          <FaSearch className={styles.searchIcon} />
          <input
            onChange={(e) => props.onFetchData(e.target.value)}
            className={styles.formInput}
            type="text"
            placeholder="Search user..
    "
          />
        </div>
        <Items users={props.users} />
      </div>
      {props.showAlert && <p>{props.apiMessage}</p>}
    </form>
  );
}

export default Form;
