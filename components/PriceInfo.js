const PriceInfo = ({ marketPrice }) => {
  const { price = 0, changed = 0, code = "LOADING", high = 0, low = 0, base_volume = 0, usd_volume = 0 } = marketPrice
  return (
    <div className="price-info flex flex-col md:flex-row md:gap-[60px]">
      <div className="main-price flex">
        <div className="text-[40px] font-semibold mb-1 grow">
          { Number(price).toFixed(2) }
          <span className="text-base font-medium ml-0.5 text-bid text-emerald-500">+{ Number(changed).toFixed(2) }%</span>
        </div>
      </div>
      <div className="another-info flex flex-col tiny:flex-row tiny:gap-[60px]">
        <div className="high-price flex flex-col">
          <div className="text-xs text-subtitle">24H HIGH</div>
          <div className="mb-1 text-2xl font-semibold grow">{ Number(high).toFixed(2) }</div>
        </div>
        <div className="low-price flex flex-col">
          <div className="text-xs text-subtitle">24H LOW</div>
          <div className="mb-1 text-2xl font-semibold grow">{ Number(low).toFixed(2) }</div>
        </div>
        <div className="base-volume flex flex-col">
          <div className="text-xs text-subtitle">{ code }</div>
          <div className="mb-1 text-2xl font-semibold grow">{ Number(base_volume).toFixed(2) }</div>
        </div>
        <div className="usd-volume flex flex-col">
          <div className="text-xs text-subtitle">USD</div>
          <div className="mb-1 text-2xl font-semibold grow">{ Number(usd_volume).toFixed(2) }</div>
        </div>
      </div>
    </div>
  );
}

export default PriceInfo;