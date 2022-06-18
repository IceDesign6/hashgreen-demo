import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import axios from "axios";

import { wrapper } from "../store/index.js";
import { toggleShowModal } from '../store/actions';
import PriceInfo from "../components/PriceInfo.js";

const State = () => useSelector((state) => state)

const Market = () => {
  const { showModal } = State()
  const dispatch = useDispatch()

  const [ allMarket, updateAllMarket ] = useState([])
  const [ marketInfo, updateMarketInfo ] = useState({})
  const [ marketPrice, updateMarketPrice ] = useState({})

  // 取得市場前五筆資料
  useEffect(() => {
    const getAllMarket = async () => {
      const { data } = await axios.get('https://testnet10.hash.green/api/v1/markets')
      updateAllMarket(() => JSON.parse(JSON.stringify(data.data))
                              .slice(0, 5)
                              .map(({ code, id }) => ({ code, id }))
      )
    }
    return () => {
      getAllMarket()
    }
  }, [])


  // 如果市場改變，且有資料，預設載入市場內第一筆資料
  useEffect(() => {
    if (allMarket.length) updateMarketInfo(() => allMarket[0])
  }, [allMarket])


  // 市場更新後，取得該市場資訊
  useEffect(() => {
    getSelectMarket()
    return (() => {})
  }, [marketInfo])

  const getSelectMarket = async () => {
    if (!Object.keys(marketInfo).length) return
    const { data } = await axios.get(`https://testnet10.hash.green/api/v1/trades/statistics?market_id=${marketInfo.id}`)
    updateMarketPrice(() => data.data)
  }

  return (
    <div className="w-full min-h-screen p-4">
      <div className="market-selector flex">
        { Object.keys(marketInfo).length
          ? <span className="cursor-pointer text-lg font-bold" onClick={() => dispatch(toggleShowModal(!showModal))}>
              <div className="relative">
                { marketInfo.code }
                { showModal ? (
                  <div className="absolute top-full rounded bg-white">
                    { allMarket ? allMarket.map(item => (<div className="whitespace-nowrap m-2 p-2 hover:bg-gray-200" key={item.id} onClick={ () => updateMarketInfo(() => item) }>{ item.code }</div>)) : <div>hi</div> }
                  </div>
                ) : null }
                <span className="inline-block rotate-90 mx-2 font-normal">›</span>
              </div>
            </span>
        : <div>Loading...</div>}
      </div>
      <PriceInfo
        marketPrice={ marketPrice }
      />
    </div>
  );
}

export default wrapper.withRedux(Market)