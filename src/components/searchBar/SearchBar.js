import React, { useState, useEffect } from "react";
import styles from "./searchBar.module.css";

function SearchBar() {
  const [userName, setUserName] = useState("");
  const [users, setUsers] = useState([]);

  const fetchData = async (user) => {
    const URL = `https://api.github.com/search/users?q=${user}`;

    try {
      let response = await fetch(URL);
      let data = await response.json();
      console.log(data);
      setUsers([data]);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(users);

  return (
    <>
      <form className={styles.searchForm}>
        <div>
          <input
            onChange={(e) => fetchData(e.target.value)}
            className={styles.formInput}
            type="text"
            placeholder="search user..
          "
          />
          <div className={styles.parent_headType}>
            {users.length === 0 || users[0].message ? (
              <div>please type name</div>
            ) : (
              users[0].items.slice(0, 20).map((item, index) => {
                const { login, avatar_url } = item;
                return (
                  <div className={styles.usersList}>
                    <a
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                      }}
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
              })
            )}
          </div>
        </div>
      </form>
    </>
  );
}

export default SearchBar;
