import React, { useState } from "react";

function App() {
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState({ name: "", age: "" });
  const [selectedStudent, setSelectedStudent] = useState(null);

  return (
    <div>
      <h1>학생 목록</h1>
      
    </div>
  )
}

export default App;
