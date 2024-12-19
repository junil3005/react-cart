import { useState } from "react";

import CartHeader from "./components/CartHeader";
import ShopList from "./components/ShopList";
import CartInput from "./components/CartInput";
import BoughtList from "./components/BoughtList";
import CartFooter from "./components/CartFooter";

function App() {
  const [itemList, setItemList] = useState([
    { id: 1, name: "무", isBought: false },
    { id: 2, name: "배추", isBought: false },
    { id: 3, name: "쪽파", isBought: true },
    { id: 4, name: "고춧가루", isBought: false },
  ]);
  //  산 물건 보기 여부를 체크할 state
  const [showBoughtItems, setShowBoughtItems]
  = useState(true);

  //  isBought === false인 것만 필터링
  //  isBought === false인 것들
  const shopItems = itemList.filter((item) => !item.isBought);
  //  is Bought === true인 것들의 목록
  const BoughtItems = itemList.filter((item) => item.isBought);

  //  id => isBought를 true <-> false
  const toggleBought = (id) => {
    const newItemList = itemList.map((item) =>
      item.id === id ? { ...item, isBought: !item.isBought } : item
    );
    setItemList(newItemList);
  };

  //  id => item 삭제
  const deleteItem = (id) => {
    const newItemList = itemList.filter((item) => item.id !== id);
    setItemList(newItemList);
  };

  return (
    <div>
      <CartHeader />
      <main>
        <section>
          <h2>전체 목록</h2>
          <ul>
            {itemList.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </section>
        <ShopList
          items={shopItems}
          toggleBought={toggleBought}
          deleteItem={deleteItem}
        />

        <CartInput />
        <input 
        type="checkbox" 
        id="show-bought-items" 
        checked={setShowBoughtItems}
        onChange={(event) => setShowBoughtItems(event.target.checked)} 
        />
        <label>산 물건 보기</label>
        {/* 선택적 렌더링 */}
        {showBoughtItems && (
        <BoughtList items={boughtItems} toggleBought={toggleBought} />
      )}
      </main>
      <CartFooter />
    </div>
  );
}

export default App;