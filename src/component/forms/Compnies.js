import React, { useState, useEffect } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import "./Companies.css";

function Compnies(props) {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    fetch("https://fakerapi.it/api/v1/companies?_quantity=3")
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

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        Compnies list
      </h1>
      <Table
        class="table table-dark table-striped"
        style={{ background: "black", color: "white", opacity: "0.8" }}
      >
        <Thead style={{ border: "1px solid grey" }}>
          <Tr style={{ border: "1px solid black" }}>
            <Th scope="col">No</Th>
            <Th scope="col">Image</Th>
            <Th scope="col">Name</Th>
            <Th scope="col">country</Th>
            <Th scope="col">Website</Th>
            <Th scope="col">Phone</Th>
            <Th scope="col">Address</Th>
          </Tr>
        </Thead>

        {user.map((data) => (
          <Tbody key={data.id}>
            <Tr>
              <Td>{data.id}</Td>
              <Td>
                <img
                  src="https://picsum.photos/640/360"
                  style={{
                    maxWidth: 150,
                    marginTop: "20px",
                    marginBottom: "20px",
                  }}
                  alt=""
                />
              </Td>
              <Td>{data.name}</Td>
              <Td>{data.country}</Td>
              <Td>{data.website}</Td>
              <Td>{data.phone}</Td>
              <Td>
                <Table>
                  <Tbody>
                    {data.addresses.map((data, i) => (
                      <Tr>
                        <Td>{i}. </Td>
                        <Td>{data.street + ", " + data.city}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </Td>
            </Tr>
          </Tbody>
        ))}
      </Table>
    </>
  );
}

export default Compnies;
