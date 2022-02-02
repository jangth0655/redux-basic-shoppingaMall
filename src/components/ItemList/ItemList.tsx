import { time } from "console";
import { IGetItems } from "../../slicese/ItemsSlice";
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
            {item.title}
            <img
              style={{ width: 100 }}
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              alt="img"
            />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default ItemList;
