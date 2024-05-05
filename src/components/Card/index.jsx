import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { capitalizeWords } from "../../utils/commonUtils";

const Card = ({job}) => {

  return (
    <div className="flex flex-col gap-6 border-2 p-4">
        <div>
            <button className="border-2 rounded-full p-2 text-xs">
                Posted {} days ago
            </button>
        </div>

        <div className="flex gap-4">
            <div>
                <img src={job.logoUrl} className="h-12 w-12 object-cover" />
            </div>
            <div>
                <p className="font-semibold text-gray-400">{capitalizeWords(job.companyName)}</p>
                <p className="text-lg">{capitalizeWords(job.jobRole)}</p>
                <p className="text-xs font-semibold"> {capitalizeWords(job.location)} </p>

            </div>
        </div>

        <div>
            Estimated Salary {job.minJdSalary} - {job.maxJdSalary}K {job.salaryCurrencyCode}
        </div>

        <div>
            <p className="text-xl"> About Company: </p>

        </div>
        <div>

        </div>
    </div>
  );
};

export default Card;
