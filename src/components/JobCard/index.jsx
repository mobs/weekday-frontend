import React, { useEffect, useState } from 'react'
import { POST } from '../../services/ApiService'
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from '../Card';

const JobCard = () => {
    const [jobData, setJobData] = useState([]);
    const [offset, setOffset] = useState(0);
    const [hasMore, setHasMore] = useState(true)

    const body = JSON.stringify({
      limit: 10,
      offset,
    });

    useEffect(() => {
        POST(body)
            .then((res) => {
                setJobData(res.jdList);
                setOffset(prev => prev + 1);
                
            })
            .catch((err) => console.log({err}))
    }, [])

    console.log({jobData})

    const fetchMoreData = () => {
      POST(body)
        .then((res) => {
          setJobData((prevData) => [...prevData, ...res.jdList]);
        })
        .catch((err) => console.log({err}))
    }

  return (
    <InfiniteScroll
      dataLength={jobData.length}
      next={fetchMoreData}
      hasMore={hasMore}
    >
      <div className='grid grid-cols-3 gap-6 rounded-lg'>
        {
          jobData.slice(0,1)?.map((job, idx) => (
            <div key={idx}>
              <Card job={job} />       
            </div>
          ))
        }
      </div>
      
    </InfiniteScroll>
  )
}

export default JobCard