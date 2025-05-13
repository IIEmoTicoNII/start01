import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import dummy from "../db/data.json";
import { supabase } from "../lib/supabaseClient";
export default function DayList() {
  // const [days, setDays] = useState([]);
  const [words, setWords] = useState([]);
  useEffect(() => {
    //   fetch("http://localhost:3010/days")
    // .then((res) => {
    //   return res.json();
    // })
    // .then((data) => {
    //   setDays(data);
    // });
    const fetchWords = async () => {
      const { data, error } = await supabase.from("words").select("*");

      if (error) console.error("Error fetching data:", error);
      else setWords(data);
    };

    fetchWords();
  }, []);
  return (
    <ul className="list_day">
      {/* {dummy.days.map((day) => (
        <li key={day.id}>
          <Link to={`/day/${day.day}`}>Day{day.day}</Link>
        </li> */}

      {words.map((word) => (
        <li key={word.id}>{word.eng}</li>
      ))}
    </ul>
  );
}
