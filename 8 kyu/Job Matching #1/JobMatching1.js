const match = (candidate, job) => {
  if (candidate.minSalary == undefined || job.maxSalary == undefined) 
    throw new Error("Error");
  return candidate.minSalary*9/10 <= job.maxSalary;
}
