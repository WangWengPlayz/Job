export type AvailabilityStatus = "available" | "busy";
export type JobType = "fulltime" | "parttime" | "both";

const STATUS_KEY = "portfolio-availability-status";
const JOB_TYPE_KEY = "portfolio-job-type";

export function getAvailability(): AvailabilityStatus {
  return (localStorage.getItem(STATUS_KEY) as AvailabilityStatus) ?? "available";
}

export function getJobType(): JobType {
  return (localStorage.getItem(JOB_TYPE_KEY) as JobType) ?? "both";
}

export function setAvailability(status: AvailabilityStatus) {
  localStorage.setItem(STATUS_KEY, status);
  window.dispatchEvent(new Event("availability-changed"));
}

export function setJobType(type: JobType) {
  localStorage.setItem(JOB_TYPE_KEY, type);
  window.dispatchEvent(new Event("availability-changed"));
}

export function getStatusLabel(status: AvailabilityStatus, jobType: JobType): string {
  if (status === "busy") return "Currently Busy";
  const typeMap: Record<JobType, string> = {
    fulltime: "Available · Full-Time",
    parttime: "Available · Part-Time",
    both: "Available · Full-Time or Part-Time",
  };
  return typeMap[jobType];
}
