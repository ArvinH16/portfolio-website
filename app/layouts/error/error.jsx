import { Button } from '~/components/button';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import styles from './error.module.css';

export function Error({ error }) {
  const notFound = error.status === 404;
  return (
    <Section className={styles.page}>
      <div>
        <Heading level={2} as="h1">
          {notFound ? 'Page not found' : 'Something went wrong'}
        </Heading>
        <p className={styles.message}>
          {notFound
            ? 'This page is no longer available. You can explore my work from the homepage.'
            : 'Please try again, or contact me at arvin@hakakian.me.'}
        </p>
        <Button secondary href="/" iconEnd="arrow-right">
          Back to homepage
        </Button>
      </div>
    </Section>
  );
}
