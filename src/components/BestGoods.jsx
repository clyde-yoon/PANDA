import BestItems from './BestItems';
import '../style/item.css';
import { getData } from '../Api';
import { useState, useEffect } from 'react';

function BestGoods() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      'https://panda-market-api.vercel.app/products?page=1&pageSize=4&orderBy=favorite'
    );
    const body = await response.json();
    setData(body.list);
  };
  return (
    <div>
      <div className="category-name">베스트 상품</div>
      <ul className="card-container">
        {data.map((item) => (
          <li className="bestitem-card" key={item.id}>
            <BestItems item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BestGoods;
