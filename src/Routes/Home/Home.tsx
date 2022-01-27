import Header from "../../components/Header/Header";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <Header />
      <div className="bgImage">
        <img
          src="https://images.unsplash.com/photo-1518002171953-a080ee817e1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>
      <button className="more-btn">Learn more</button>
    </>
  );
};

export default Home;
