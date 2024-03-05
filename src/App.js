import React, { useEffect, useState } from "react";
import mailSvg from "./assets/mail.svg";
import manSvg from "./assets/man.svg";
import womanSvg from "./assets/woman.svg";
import manAgeSvg from "./assets/growing-up-man.svg";
import womanAgeSvg from "./assets/growing-up-woman.svg";
import mapSvg from "./assets/map.svg";
import phoneSvg from "./assets/phone.svg";
import padlockSvg from "./assets/padlock.svg";
import cwSvg from "./assets/cw.svg";
import Footer from "./components/footer/Footer";
import axios from "axios";

// const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

function App() {
  const [user, setUser] = useState("");
  const [name, setName] = useState(false);
  const [mail, setMail] = useState(false);
  const [age, setAge] = useState(false);
  const [map, setMap] = useState(false);
  const [phone, setPhone] = useState(false);
  const [password, setPassword] = useState(false);
  const [addList, setAddList] = useState([]);

  const [person, setPerson] = useState({
    firstname: "",
    email: "",
    phone: "",
    age: "",
  });

  const getUser = () => {
    const url = "https://randomuser.me/api/";

    axios(url)
      .then((res) => setUser(res.data.results[0]))
      .catch((err) => console.log(err));
  };

  console.log(person);

  useEffect(() => {
    setPerson({
      firstname: user?.name?.first,
      email: user?.email,
      phone: user?.phone,
      age: user?.dob?.age,
    });
  }, [user]);

  useEffect(() => {
    getUser();
  }, []);

  const handleAdd = () => {
    setAddList([...addList, person]);
  };

  console.log(addList);

  return (
    <main>
      <div className="block bcg-orange">
        <img src={cwSvg} alt="cw" id="cw" />
      </div>
      <div className="block">
        <div className="container">
          <img src={user?.picture?.large} alt="img" />

          {name && (
            <>
              <p className="user-title">My Name is</p>
              <p className="user-title">
                {user?.name?.first} {user?.name?.last}
              </p>
            </>
          )}

          {mail && (
            <>
              <p className="user-title">My Mail Address is</p>
              <p className="user-title">{user?.email}</p>
            </>
          )}

          {age && (
            <>
              <p className="user-title">My Age </p>
              <p className="user-title">{user?.dob?.age}</p>
            </>
          )}

          {map && (
            <>
              <p className="user-title">My Country is </p>
              <p className="user-title">{user?.location?.country}</p>
            </>
          )}

          {phone && (
            <>
              <p className="user-title">My Phone Number </p>
              <p className="user-title">{user?.phone}</p>
            </>
          )}
          {password && (
            <>
              <p className="user-title">My Pasword </p>
              <p className="user-title">{user?.cell}</p>
            </>
          )}

          <p className="user-value"></p>
          <div className="values-list">
            <button className="icon" data-label="name">
              <img
                onMouseEnter={() => setName(!name)}
                // onMouseLeave={() => setName(name)}
                src={womanSvg}
                alt="user"
                id="iconImg"
              />
            </button>
            <button className="icon" data-label="email">
              <img
                onMouseEnter={() => setMail(!mail)}
                // onMouseLeave={() => setMail(mail)}
                src={mailSvg}
                alt="mail"
                id="iconImg"
              />
            </button>
            <button className="icon" data-label="age">
              <img
                onMouseEnter={() => setAge(!age)}
                // onMouseLeave={() => setAge(age) && setAge(false)}
                src={womanAgeSvg}
                alt="age"
                id="iconImg"
              />
            </button>
            <button className="icon" data-label="street">
              <img
                onMouseEnter={() => setMap(!map)}
                // onMouseLeave={() => setMap(map)}
                src={mapSvg}
                alt="map"
                id="iconImg"
              />
            </button>
            <button className="icon" data-label="phone">
              <img
                onMouseEnter={() => setPhone(!phone)}
                // onMouseLeave={() => setPhone(phone)}
                src={phoneSvg}
                alt="phone"
                id="iconImg"
              />
            </button>
            <button className="icon" data-label="password">
              <img
                onMouseEnter={() => setPassword(!password)}
                // onMouseLeave={() => setPassword(password)}
                src={padlockSvg}
                alt="lock"
                id="iconImg"
              />
            </button>
          </div>
          <div className="btn-group">
            <button onClick={getUser} className="btn" type="button">
              new user
            </button>
            <button onClick={handleAdd} className="btn" type="button">
              add user
            </button>
          </div>
          <table className="table">
            <thead>
              <tr className="head-tr">
                <th className="th">Firstname</th>
                <th className="th">Email</th>
                <th className="th">Phone</th>
                <th className="th">Age</th>
              </tr>
            </thead>
            <tbody>
              {addList.map((item, i) => (
                <tr key={i} className="body-tr">
                  <th className="th">{item?.firstname}</th>
                  <th className="th">{item?.email}</th>
                  <th className="th">{item?.phone}</th>
                  <th className="th">{item?.age}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* <Footer /> */}
      </div>
    </main>
  );
}

export default App;
