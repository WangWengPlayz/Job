const STATUS_KEY = "portfolio-availability-status";
const JOB_TYPE_KEY = "portfolio-job-type";
export function getAvailability() {
  return localStorage.getItem(STATUS_KEY) ?? "available";
}
export function getJobType() {
  return localStorage.getItem(JOB_TYPE_KEY) ?? "both";
}
export function setAvailability(status) {
  localStorage.setItem(STATUS_KEY, status);
  window.dispatchEvent(new Event("availability-changed"));
}
export function setJobType(type) {
  localStorage.setItem(JOB_TYPE_KEY, type);
  window.dispatchEvent(new Event("availability-changed"));
}
export function getStatusLabel(status, jobType) {
  if (status === "busy") return "Currently Busy";
  const typeMap = {
    fulltime: "Available \xB7 Full-Time",
    parttime: "Available \xB7 Part-Time",
    both: "Available \xB7 Full-Time or Part-Time"
  };
  return typeMap[jobType];
}
