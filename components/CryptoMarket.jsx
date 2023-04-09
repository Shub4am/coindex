import axios from 'axios';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { useState } from 'react';
import { FaSortAmountDownAlt } from 'react-icons/fa';
import { GrAscending } from 'react-icons/gr';
import ReactPaginate from 'react-paginate';
import useSWR from 'swr';
import { formatMoney, formatPercentage } from '../utils/format';
import Image from 'next/image';

const API_BASE_URL = 'https://api.coingecko.com/api/v3';

export default function CryptoMarket() {
  const [sortOrder, setSortOrder] = useState('desc');
  const [currentPage, setCurrentPage] = useState(1);

  const { data: coins, error: coinsError } = useSWR(
    `${API_BASE_URL}/coins/markets?vs_currency=usd&per_page=100&page=1&order=market_cap_${sortOrder}&sparkline=false`,
    (url) => axios.get(url).then((res) => res.data)
  );

  const onPageChange = (data) => {
    setCurrentPage(data.selected + 1);
  };

  const sortedCoins = coins?.sort((a, b) => {
    if (sortOrder === 'desc') {
      return b.market_cap - a.market_cap;
    }
    return a.market_cap - b.market_cap;
  });

  const pageCoins = sortedCoins?.slice(
    (currentPage - 1) * 10,
    currentPage * 10
  );

  const seo = {
    title: 'Crypto Market Update',
    description: 'Real-time cryptocurrency market update',
  };

  if (coinsError)
    return (
      <>
        <div className="flex flex-row bg-gradient-to-r from-[#333399] to-[#ff00cc] py-2">
          <div className="w-1/2 sm:w-1/4 px-4">Coin</div>
          <div className="w-1/2 sm:w-1/4 px-4">Price</div>
          <div className="hidden sm:flex  w-1/4 px-4">24h Change</div>
          <div className="hidden sm:flex w-1/4 px-4">Market Cap</div>
        </div>
        <div className="flex justify-center items-center mt-5">
          Failed to load market update. Please try again in a few minutes
        </div>
      </>
    );

  return (
    <div className="container mx-auto">
      <NextSeo {...seo} />
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold mt-10 mb-6">Crypto Market Update</h1>
      </div>
      <div className="flex flex-col w-full mb-5">
        <div className="flex flex-row bg-gradient-to-r from-[#333399] to-[#ff00cc] py-5 text-2xl">
          <div className="w-1/4 px-4 ml-28">Coin</div>
          <div className="w-1/4 px-4">Price</div>
          <div className="w-1/4 px-4 hidden sm:block">24h Change</div>
          <div className="w-1/4 px-4 hidden sm:block">Market Cap</div>
        </div>
        {pageCoins?.map((coin) => (
          <div
            key={coin.id}
            className="flex flex-row bg-black py-2 m-4 text-xl justify-center items-center border-b-2 border-gray-900"
          >
            <div className="w-1/5 px-4 flex text-base sm:text-xl items-center ">
              <Image
                src={coin.image}
                alt={coin.name}
                width={30}
                height={30}
                className="mr-5"
              />
              {coin.name}
            </div>
            <div className="w-1/2 sm:w-1/4 px-4 text-center  ml-12 sm:ml-0">
              {formatMoney(coin.current_price)}
            </div>

            {/* hidden in mobile nav */}

            <div
              className={`w-1/4 px-4 text-center hidden sm:block  ${
                coin.price_change_percentage_24h > 0
                  ? 'text-green-500'
                  : 'text-red-500'
              }`}
            >
              {formatPercentage(coin.price_change_percentage_24h)}
            </div>

            <div className="w-1/4 px-4 text-center  hidden sm:block">
              {formatMoney(coin.market_cap)}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center my-10 text-xl">
        <ReactPaginate
          previousLabel="Previous"
          nextLabel="Next"
          pageCount={5}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={onPageChange}
          containerClassName="pagination"
          activeClassName="active"
          disabledClassName="disabled"
          previousClassName="previous"
          nextClassName="next"
        />
      </div>
    </div>
  );
}
