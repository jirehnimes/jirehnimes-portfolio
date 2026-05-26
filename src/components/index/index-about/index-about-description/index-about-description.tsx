import { formatClasses } from '@/utils/common.util';
import styles from './index-about-description.module.css';

export const IndexAboutDescription = () => {
  return (
    <div
      id="about"
      className={formatClasses([styles.container, 'margin-auto'])}
    >
      <h4>
        Results-driven software developer with nearly 9+ years of professional
        experience delivering scalable and impactful solutions across multiple
        industries. Passionate about building efficient, user-focused
        applications that create business value and improve user experience.
        <br />
        <br />
        Experienced in working within culturally diverse and collaborative
        environments, with a strong ability to adapt to evolving technologies
        and business needs. Committed to continuous learning, innovation, and
        delivering high-quality solutions that contribute to organizational
        success.
      </h4>
    </div>
  );
};
