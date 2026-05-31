import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Icon } from '~/components/icon';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Link as RouterLink } from '@remix-run/react';
import { cssProps } from '~/utils/style';
import styles from './project-list.module.css';

const projects = [
  {
    title: 'AI Competitive Intelligence Agent',
    description:
      'YC Hackathon–winning autonomous agent that runs phone-based competitor research at scale and feeds the findings into live dashboards.',
    tags: ['Pipecat', 'Gemini', 'Twilio', 'Next.js'],
    href: '/projects/ai-intel-agent',
    github: 'https://github.com/ArvinH16/yc_hackathon',
  },
  {
    title: 'CodeScope',
    description:
      'Full-stack GitHub analytics that surfaces contributor profiles, code ownership, and AI summaries of how a codebase evolves over time.',
    tags: ['React', 'Next.js', 'Python', 'GitHub API'],
    href: '/projects/codescope',
    github: 'https://github.com/ArvinH16/codescope',
  },
  {
    title: 'CloudDraft',
    description:
      'Multi-agent system that reverse-engineers live AWS environments into clean, validated Infrastructure-as-Code.',
    tags: ['Python', 'Terraform', 'LocalStack', 'Multi-agent'],
    href: '/projects/clouddraft',
    github: null,
  },
];

export function ProjectList({ id, sectionRef, visible: sectionVisible }) {
  const titleId = `${id}-title`;

  return (
    <Section
      as="section"
      className={styles.projects}
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={sectionVisible} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <header className={styles.header}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <span className={styles.tagText} data-visible={visible}>
                  More work
                </span>
              </div>
              <Heading
                level={3}
                as="h2"
                className={styles.heading}
                data-visible={visible}
                id={titleId}
              >
                Projects &amp; experiments
              </Heading>
            </header>
            <div className={styles.grid}>
              {projects.map((project, index) => (
                <article
                  className={styles.card}
                  key={project.title}
                  data-visible={visible}
                  style={cssProps({ delay: `${index * 120 + 200}ms` })}
                >
                  <Heading level={5} as="h3" className={styles.cardTitle}>
                    {project.title}
                  </Heading>
                  <Text className={styles.cardDescription} as="p">
                    {project.description}
                  </Text>
                  <ul className={styles.tags}>
                    {project.tags.map(tag => (
                      <li className={styles.tagChip} key={tag}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <div className={styles.actions}>
                    <RouterLink
                      prefetch="intent"
                      to={project.href}
                      className={styles.action}
                    >
                      View project
                      <Icon className={styles.actionIcon} icon="arrow-right" />
                    </RouterLink>
                    {project.github && (
                      <a
                        className={styles.action}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} source on GitHub`}
                      >
                        <Icon className={styles.actionIcon} icon="github" />
                        GitHub
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
}
