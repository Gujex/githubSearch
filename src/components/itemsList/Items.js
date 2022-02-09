import React from "react";
import styles from "./items.module.css";

function Items(props) {
  return (
    <div className={styles.itemsDiv}>
      {props.users.length === 0 || props.users[0].message
        ? ""
        : props.users[0].items.slice(0, 20).map((item, index) => {
            const { login, avatar_url } = item;
            return (
              <div key={index} className={styles.usersList}>
                <a
                  className={styles.linkContainer}
                  key={index}
                  href={`https://github.com/${login}`}
                  target="_blank"
                >
                  <div>
                    <img src={avatar_url} alt="" />
                  </div>
                  <div style={{ marginLeft: "10px" }}>{login}</div>
                </a>
              </div>
            );
          })}
    </div>
  );
}

export default Items;
