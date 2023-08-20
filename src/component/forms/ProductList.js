import React, { useState, useEffect } from "react";

function ProductList() {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    fetch(
      "https://fakerapi.it/api/v1/products?_quantity&_taxes=12&_categories_type=uuid"
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
    <>
      <div
        className="clearfix"
        style={{ marginTop: "10px", marginRight: "10px", marginLeft: "10px" }}
      >
        <div className="row">
          {user.map((data) => (
            <div
              className="col-md-4 animated fadeIn"
              style={{
                textAlign: "center",
                marginTop: "20px",
              }}
              key={data.id}
            >
              <div>
                <div style={{ border: "1px solid #5767aa" }}>
                  <h4>{data.name}</h4>
                  <p>
                    {"Price :" + data.price}
                    <p>
                      {"Net_price :" + data.net_price}
                      <p>
                        {"Taxes : " + data.texes}

                        <p style={{ color: "#5767aa" }}>
                          {"Description :" + data.description}
                        </p>
                      </p>
                    </p>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductList;
