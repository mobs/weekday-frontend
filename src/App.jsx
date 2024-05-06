import Filter from "./components/Filter"
import JobCard from "./components/JobCard"

function App() {

  return (
   <div className='p-6 flex flex-col gap-6'>
    <div className="bg-green-400 p-6 rounded-full w-full flex items-center text-white font-bold gap-6 md:text-3xl text-lg">
      <img src="/hello.png" className="h-8 w-8" />
      Welcome to Job Search
    </div>
    {/* Starting Weekday Job Listing  */}
    {/* <Filter /> */}
    <JobCard />
   </div>
  )
}

export default App
