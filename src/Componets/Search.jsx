import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

// eslint-disable-next-line react/prop-types
function Search({ setSearchText }) {
  const [value, setValue] = useState("");
  const debounced = useDebouncedCallback((value) => {
    setSearchText(value);
  }, 1000);
  return (
    <div className="flex flex-col items-center justify-center gap-5 w-[80vw] mx-auto my-5 ">
      <input
        className="w-full border py-3 px-4 bg-transparent text-white block rounded-lg "
        placeholder="Searching here"
        onChange={(e) => {
          setValue(e.target.value);
          debounced(e.target.value);
        }}
        value={value}
      />
    </div>
  );
}
export default Search;
