import React from "react";
import { capitalizeWords } from "../../utils/commonUtils";

const Card = ({job}) => {
    const initialCharacters = 280;
    const additionalCharacters = 100;

  return (
    <div className="flex flex-col gap-6 border-2 p-4 rounded-xl shadow-lg">
        <div>
            <button className="border-2 flex items-center gap-3 rounded-full p-2 text-xs">
                <img src="/timer.png" className="h-6 w-6" /> Posted {} days ago
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

        <div className="font-semibold text-gray-600 text-lg flex gap-3 items-center">
            Estimated Salary {job.minJdSalary} - {job.maxJdSalary}K {job.salaryCurrencyCode}
            <img src="/green-tick.jpg" className="h-4 w-4" />
        </div>

        <div>
            <p className="text-xl font-semibold"> About Company: </p>
            <p className="font-bold">About us</p>
            <p>
                {job.jobDetailsFromCompany.substring(0, initialCharacters)}
            </p>
            <p className="blur-sm">
                {job.jobDetailsFromCompany.substring(initialCharacters, initialCharacters + additionalCharacters)}
            </p>

            <button className="relative bottom-12 text-lg left-1/3 z-20 text-blue-600 -mb-4">
                View Job
            </button>
            {/* <p className={`content relative overflow-hidden ${isBlurred ? 'blur' : ''} `}>{job.jobDetailsFromCompany}</p> */}

        </div>
        <div>
            <p className="font-semibold text-sm text-gray-500"> Minimum Experience </p>
            <p> {job.minExp} years </p>
        </div>
        <div className="flex flex-col gap-4 font-semibold">
            <button className="bg-green-300 p-4 rounded-lg flex items-center justify-center gap-2"> 
            <img src="/lightning.png" className="h-4 w-4" />
            Easy Apply
            </button>
            <button className="text-white bg-blue-600 p-4 rounded-lg flex items-center justify-center gap-2">
                <img src="/ref1.png" className="h-8 w-12 blur-sm" />
                <img src="/ref2.png" className="h-6 w-6 blur-sm -ml-2" /> 
                Unlock referral asks 
            </button>
        </div>
    </div>
  );
};

export default Card;
