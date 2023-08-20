import React from "react";
import { useNavigate } from "react-router-dom";

function Animal() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/AnimalImage");
  }

  function click() {
    navigate("/AnimalPokemon");
  }

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "25px" }}>
        Click name of animal to see Images
      </h1>
      <ol style={{ marginLeft: "20px" }}>
        <li
          style={{
            alignItems: "center",
            cursor: "pointer",
            fontSize: "20px",
            textDecoration: "underline",
            color: "blue",
          }}
          onClick={(e) => handleClick()}
        >
          kittens
        </li>

        <li
          style={{
            alignItems: "center",
            cursor: "pointer",
            fontSize: "20px",
            textDecoration: "underline",
            marginTop: "15px",
            color: "blue",
          }}
          onClick={(e) => click()}
        >
          Pokemon
        </li>
      </ol>
    </>
  );
}

export default Animal;
