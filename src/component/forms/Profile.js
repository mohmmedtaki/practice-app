import React, { useState, useEffect } from "react";

function Profile() {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    fetch(
      "https://fakerapi.it/api/v1/persons?_quantity&_gender=male&_birthday_start=2005-01-01"
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
                <div
                  style={{ border: "1px solid grey", background: "#69a4ac" }}
                >
                  <h4>{data.firstname + "  " + data.lastname}</h4>
                  <p>
                    {"Birthdate :" + data.birthday}
                    <p>
                      {"Gender :" + data.gender}
                      <p>
                        {"Email : " + data.email}
                        <p>
                          {"Website :" + data.website}
                          <h4 style={{ color: "red" }}>{data.phone}</h4>
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

export default Profile;
