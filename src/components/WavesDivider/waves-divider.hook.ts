'use client';

import { animate, createScope, DOMTargetsArray, svg, utils } from 'animejs';
import { useRef, useEffect } from 'react';

export const useWavesDividerHook = () => {
  const componentRef = useRef(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const scope = useRef<any>(null);
  const paths = useRef<DOMTargetsArray>([]);

  const wave1 =
    'M0,160L48,181.3C96,203,192,245,288,240C384,235,480,181,576,165.3C672,149,768,171,864,181.3C960,192,1056,192,1152,165.3C1248,139,1344,85,1392,58.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z';
  const wave2 =
    'M0,128L48,144C96,160,192,192,288,176C384,160,480,96,576,101.3C672,107,768,181,864,192C960,203,1056,149,1152,122.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z';
  // const wave3 =
  //   'M0,96L48,85.3C96,75,192,53,288,74.7C384,96,480,160,576,181.3C672,203,768,181,864,160C960,139,1056,117,1152,144C1248,171,1344,245,1392,282.7L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z';
  // const wave4 =
  //   'M0,64L48,74.7C96,85,192,107,288,101.3C384,96,480,64,576,74.7C672,85,768,139,864,176C960,213,1056,235,1152,224C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z';

  const morphWave = () => {
    if (paths.current.length > 0) {
      const [path1, path2] = paths.current;

      animate(path1, {
        easing: 'linear',
        duration: 8000,
        loop: true,
        d: svg.morphTo(path2),
        onComplete: morphWave,
      });
    }
  };

  // Anime.js detect all SVG path element.
  useEffect(() => {
    scope.current = createScope({ root: componentRef }).add(() => {
      paths.current = utils.$('path');

      morphWave();
    });

    return () => scope.current.revert();
  }, []);

  return { componentRef, wave1, wave2 };
};
