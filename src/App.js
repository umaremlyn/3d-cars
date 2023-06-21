import "./App.css";
import Navbar from "./Components/Navbar/navbar";
import Header from "./Components/header/header";
import Post from "./Components/post/post";
import Custom from "./Components/custom/custom";
import SecondHeader from "./Components/second_header/second";
import Popular from "./Components/popular/popular";
import Footer from "./Components/footer/footer";

// import * as THREE from 'three';

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Post />
      <Custom />
      <SecondHeader />
      <Popular />
      <Footer />
      {/* <THREE /> */}
    </>
  );
};
export default App;
