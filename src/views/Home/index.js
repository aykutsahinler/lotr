import Slider from "../../components/Home/Slider";
import About from "../../components/Home/About";
import Tolkien from "../../components/Home/Tolkien";

import "./style.css"

function Home() {
  return (
    <div>
      <Slider/>
      <About/>
      <Tolkien/>
    </div>
  );
}

export default Home;
