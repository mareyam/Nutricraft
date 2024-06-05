import React from "react";
import MonthlyOrdersChart from "@/common/charts/MonthlyOrdersChart";
import AverageOrder from "@/common/charts/AverageOrder";

const SalesStats = () => {
  return (
    <div
      className="w-full
      shadow-xl rounded-xl overflow-hidden"
    >
      <div className="bg-darkpurple shadow-purple-100">
        <div className="p-4 text-white">
          <h5 className="text-md font-normal">Sales Statistics</h5>
          <div className="grid grid-column-4 grid-flow-col gap-4">
            <div>
              <p>84,577</p>
              <p>Orders Monthly</p>
            </div>
            <div>
              <p>84,577</p>
              <p>Orders Monthly</p>
            </div>
            <div>
              <p>84,577</p>
              <p>Orders Monthly</p>
            </div>
            <div>
              <p>84,577</p>
              <p>Orders Monthly</p>
            </div>
            <div>
              <p>84,577</p>
              <p>Orders Monthly</p>
            </div>
            <div>
              <p>84,577</p>
              <p>Orders Monthly</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-full grid grid-cols-2 gap-4">
        <div className="bg-blue-500">
          <MonthlyOrdersChart />
        </div>
        <div className="bg-green-500">
          <AverageOrder />
        </div>
      </div>
    </div>
  );
};

export default SalesStats;
