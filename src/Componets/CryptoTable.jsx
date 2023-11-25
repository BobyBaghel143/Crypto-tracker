import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { fetchCryptoList } from "../Repository/CryptoRepository";

function CryptoTable() {
  const { appCurrency } = useSelector((state) => state.currency);

  const [coins, setcoins] = useState([
    {
      id: "bitcoin",
      symbol: "btc",
      name: "Bitcoin",
      image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
      change24h: 2.15,
      price: 3142437,
      market_cap: 61785170251310,
    }
  ]);
  
  const [page, setPage] = useState(1);

  async function loadCryptos(appCurrency, page) {
    const result = await fetchCryptoList(appCurrency, page, true);
    console.log(result);
    if (result.success) {
       setcoins(result.data);
    }
  }


  useEffect(() => {
    loadCryptos(appCurrency, page);
  }, [appCurrency, page]);

  return (
    <div className="flex flex-col items-center justify-center gap-5 w-[80vw] mx-auto my-5 ">
      <div className="w-full bg-yellow-400 text-black text-xl flex items-center justify-between px-5 py-3 font-semibold rounded-lg  ">
        {/* headers */}
        <div className="basis-[35%]" >Coin</div>         
        <div className="basis-[25%]" >Price</div>
        <div className="basis-[20%]" >24h Change</div>
        <div className="basis-[20%]" >Market up</div>
      </div>
      <div className="flex flex-col w-[80vw] mx-auto " >
        {
          coins.map((coin) => {
            return (
              <div key={coin.id} className="w-full bg-transparent flex items-center justify-between text-white font-semibold px-2 py-4" >
                <div className="flex items-center justify-start gap-3 basis-[35%]" >
                  <div className="w-[5rem] h-[5rem] " >
                    <img src={coin.image} className="w-full h-full" />
                  </div>
                  <div className="flex flex-col " >
                    <div className="text-3xl" > {coin.name} </div>
                    <div className="text-xl font-light" > {coin.symbol} </div>
                  </div>
                </div>
                <div className="basis-[25%]"> {coin.price} </div>
                <div className="basis-[20%]"> {coin.change24h} </div>
                <div className="basis-[20%]"> {coin.market_cap} </div>
              </div>
            );
          })
        }
      </div>
      <div className="flex items-center justify-center gap-4" >
        <button onClick={()=> setPage((page)=> page-1)} className="btn btn-primary btn-wide text-white text-2xl" disabled={page == 1} >Prev</button>
        <button onClick={()=> setPage((page)=> page+1)} className="btn btn-secodary btn-wide text-white text-2xl" >Next</button>
      </div>
    </div>
  );
}
export default CryptoTable;
