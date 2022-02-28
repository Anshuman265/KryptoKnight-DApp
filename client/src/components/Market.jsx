import React,{useState,useEffect} from "react";
import axios from 'axios';
import Coin from "./Coin";
import "./Market.css";


const api_url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';
const Market = () => {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');
    useEffect(() => {
        axios.get(api_url).then(res => {
            setCoins(res.data);
            //console.log(res.data);
        }).catch(error => alert('We are expeireincing some glitches, Please try again later'));
    },[]);
    
    const handleChange = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value);
    }

    const filteredCoins = coins.filter((coin) => {
        coin.name.toLowerCase().includes(search.toLowerCase());
    });

    return ( 
        <div className='flex w-full justify-center items-center'>
            <div className="coin-app">
                <div className="coin-search">
                    <h1 className="coin-text">Search a currency</h1>
                    <form >
                        <input onChange={handleChange} type="text" placeholder="Search" className="coin-input" />
                    </form>
                </div>
            {coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase())).map((coin) => {
                return(<Coin key={coin.id} volume={coin.total_volume} name={coin.name} image={coin.image} symbol={coin.symbol} marketcap={coin.market_cap} priceChange={coin.price_change_percentage_24h}/>);
            })}
            </div>
        </div>
     );
}
 
export default Market;