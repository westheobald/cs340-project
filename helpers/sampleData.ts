import { Company, Recruiter, Candidate, Posting, Application } from './types';

export const sampleCompanies: Array<Company> = [
  {
    company_id: 1,
    name: 'Reilly and Sons',
    city: 'Luwu',
    address: '77175 Hintze Pass',
    phone: '442-906-8682',
    time_zone: '-11:00',
    industry: 'Law',
  },
  {
    company_id: 2,
    name: 'Lowe, Larson and Brown',
    city: 'Fengshan',
    address: '3551 Everett Terrace',
    phone: '669-886-1182',
    time_zone: '-06:00',
    industry: 'Construction',
  },
  {
    company_id: 3,
    name: 'Green-Ziemann',
    city: 'Jingtan',
    address: '2 Basil Parkway',
    phone: '952-439-1592',
    time_zone: '+01:00',
    industry: 'Building Products',
  },
];
export const sampleRecruiters: Array<Recruiter> = [
  {
    recruiter_id: 1,
    name: 'Kristian Corkitt',
    time_zone: '+01:00',
    commission: 15,
  },
  {
    recruiter_id: 2,
    name: 'Randal Sibbert',
    time_zone: '-08:00',
    commission: 10,
  },
  {
    recruiter_id: 3,
    name: 'Jeanine Kyles',
    time_zone: '-03:00',
    commission: 19,
  },
  {
    recruiter_id: 4,
    name: 'Dela Austick',
    time_zone: '+06:00',
    commission: 5,
  },
];
export const sampleCandidates: Array<Candidate> = [
  {
    candidate_id: 1,
    name: 'Jae Shevlane',
    email: 'jaeshevlane@gmail.com',
    phone: '857-229-2289',
    recruiter_id: 1,
    recruiter: 'Kristian Corkitt',
  },
  {
    candidate_id: 2,
    name: 'Cathy Shackelton',
    email: 'cathyshackelton@gmail.com',
    phone: '376-590-2555',
    recruiter_id: 2,
    recruiter: 'Randal Sibbert',
  },
  {
    candidate_id: 3,
    name: 'Gilda Kermitt',
    email: 'gildakermitt@gmail.com',
    phone: '729-262-2724',
    recruiter_id: 3,
    recruiter: 'Jeanine Kyles',
  },
  {
    candidate_id: 4,
    name: 'Avram Balcombe',
    email: 'avrambalcombe@gmail.com',
    phone: '660-973-9930',
    recruiter_id: 4,
    recruiter: 'Dela Austick',
  },
];
export const samplePostings: Array<Posting> = [
  {
    posting_id: 1,
    company_id: 1,
    company_name: 'Reilly and Sons',
    job_title: 'Mechanical Systems Engineer',
    salary: 237881,
    post_start: '2023-06-06',
    post_end: '2022-09-24',
  },
];
export const sampleApplication: Array<Application> = [
  {
    application_id: 1,
    candidate_id: 1,
    candidate_name: 'Jae Shevlane',
    posting_id: 1,
    company_name: 'Reilly and Sons',
    job_title: 'Mechanical Systems Engineer',
    date: '2022-06-07 10:20:45',
    status_id: 1,
    message: 'submitted',
  },
];
export const sampleApplicationStatus = [
  {
    status_id: 1,
    message: 'submitted',
  },
  {
    status_id: 2,
    message: 'review/pending',
  },
  {
    status_id: 3,
    message: 'completed',
  },
  { status_id: 4, message: 'offer extended' },
  { status_id: 5, message: 'not interested' },
];
