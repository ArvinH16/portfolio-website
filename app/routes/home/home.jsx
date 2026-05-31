import arkeroTextureLarge from '~/assets/arkero-large.jpg';
import arkeroTexturePlaceholder from '~/assets/arkero-placeholder.jpg';
import arkeroTexture from '~/assets/arkero.jpg';
import esecTextureLarge from '~/assets/esec-large.jpg';
import esecTexturePlaceholder from '~/assets/esec-placeholder.jpg';
import esecTexture from '~/assets/esec.jpg';
import salonTextureLarge from '~/assets/salonagent-large.jpg';
import salonTexturePlaceholder from '~/assets/salonagent-placeholder.jpg';
import salonTexture from '~/assets/salonagent.jpg';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectList } from './project-list';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Engineer & Founder',
    description: `Portfolio of ${config.name} — a software engineer and founder building AI products and full-stack platforms.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectsList = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [
      intro,
      projectOne,
      projectTwo,
      projectThree,
      projectsList,
      details,
    ];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Building the AI platform for pro sports clubs"
        description="Joined early as a software engineer at Arkero to build an AI-native platform for professional sports clubs — shipping full-stack features now in use by teams across MLS, the NWSL, and the English Football League."
        buttonText="View project"
        buttonLink="/projects/arkero"
        model={{
          type: 'laptop',
          alt: 'Arkero AI platform for sports clubs',
          textures: [
            {
              srcSet: `${arkeroTexture} 1280w, ${arkeroTextureLarge} 2560w`,
              placeholder: arkeroTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Building an AI receptionist from 0 to 1"
        description="Co-founded BeamBell, an AI receptionist company, and took our first product — SalonAgent — from 0 to 1. It's a 24/7 voice agent now live and booking clients across multiple salon locations."
        buttonText="View project"
        buttonLink="/projects/beambell"
        model={{
          type: 'laptop',
          alt: 'SalonAgent AI receptionist by BeamBell',
          textures: [
            {
              srcSet: `${salonTexture} 1280w, ${salonTextureLarge} 2560w`,
              placeholder: salonTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Co-founding one of UW's top startup clubs"
        description="Co-founded ESEC, one of UW's leading startup clubs — bringing in founders and speakers, placing students into startup internships, and running one of UW's biggest startup events with Claude and the Lavin Program."
        buttonText="View project"
        buttonLink="/projects/esec"
        model={{
          type: 'laptop',
          alt: 'ESEC — UW entrepreneurship club',
          textures: [
            {
              srcSet: `${esecTexture} 1280w, ${esecTextureLarge} 2560w`,
              placeholder: esecTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectList
        id="projects"
        sectionRef={projectsList}
        visible={visibleSections.includes(projectsList.current)}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
