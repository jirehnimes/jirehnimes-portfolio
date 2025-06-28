import Image from 'next/image';
import { certifications } from '@/data/certification.data';
import { TCertification } from '@/types/certification.type';
import { formatClasses } from '@/utils/common.util';
import styles from './index-about-certifications-list.module.css';

export default function IndexAboutCertificationsList() {
  return (
    <div className={styles.container}>
      <div className={formatClasses([styles.list, 'margin-auto'])}>
        {certifications.map((certification: TCertification, index: number) => (
          <div key={index}>
            <a href={certification.url} target="_blank">
              <Image
                src={certification.image}
                alt={certification.name}
                width={100}
                height={100}
                className={styles['certificate__image']}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
