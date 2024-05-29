import SearchBar from './SearchBar';
import AllItems from './AllItems';
import '../style/item.css';
import { useEffect, useState } from 'react';
function AllGoods() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      'https://panda-market-api.vercel.app/products?page=1&pageSize=10&orderBy=recent'
    );
    const body = await response.json();
    setData(body.list);
  };
  return (
    <div>
      <div className="allgoods-header">
        <div className="category-name">전체 상품</div>
        <SearchBar />
      </div>
      <ul className="card-container">
        {data.map((item) => (
          <li className="bestitem-card" key={item.id}>
            <AllItems item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllGoods;
