import Banner from "../Componets/Banner";
import CryptoTable from "../Componets/CryptoTable";
import Navbar from "../Componets/Navbar";
import Search from "../Componets/Search";

function Home() {
  return (
    <div className=" flex flex-col items-center justify-center">
      <Navbar />
      <Banner />
      <div className="text-5xl font-semibold text-white my-4">
        CryptoCurrency prices
      </div>
      <Search />
      <CryptoTable />
    </div>
  );
}

export default Home;
