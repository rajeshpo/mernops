import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { useState } from "react";
import Axios from "axios";

const useStyles = makeStyles({
  root: {
    minWidth: 300,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Cards({ name, age, city, country, id }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [name1, setName] = useState(name);
  const [age1, setAge] = useState(age);
  const [city1, setCity] = useState(city);
  const [country1, setCountry] = useState(country);
  const [update, setUpdate] = useState(false);

  const deleteData = () => {
    Axios.post("https://mernops.herokuapp.com/deleteUser", { _id: id }).then((res) =>
      window.location.reload()
    );
  };

  const updateData = () => {
    const data = {
      name: name1,
      age: age1,
      city: city1,
      country: country1,
      _id: id,
    };
    Axios.post("https://mernops.herokuapp.com/update", data).then((res) => {
      window.location.reload();
    });
  };

  return (
    <div className="Cards">
      <p>
       <label>Name :</label>
        {update ? (
          <input value={name1} onChange={(e) => setName(e.target.value)} />
        ) : (
          name1
        )}
      </p>
      <p>
      <label>Age :</label>

        {update ? (
          <input value={age1} onChange={(e) => setAge(e.target.value)} />
        ) : (
          age1
        )}
      </p>
      <p>
      <label>City :</label>

        {update ? (
          <input value={city1} onChange={(e) => setCity(e.target.value)} />
        ) : (
          city1
        )}
      </p>
      <p>
       <label>Country :</label>
        
        {update ? (
          <input
            value={country1}
            onChange={(e) => setCountry(e.target.value)}
          />
        ) : (
          country1
        )}
      </p>
      {update ? <button onClick={() => updateData()}>Update</button> : null}
      <button onClick={() => setUpdate(true)}>Edit</button>
      <button onClick={() => deleteData()}>Delete</button>
    </div>
  );
}
