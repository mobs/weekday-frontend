import React, { useEffect, useState } from 'react'
import { POST } from '../../services/ApiService'
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from '../Card';
import Filter from '../Filter';
import { filterOptions } from '../../constants/contants';
import { filterJobs } from '../../utils/commonUtils';

const JobCard = () => {
    const [jobData, setJobData] = useState([]);
    const [filteredJobData, setFilteredJobData] = useState([]);
    const [offset, setOffset] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [selectedOption, setSelectedOption] = useState([]);

    const handleOptionChange = (index, option) => {
      const newSelectedOptions = [...selectedOption]; 
      newSelectedOptions[index] = option; 
      setSelectedOption(newSelectedOptions); 
    };

    const body = JSON.stringify({
      limit: 10,
      offset,
    });

    useEffect(() => {
        POST(body)
            .then((res) => {
                setJobData(res.jdList);
                setFilteredJobData(res.jdList)
                setOffset(prev => prev + 1);
            })
            .catch((err) => console.log({err}))
    }, [])

    // console.log({jobData})

    useEffect(() => {
      let jobs = jobData;
      if(selectedOption) {
        selectedOption.map((option) => {
          if(option !== 'undefined') {
            jobs = filterJobs(jobs, option)
          }   
        })
      }
      {
        jobs && setFilteredJobData(jobs);
      }
      

    }, [selectedOption])

    const fetchMoreData = () => {
      POST(body)
        .then((res) => {
          setJobData((prevData) => [...prevData, ...res.jdList]);
          if(jobData.length >= 947) {
            setHasMore(false);
          }
        })
        .catch((err) => console.log({err}))
    }
    

  return (
    <div className='flex flex-col gap-8'>
      <div className='flex gap-4'>
      {
        filterOptions.map((option, index) => {
          return (
          <div key={index}>
            <Filter placeholder={option} optionName={option.value} selectedOption={selectedOption[index]} setSelectedOption={(selectedOption) => handleOptionChange(index, selectedOption)} />
          </div>
        )})
      }
      </div>
    {/* <Filter /> */}

    <InfiniteScroll
      dataLength={filteredJobData.length}
      next={fetchMoreData}
      hasMore={hasMore}
    >
      <div className='grid grid-cols-4 gap-6'>
        {
          filteredJobData?.map((job, idx) => (
            <div key={idx}>
              <Card job={job} />       
            </div>
          ))
        }
      </div>
      
    </InfiniteScroll>
    </div>
  )
}

export default JobCard