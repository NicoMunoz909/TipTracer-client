import React, { useState } from "react";
// import { useEffect } from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  // useEffect(() => {
  //   const updateClock = setInterval(setDate(new Date()), 1000);
  //   return () => clearInterval(updateClock);
  // }, []);

  return (
    <div className="header__clock">
      <p style={{ textTransform: "capitalize" }}>
        {date.toLocaleDateString("es-MX", {
          weekday: "short",
          day: "2-digit",
          month: "2-digit",
        })}
      </p>
      {/* <p>
        {date.toLocaleTimeString("es-MX", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p> */}
    </div>
  );
};

export default Clock;
