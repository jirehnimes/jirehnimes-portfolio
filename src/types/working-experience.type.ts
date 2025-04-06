export type TWorkingExperienceCompany = {
  name: string;
};

export type TWorkingExperience = {
  jobTitle: string;
  company: TWorkingExperienceCompany;
  startDate: string;
  endDate?: string;
};
