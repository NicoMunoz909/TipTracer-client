import { TiArrowSync } from "react-icons/ti";

const Weekly = ({ date, onChange }) => {
  function getWeekRange(date) {
    const firstDayOfWeek = date.getDate() - date.getDay() + 1; // Calculate the first day of the week
    const lastDayOfWeek = firstDayOfWeek + 6; // Add six days to get the last day of the week

    const firstDay = new Date(
      date.getFullYear(),
      date.getMonth(),
      firstDayOfWeek
    );
    const lastDay = new Date(
      date.getFullYear(),
      date.getMonth(),
      lastDayOfWeek
    );

    return {
      firstDay,
      lastDay,
    };
  }

  return (
    <div className="datebar__date">
      <p style={{ textTransform: "capitalize" }}>semana</p>
      <div>
        <p>
          {getWeekRange(date).firstDay.toLocaleString("en-GB", {
            month: "short",
            day: "2-digit",
          })}
          -
          {getWeekRange(date).lastDay.toLocaleString("en-GB", {
            month: "short",
            day: "2-digit",
          })}
        </p>
        <form action="">
          <input
            type="date"
            defaultValue=""
            id="fecha"
            name="fecha"
            onChange={(e) => onChange(new Date(e.target.value + "T00:00:00"))}
          ></input>
          <TiArrowSync />
        </form>
      </div>
    </div>
  );
};

export default Weekly;
