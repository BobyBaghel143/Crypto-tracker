import Banner from "../Componets/Banner";
import Navbar from "../Componets/Navbar";

function Home() {
  return (
    <div className=" flex flex-col items-center justify-center">
      <Navbar />
      <Banner />
      <div className="text-5xl font-semibold text-white my-4">
        CryptoCurrency prices
      </div>
    </div>
  );
}

export default Home;
