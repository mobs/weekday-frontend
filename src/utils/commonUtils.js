export function capitalizeWords(str) {
    let words = str.split(' ');

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
            words[i] = words[i][0].toUpperCase() + words[i].substring(1);
        }
    }

    return words.join(' ');
}

export function filterJobs(jobs, filters) {
    return jobs.filter(job => {
      // Filter by role
      if (filters.value && job.jobRole !== filters.value) {
        return false;
      }
      // Filter by experience
      else if (filters.value && job.minExp.toString() < filters.value) {
        return false;
      }
      // Filter by job type
      else if (filters.jobType && job.jobType !== filters.jobType) {
        return false;
      }
      // Filter by minimum base pay
      else if (filters.minBasePay && job.basePay < filters.minBasePay) {
        return false;
      }
      return true;
    });
  }