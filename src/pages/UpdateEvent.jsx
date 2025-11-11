import React, { use, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const UpdateEvent = () => {
  const { user } = use(AuthContext);
  const [myEvents, setMyEvents] = useState([]);
  //   const navigate = useNavigate();
  console.log(user);

  useEffect(() => {
    fetch(`http://localhost:3000/manage-event?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyEvents(data);
      });
  }, [user.email]);
  console.log("event", myEvents);
  //
  return <div>hello update</div>;
};

export default UpdateEvent;
