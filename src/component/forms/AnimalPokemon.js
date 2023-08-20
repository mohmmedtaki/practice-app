import React, { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function AnimalPokemon() {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    fetch(
      "https://fakerapi.it/api/v1/images?_quantity&_type=pokemon&_height=300"
    )
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
    <div style={{ marginTop: "10px", marginRight: "15px", marginLeft: "15px" }}>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="10px">
          {user.map((data) => (
            <div key={data.id}>
              <img
                src={data.url}
                style={{ width: "100%", display: "block" }}
                alt="..."
              />
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}

export default AnimalPokemon;
