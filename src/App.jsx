import Filter from "./components/Filter"
import JobCard from "./components/JobCard"

function App() {

  return (
   <div className='p-6 flex flex-col gap-6'>
    {/* Starting Weekday Job Listing  */}
    {/* <Filter /> */}
    <JobCard />
   </div>
  )
}

export default App
