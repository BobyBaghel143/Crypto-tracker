import { useState } from "react";

import Banner from "../Componets/Banner";
import CryptoTable from "../Componets/CryptoTable";
import Navbar from "../Componets/Navbar";
import Search from "../Componets/Search";

function Home() {
  const [searchtext, setSearchtext] = useState("");

  return (
    <div className=" flex flex-col items-center justify-center">
      <Navbar />
      <Banner />
      <div className="text-5xl font-semibold text-white my-4">
        CryptoCurrency prices
      </div>
      <Search setSearchText={setSearchtext} />
      <CryptoTable id={searchtext} />
    </div>
  );
}

export default Home;
