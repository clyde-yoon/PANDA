import '../style/item.css';

function SearchBar() {
  return (
    <div className="allitems-search-bar">
      <input type="text" placeholder="🔍 검색할 상품을 입력해주세요" />
      <button>상품 등록하기</button>
      <select>
        <option value="">최신순</option>
        <option value="">좋아요순</option>
      </select>
    </div>
  );
}

export default SearchBar;
