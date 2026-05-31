import { Footer } from '~/components/footer';
import {
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment } from 'react';
import { baseMeta } from '~/utils/meta';

const title = 'Arkero — AI Platform for Pro Sports';
const description =
  'An early engineer building Arkero, the AI-native platform for professional sports clubs — now in use by teams across MLS, the NWSL, and the English Football League.';
const roles = [
  'Software Engineer',
  'Full-Stack Engineering',
  'AI Features',
  'Enterprise',
];

export const meta = () => {
  return baseMeta({ title: 'Arkero', description, prefix: 'Projects' });
};

export const Arkero = () => {
  return (
    <Fragment>
      <ProjectContainer>
        <ProjectHeader
          title={title}
          description={description}
          url="https://www.arkero.ai"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Overview</ProjectSectionHeading>
              <ProjectSectionText>
                Arkero is the AI-native platform for sports businesses. It sits on top of
                a club&apos;s existing stack — ticketing, CRM, data warehouse, Slack, email —
                and turns scattered data into predictive insight that helps teams decide
                what to do next: plan gamedays, drive renewals, and coordinate staff.
              </ProjectSectionText>
              <ProjectSectionText>
                I joined as one of the first engineers to help build the enterprise
                application, shipping full-stack features end to end for real clubs
                running live operations on the product.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>What I work on</ProjectSectionHeading>
              <ProjectSectionText>
                My work spans the whole stack — the interfaces clubs use day to day, the
                back-end services behind them, and the integrations that pull a club&apos;s
                tools into one system. Because this is software professional teams run
                their gameday and membership operations on, the bar for reliability and
                polish is high.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Impact</ProjectSectionHeading>
              <ProjectSectionText>
                The platform is in production at multiple professional clubs across Major
                League Soccer, the NWSL, and the English Football League — embedding AI
                into the operations that actually run a club, rather than adding yet
                another dashboard on the side.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
