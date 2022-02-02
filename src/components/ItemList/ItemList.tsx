import { useAppSelector } from "../../store";
import "./Items.scss";

const ItemList = () => {
  const items = useAppSelector((state) => state.itemSlice.data);
  console.log(items);

  return (
    <main>
      <ul className="item-ul">
        {items.map((item) => (
          <li key={item.id}>
            <img
              style={{ width: "100%" }}
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              alt="img"
            />
            <div className="item-description">
              <span className="item-title">{item.title}</span>
              <span className="item-price">{item.price}</span>
              <p className="item-content">{item.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default ItemList;
