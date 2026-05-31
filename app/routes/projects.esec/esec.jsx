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

const title = "ESEC — UW's Entrepreneurship Club";
const description =
  'Co-founded ESEC at the University of Washington and hosted the first-ever Zero to One Startup-a-thon, bringing 100+ student builders together to ship real products.';
const roles = ['Co-Founder', 'Events', 'Partnerships', 'Community'];

export const meta = () => {
  return baseMeta({ title: 'ESEC', description, prefix: 'Projects' });
};

export const Esec = () => {
  return (
    <Fragment>
      <ProjectContainer>
        <ProjectHeader
          title={title}
          description={description}
          url="https://www.esecuw.org/startup-a-thon"
          linkLabel="Visit ESEC"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Overview</ProjectSectionHeading>
              <ProjectSectionText>
                ESEC is the student-run entrepreneurship club I co-founded at the
                University of Washington. It connects students to founders, investors,
                and Israel&apos;s startup ecosystem through hands-on projects, tech
                consulting, and startup internships.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Zero to One Startup-a-thon</ProjectSectionHeading>
              <ProjectSectionText>
                We hosted the first-ever Zero to One Startup-a-thon in April 2026 — a
                two-day build sprint at the HUB Lyceum, run with the UW Lavin
                Entrepreneurship Program and the Claude Builder Club @ UW. 100+ of UW&apos;s
                most ambitious students came out; we selected 40 teams from 100+
                applications and paired them with 25+ mentors, including a dedicated AI2
                Incubator coaching room.
              </ProjectSectionText>
              <ProjectSectionText>
                This wasn&apos;t an ideathon. Every team walked in with a working proof of
                concept and pitched it to founders, mentors, and judges — moving from
                zero to one over a single weekend.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>What teams walked away with</ProjectSectionHeading>
              <ProjectSectionText>
                Every participant got Claude Pro and API credits, and winning teams
                competed for $5K+ in prizes, an AI2 Incubator interview, and a year of
                Formations. Pulling it off meant lining up partners, sponsors, mentors,
                and venue logistics — and giving UW&apos;s most ambitious builders real
                runway to go from zero to one.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
