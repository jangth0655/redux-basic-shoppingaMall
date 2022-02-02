import { useEffect, useRef, useState } from "react";

import ItemList from "../../components/ItemList/ItemList";
import { getItems } from "../../slicese/actions";
import { useAppDispatch, useAppSelector } from "../../store";
import "./Home.scss";

const Home = () => {
  const [showing, setShowing] = useState(false);
  const detailRef = useRef<HTMLDivElement>(null);
  const loading = useAppSelector((state) => state.itemSlice.isLoading);
  const dispatch = useAppDispatch();
  console.log(loading);

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  const onClick = () => {
    setShowing((pre) => !pre);
    detailRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  };
  return (
    <main className="main">
      <div className="bgImage">
        <img
          src="https://images.unsplash.com/photo-1518002171953-a080ee817e1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>
      <button onClick={onClick} className="more-btn">
        Learn more
      </button>
      {showing ? <ItemList /> : ""}
    </main>
  );
};

export default Home;
