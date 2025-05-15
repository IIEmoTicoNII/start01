import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// function MyComponent() {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       안녕하세요!
//     </motion.div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <MyComponent />
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <motion.button
//         whileHover={{ scale: 1.2 }} // 마우스 오버 시 크기 확대
//         whileTap={{ scale: 0.9 }} // 클릭 시 크기 축소
//         style={{
//           padding: "10px 20px",
//           fontSize: "16px",
//           cursor: "pointer",
//           border: "none",
//           backgroundColor: "#007BFF",
//           color: "white",
//           borderRadius: "5px",
//         }}
//       >
//         클릭해보세요
//       </motion.button>
//     </div>
//   );
// }

// function App() {
//   return (
//     <motion.div
//       drag
//       dragConstraints={{ left: 0, right: 300, top: 0, bottom: 200 }}
//       style={{ width: 100, height: 100, background: "skyblue" }}
//     >
//       드래그 가능
//     </motion.div>
//   );
// }

// function ToggleBox() {
//   const [show, setShow] = useState(true);

//   return (
//     <>
//       <button onClick={() => setShow(!show)}>Toggle</button>
//       <AnimatePresence>
//         {show && (
//           <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 50 }}
//             transition={{ duration: 0.5 }}
//           >
//             등장 & 퇴장 애니메이션
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

// function App() {
//   return (
//     <div>
//       <h1>프레임 애니메이션 예시</h1>
//       <ToggleBox />
//     </div>
//   );
// }

// function App() {//기존 피자 코드
//   return (
//     <div className="App">
//       <Router>
//         <Navbar />
//         <Switch>
//           <Route path="/" exact component={Home} />
//           <Route path="/menu" exact component={Menu} />
//           <Route path="/about" exact component={About} />
//           <Route path="/contact" exact component={Contact} />
//         </Switch>
//         <Footer />
//       </Router>
//     </div>
//   );
// }

function AnimatedRoutes() {
  const location = useLocation(); // 현재 경로 감지

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
