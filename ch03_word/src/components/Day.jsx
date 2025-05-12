import { useParams } from "react-router-dom";
import dummy from "../db/data.json";
import Word from "./word";

export default function Day() {
  //<Route path="/day/:day" element={<Day></Day>} />
  const { day } = useParams();
  //   const wordList = dummy.words.filter((word) => word.day === day);
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
