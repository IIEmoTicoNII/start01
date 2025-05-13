import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
import dummy from "../db/data.json";
import Word from "./word";
import useFetch from "../hooks/useFetch";
import { supabase } from "../lib/supabaseClient";

export default function Day() {
  //<Route path="/day/:day" element={<Day></Day>} />
  const { day } = useParams();

  const { data, error } = fetchWords(day);
  // const words = useFetch(`http://localhost:3010/words?day=${day}`);
  // const [words, setWords] = useState([]); //hooks를 사용하지 않고 fetch를 사용한 경우.
  // useEffect(() => {
  //   fetch(`http://localhost:3010/words?day=${day}`)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setWords(data);
  //     });
  // }, [day]);

  //   const wordList = dummy.words.filter((word) => word.day === day); <- '==='를 사용하려면 json 파일의 숫자를 문자열로 일치시켜야함.
  const wordList = dummy.words.filter((word) => word.day == day); //- 선생님 코드
  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {wordList.map((word) => (
            //dummy.words.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}
