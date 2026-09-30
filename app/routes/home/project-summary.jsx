import { Button } from '~/components/button';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import styles from './project-summary.module.css';

export function ProjectSummary({
  id,
  sectionRef,
  title,
  description,
  model,
  buttonText,
  buttonLink,
  alternate,
  company,
  positionLabel,
  highlights = [],
}) {
  return (
    <Section
      as="section"
      className={styles.summary}
      ref={sectionRef}
      id={id}
      aria-labelledby={id + '-title'}
      tabIndex={-1}
    >
      <div className={styles.content} data-alternate={alternate}>
        <div className={styles.details}>
          <p className={styles.company}>{company}</p>
          <Heading as="h2" level={3} className={styles.title} id={id + '-title'}>
            {title}
          </Heading>
          <p className={styles.positionLabel}>{positionLabel}</p>
          <p className={styles.description}>{description}</p>
          {highlights.length > 0 && (
            <ul className={styles.highlights}>
              {highlights.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          <Button secondary href={buttonLink} iconEnd="arrow-right">
            {buttonText}
          </Button>
        </div>
        <figure className={styles.preview}>
          <img
            srcSet={model.textures[0].srcSet}
            sizes="(max-width: 800px) 90vw, 48vw"
            width="1280"
            height="800"
            loading="lazy"
            alt={model.alt}
          />
          <figcaption>{company} website</figcaption>
        </figure>
      </div>
    </Section>
  );
}
