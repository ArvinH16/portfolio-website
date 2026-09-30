import { Footer } from '~/components/footer';
import { Button } from '~/components/button';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import styles from './case-study.module.css';

export function CaseStudy({
  company,
  title,
  description,
  positionLabel,
  period,
  url,
  linkLabel,
  outcome,
  sections,
  tools,
}) {
  return (
    <>
      <article className={styles.caseStudy}>
        <Section as="header" className={styles.header}>
          <p className={styles.company}>{company}</p>
          <Heading as="h1" level={2} className={styles.title}>
            {title}
          </Heading>
          <p className={styles.description}>{description}</p>
          <div className={styles.meta}>
            <span>{positionLabel}</span>
            <span>{period}</span>
          </div>
          <Button secondary href={url} iconEnd="arrow-right">
            {linkLabel}
          </Button>
        </Section>
        <Section className={styles.body}>
          <aside className={styles.outcome}>
            <h2>In production</h2>
            <p>{outcome}</p>
            <h2>Tools & systems</h2>
            <ul>
              {tools.map(tool => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </aside>
          <div className={styles.story}>
            {sections.map(section => (
              <section key={section.title}>
                <Heading as="h2" level={4}>
                  {section.title}
                </Heading>
                {section.paragraphs.map(paragraph => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
            <Button secondary href="/#project-1" icon="chevron-left">
              Back to selected work
            </Button>
          </div>
        </Section>
      </article>
      <Footer />
    </>
  );
}
