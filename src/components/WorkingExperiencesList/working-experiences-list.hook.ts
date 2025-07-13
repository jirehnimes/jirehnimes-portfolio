import { workingExperiences } from '@/data/working-experience.data';

export const useWorkingExperiencesListHook = (limit?: number) => {
  let workingExperiencesList = workingExperiences;

  if (limit !== undefined) {
    workingExperiencesList = workingExperiences.slice(0, limit);
  }

  return { workingExperiencesList };
};
