export type Company = {
  company_id: number;
  name: string;
  city: string;
  address: string;
  phone: string;
  time_zone: string;
  industry: string;
};
export type Recruiter = {
  recruiter_id: number;
  name: string;
  time_zone: string;
  commission: number;
};
export type Candidate = {
  candidate_id: number;
  name: string;
  email: string;
  phone: string;
  recruiter_id: number;
  recruiter: string;
};
export type Posting = {
  posting_id: number;
  company_id: number;
  company_name: string;
  job_title: string;
  salary: number;
  post_start: string;
  post_end: string;
};
export type Application = {
  application_id: number;
  candidate_id: number;
  candidate_name: string;
  posting_id: number;
  company_name: string;
  job_title: string;
  date: string;
  status_id: number;
  message: string;
};
export type ApplicationStatus = {
  status_id: number;
  message: string;
}
