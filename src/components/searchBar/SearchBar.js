import React, { useState, useEffect } from "react";
import Form from "../form/Form";

const API_ERROR =
  "API rate limit exceeded for 185.70.52.89. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)";
function SearchBar() {
  // const [userName, setUserName] = useState("");
  const [users, setUsers] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [apiMessage, setApimessage] = useState(false);

  const fetchData = async (user) => {
    const URL = `https://api.github.com/search/users?q=${user}`;

    try {
      let response = await fetch(URL);
      if (response.status === 403) {
        setShowAlert(true);
        setApimessage(
          "API rate limit exceeded, please wait for a while and try again "
        );
      } else {
        setShowAlert(false);
      }

      let data = await response.json();
      setUsers([data]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form
        showAlert={showAlert}
        apiMessage={apiMessage}
        users={users}
        onFetchData={fetchData}
      />
    </>
  );
}

export default SearchBar;
