import { useState } from "react";

function SearchBar({ handler }) {
  const [input, setInput] = useState("");

  function handleSearch(e) {
    const searchValue = e;
    setInput(searchValue);
    handler(searchValue);
  }

  return (
    <div>
      <input value={input} onChange={(e) => handleSearch(e.target.value)} />
    </div>
  );
}

export default SearchBar;
