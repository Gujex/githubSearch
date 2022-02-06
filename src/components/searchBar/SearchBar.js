import React, { useState, useEffect } from "react";
import Form from "../form/Form";

function SearchBar() {
  const [userName, setUserName] = useState("");
  const [users, setUsers] = useState([]);

  const fetchData = async (user) => {
    const URL = `https://api.github.com/search/users?q=${user}`;

    try {
      let response = await fetch(URL);
      let data = await response.json();
      setUsers([data]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form users={users} onFetchData={fetchData} />
    </>
  );
}

export default SearchBar;
