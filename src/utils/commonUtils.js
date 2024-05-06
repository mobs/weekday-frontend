export function capitalizeWords(str) {
    let words = str.split(' ');

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
            words[i] = words[i][0].toUpperCase() + words[i].substring(1);
        }
    }

    return words.join(' ');
}

export function searchJobsByCompany(jobs, name) {
  return jobs.filter(job => job.companyName.toLowerCase().includes(name.toLowerCase()));
}

export function filterJobs(jobs, filters, idx) {
  console.log(filters)
    return jobs.filter(job => {

      // Filterring by role
      if (idx === 0 && filters && job.jobRole !== filters.value) {
        return false;
      }

      // Filterring by experience
      if (idx === 2 && filters && job.minExp < filters.value) {
        return false;
      }
      // Filterring by job type
      // if (idx === 3 && filters && job.jobType !== filters.value) {
      //   return false;
      // }
      // Filterring by minimum base pay
      if (idx === 4 && filters && job.minJdSalary < filters.value) {
        return false;
      }
      return true;
    });
  }