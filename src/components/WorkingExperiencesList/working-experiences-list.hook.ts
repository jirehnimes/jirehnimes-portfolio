import { workingExperiences } from '@/data/working-experience.data';

export const useWorkingExperiencesListHook = () => {
  const workingExperiencesList = workingExperiences.slice(0, 3);

  return { workingExperiencesList };
};
