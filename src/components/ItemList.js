import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/contants";
import { addItem } from "../utils/cardSlice";

const ItemList = ({ items }) => {
  const dispath = useDispatch();
  const handleAddItem = (item) => {
    dispath(addItem(item));
    console.log(item);
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-sm">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <img
              src={CDN_URL + item.card.info.imageId}
              className="h-24 w-[125px] rounded-lg "
            />
            <label
              className=" border border-black rounded-lg p-0.5 cursor-pointer items-center"
              onClick={()=>handleAddItem(item)}
            >
              Add+
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
