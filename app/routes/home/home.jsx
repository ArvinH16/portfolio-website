import arkeroTextureLarge from '~/assets/arkero-large.jpg';
import arkeroTexture from '~/assets/arkero.jpg';
import esecTexture from '~/assets/esec-about.png';
import beambellTexture from '~/assets/beambell-home.png';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectList } from './project-list';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

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
    const sections = [intro, projectOne, projectTwo, projectThree, projectsList, details];

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
        company="Arkero AI"
        positionLabel="Engineer · February 2026 – Present"
        title="AI agents, deployed with the team."
        description="I build enterprise AI for professional sports clubs, working directly with MLS clients from discovery and technical scoping through on-site deployment."
        highlights={[
          'Shipped a season-ticket outreach agent at San Diego FC that helped generate tens of thousands of dollars in first-month revenue.',
          'Building enterprise memory, workflow integrations, and Salesforce data pipelines.',
        ]}
        buttonText="Explore my work at Arkero"
        buttonLink="/projects/arkero"
        model={{
          type: 'laptop',
          alt: 'Arkero AI platform for sports clubs',
          textures: [
            {
              srcSet: `${arkeroTexture} 1280w, ${arkeroTextureLarge} 2560w`,
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
        company="BeamBell"
        positionLabel="Co-Founder & CEO · February 2025 – Present"
        title="From 0 to 1. Now in four countries."
        description="I co-founded BeamBell and built our first product, SalonAgent, from 0 to 1. It brings customer communication and back-office automation to paying salons across four countries."
        highlights={[
          'Own customer discovery, technical scoping, and delivery.',
          'Built voice agents, CRM and scheduling integrations, service monitoring, and daily conversation evaluations.',
        ]}
        buttonText="Explore the BeamBell story"
        buttonLink="/projects/beambell"
        model={{
          type: 'laptop',
          alt: 'BeamBell homepage — AI front desk for service businesses',
          textures: [
            {
              srcSet: `${beambellTexture} 1280w`,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        company="ESEC at UW"
        positionLabel="Co-Founder & Co-President · March 2025 – Present"
        title="A community for the next generation of founders."
        description="Co-founded ESEC, one of UW's leading startup clubs — bringing in founders and speakers, placing students into startup internships, and running one of UW's biggest startup events with Claude and the Lavin Program."
        buttonText="View project"
        buttonLink="/projects/esec"
        model={{
          type: 'laptop',
          alt: 'ESEC About page — UW’s startup club',
          textures: [
            {
              srcSet: `${esecTexture} 1270w`,
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
