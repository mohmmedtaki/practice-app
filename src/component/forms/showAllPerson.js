import React, { useState, useEffect } from "react";
import "./showAllPerson.css";

const ShowAllPerson = () => {
  const [user, setUser] = useState([]);
  const [userPage, setUserPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);

  const numOfTotalPages = Math.ceil(user.length / userPage);
  const pages = [...Array(numOfTotalPages + 1).keys()].slice(1);
  //console.log(pages);
  const indexOfLastTodo = currentPage * userPage;
  const indexOfFirstTodo = indexOfLastTodo - userPage;

  const visibleTodos = user.slice(indexOfFirstTodo, indexOfLastTodo);

  const fetchData = () => {
    fetch("https://fakerapi.it/api/v1/users?_quantity&_gender=male")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        let sakina = data.data;
        setUser(sakina);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const prevPageHandler = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  const nextPageHandler = () => {
    if (currentPage !== numOfTotalPages) setCurrentPage(currentPage + 1);
  };
  return (
    <>
      <select onChange={(e) => setUserPage(e.target.value)}>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="10">10</option>
      </select>
      <div>
        <h1
          style={{
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          All users
        </h1>

        <div className="containerr">
          <table className="App">
            <thead className="theadddd">
              <tr className="trrr">
                <th>No.</th>
                <th>Uuid</th>
                <th>Name</th>
                <th>Username</th>
                <th>Password</th>
                <th>Email</th>
                <th>Website</th>
              </tr>

              {visibleTodos.map((data) => (
                <tbody key={data.id}>
                  <tr className="trrr">
                    <td>{data.id}</td>
                    <td>{data.uuid}</td>
                    <td>
                      {data.firstname} {data.lastname}
                    </td>

                    <td>{data.username}</td>
                    <td>{data.password}</td>
                    <td>{data.email}</td>
                    <td>{data.website}</td>
                  </tr>
                </tbody>
              ))}
            </thead>
          </table>
        </div>

        <table className="tablee">
          <td className="linee">
            <span className="prevv" onClick={prevPageHandler}>
              {"<<"}
            </span>
          </td>
          <td className="linee">
            <p>
              {pages.map((page) => (
                <td className="lineee">
                  <span
                    style={{ fontSize: "24px", cursor: "pointer" }}
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`${currentPage === page ? "activ" : ""}`}
                  >{`${page} `}</span>
                </td>
              ))}
            </p>
          </td>
          <td className="linee">
            <span className="nextt" onClick={nextPageHandler}>
              {">>"}
            </span>
          </td>
        </table>
      </div>
    </>
  );
};

export default ShowAllPerson;
