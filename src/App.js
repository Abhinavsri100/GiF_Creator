/** @format */

import "./App.css";
import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
function App() {
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const apiKey = `17bf189e2b2a4b37a05f9689a17bb5a7`;
    const apiUrl = `https://newsapi.org/v2/everything?q=tesla&from=2023-03-25&sortBy=publishedAt&apiKey=${apiKey}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  }
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
