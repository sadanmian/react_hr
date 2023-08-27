import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

// export default class App extends Component {

//   state = {
//     progress: 0,
//   };
//   setProgress = (progress) => {
//     this.setState({
//       progress: progress,
//     });
//   };
//   render() {

//   }
// }

export default function App() {
  const apiKey = process.env.REACT_APP_API;

  const [progressBar, setProgressBar] = useState(0);

  const setProgress = (progress) => {
    setProgressBar(progress);
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <LoadingBar height={3} color="#f11946" progress={progressBar} />
        <Routes>
          <Route
            exact
            path={"/"}
            element={
              <News apiKey={apiKey} setProgress={setProgress} key={"general"} />
            }
          />
          <Route
            exact
            path={"/business"}
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key={"technology"}
                category={"business"}
              />
            }
          />
          <Route
            exact
            path={"/entertainment"}
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key={"entertainment"}
                category={"entertainment"}
              />
            }
          />
          <Route
            exact
            path={"/health"}
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key={"health"}
                category={"health"}
              />
            }
          />
          <Route
            exact
            path={"/science"}
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key={"science"}
                category={"science"}
              />
            }
          />
          <Route
            exact
            path={"/sports"}
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key={"sports"}
                category={"sports"}
              />
            }
          />
          <Route
            exact
            path={"/technology"}
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key={"technology"}
                category={"technology"}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
