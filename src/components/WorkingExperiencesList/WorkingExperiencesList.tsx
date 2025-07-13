import { TWorkingExperience } from '@/types/working-experience.type';
import ListItem from './ListItem';
import { useWorkingExperiencesListHook } from './working-experiences-list.hook';
import styles from './working-experiences-list.module.css';

type TWorkingExperiencesListProps = {
  limit?: number;
};

export default function WorkingExperiencesList({
  limit,
}: TWorkingExperiencesListProps) {
  const { workingExperiencesList } = useWorkingExperiencesListHook(limit);

  const workingExperiencesRows = workingExperiencesList.map(
    (workingExperience: TWorkingExperience, index: number) => (
      <ListItem key={index} workingExperience={workingExperience} />
    )
  );

  return <div className={styles.list}>{workingExperiencesRows}</div>;
}
