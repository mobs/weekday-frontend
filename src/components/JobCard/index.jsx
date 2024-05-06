import React, { useEffect, useState } from 'react'
import { POST } from '../../services/ApiService'
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from '../Card';
import Filter from '../Filter';
import { filterOptions } from '../../constants/contants';
import { filterJobs, searchJobsByCompany } from '../../utils/commonUtils';
import Select from 'react-select';

const JobCard = () => {
    const [jobData, setJobData] = useState([]);
    const [filteredJobData, setFilteredJobData] = useState([]);
    const [offset, setOffset] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [selectedOption, setSelectedOption] = useState([]);
    const [searchCompanyName, setSearchCompanyName] = useState();

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
                // console.log(res.jdList)
                setOffset(prev => prev + 10);
            })
            .catch((err) => console.log({err}))
    }, [])

    useEffect(() => {
      let jobs = jobData;
      if(selectedOption.length >= 0) {
        selectedOption.map((option, idx) => {
          jobs = filterJobs(jobs, option, idx) 
        })
      }
      if(searchCompanyName) {
        jobs = searchJobsByCompany(jobs, searchCompanyName)
      }

      {
        jobs && setFilteredJobData(jobs);
      }      

    }, [selectedOption, jobData])

    const fetchMoreData = () => {
      POST(body)
        .then((res) => {
          setOffset(prev => prev + 10);
          setJobData((prevData) => [...prevData, ...res.jdList]);
          if(jobData.length >= 947) {
            setHasMore(false);
          }
        })
        .catch((err) => console.log({err}))
    }

    const getDataByCompanyName = (e) => {
      const body = JSON.stringify({
        limit: 100,
        offset: 100
      });


      if(e.key === 'Enter') {
        POST(body)
          .then((res) => {
            let jobs = res.jdList;
            console.log({jobs})
            jobs = searchJobsByCompany(jobs, searchCompanyName);
            setJobData(jobs)
          })
      }
    }
    

  return (
    <div className='flex flex-col gap-8'>
      <div className='flex gap-4 flex-wrap'>
      {
        filterOptions.map((option, index) => {
          return (
          <div key={index} className='flex-shrink-0'>
            <Filter placeholder={option} optionName={option.value} selectedOption={selectedOption[index]} setSelectedOption={(selectedOption) => handleOptionChange(index, selectedOption)} />
          </div>
        )})
      }
        <input type='text' value={searchCompanyName} onKeyDown={(e) => getDataByCompanyName(e)} onChange={(e) => setSearchCompanyName(e.target.value)} placeholder='Search Company Name' className='p-[0.4rem] border-2 rounded-lg' />

      </div>

    {/* <Filter /> */}

    <InfiniteScroll
      dataLength={filteredJobData.length}
      next={fetchMoreData}
      hasMore={hasMore}
    >
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6'>
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