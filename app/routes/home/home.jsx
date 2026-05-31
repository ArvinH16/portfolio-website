import arkeroTextureLarge from '~/assets/arkero-large.jpg';
import arkeroTexturePlaceholder from '~/assets/arkero-placeholder.jpg';
import arkeroTexture from '~/assets/arkero.jpg';
import esecTextureLarge from '~/assets/esec-large.jpg';
import esecTexturePlaceholder from '~/assets/esec-placeholder.jpg';
import esecTexture from '~/assets/esec.jpg';
import salonTextureLarge from '~/assets/salonagent-large.jpg';
import salonTexturePlaceholder from '~/assets/salonagent-placeholder.jpg';
import salonTexture from '~/assets/salonagent.jpg';
import gamestackTexture2Large from '~/assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from '~/assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from '~/assets/gamestack-list.jpg';
import gamestackTextureLarge from '~/assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import gamestackTexture from '~/assets/gamestack-login.jpg';
import sliceTextureLarge from '~/assets/slice-app-large.jpg';
import sliceTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceTexture from '~/assets/slice-app.jpg';
import sprTextureLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from '~/assets/spr-lesson-builder-dark.jpg';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
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
  const projectFour = useRef();
  const projectFive = useRef();
  const projectSix = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [
      intro,
      projectOne,
      projectTwo,
      projectThree,
      projectFour,
      projectFive,
      projectSix,
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
        title="Founding UW's Zero to One Startup-a-thon"
        description="Co-founded ESEC, UW's entrepreneurship club, and hosted the first-ever Zero to One Startup-a-thon — 100+ student builders across 40 teams, 25+ mentors, and $5K+ in prizes."
        buttonText="View project"
        buttonLink="/projects/esec"
        model={{
          type: 'laptop',
          alt: 'ESEC Zero to One Startup-a-thon',
          textures: [
            {
              srcSet: `${esecTexture} 1280w, ${esecTextureLarge} 2560w`,
              placeholder: esecTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="AI competitive intelligence agent"
        description="YC Hackathon winning autonomous AI agent that automates market research through phone-based competitor analysis at scale"
        buttonText="View project"
        buttonLink="/projects/ai-intel-agent"
        model={{
          type: 'phone',
          alt: 'AI Competitive Intelligence Agent dashboard',
          textures: [
            {
              srcSet: `${gamestackTexture} 375w, ${gamestackTextureLarge} 750w`,
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: `${gamestackTexture2} 375w, ${gamestackTexture2Large} 750w`,
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-5"
        sectionRef={projectFive}
        visible={visibleSections.includes(projectFive.current)}
        index={5}
        title="AI-powered codebase analytics"
        description="Full-stack analytics app aggregating GitHub data to surface codebase insights, contributor profiling, and code ownership patterns"
        buttonText="View project"
        buttonLink="/projects/codescope"
        model={{
          type: 'laptop',
          alt: 'CodeScope codebase analytics dashboard',
          textures: [
            {
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-6"
        alternate
        sectionRef={projectSix}
        visible={visibleSections.includes(projectSix.current)}
        index={6}
        title="Multi-agent AWS infrastructure builder"
        description="CloudDraft discovers live AWS resources and generates validated Infrastructure-as-Code through LLM-powered multi-agent orchestration"
        buttonText="View project"
        buttonLink="/projects/clouddraft"
        model={{
          type: 'laptop',
          alt: 'CloudDraft AWS infrastructure builder',
          textures: [
            {
              srcSet: `${sprTexture} 1280w, ${sprTextureLarge} 2560w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
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
