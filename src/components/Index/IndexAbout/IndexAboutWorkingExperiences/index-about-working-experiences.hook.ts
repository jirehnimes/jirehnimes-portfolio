import { workingExperiences } from '@/data/working-experience.data';

export const useIndexAboutWorkingExperiencesHook = () => {
  const workingExperiencesList = workingExperiences.slice(0, 3);

  return { workingExperiencesList };
};
