import { useState, useRef, useEffect } from 'react';

function FileInput({ name, value, onChange }) {
  const [prevView, setPreview] = useState();

  const inputRef = useRef();

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;
    inputNode.value = '';
    onChange(name, null);
  };

  useEffect(() => {
    if (!value) return;
    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);
  }, [value]);

  const allClearClick = () => {
    handleClearClick();
    setPreview('');
  };

  return (
    <div>
      <input type="file" onChange={handleChange} ref={inputRef}></input>
      <img src={prevView} alt="" />
      {value && <button onClick={allClearClick}>x</button>}
    </div>
  );
}

export default FileInput;
