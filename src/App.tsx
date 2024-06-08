import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import About from "./components/About";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Article1 from "./components/articles/Article1";
import Article2 from "./components/articles/Article2";
import Article3 from "./components/articles/Article3";

const theme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/about" element={<About />} />
          <Route path="/article1" element={<Article1 />} />
          <Route path="/article2" element={<Article2 />} />
          <Route path="/article3" element={<Article3 />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
