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
  'Co-founded ESEC and grew it into one of UW\'s top startup clubs — bringing in founders and speakers, placing students in startup internships, and running one of UW\'s biggest startup events.';
const roles = ['Co-Founder', 'Community', 'Partnerships', 'Events'];

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
          url="https://www.esecuw.org"
          linkLabel="Visit ESEC"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Overview</ProjectSectionHeading>
              <ProjectSectionText>
                ESEC is a student-run entrepreneurship club I co-founded at the
                University of Washington and helped grow into one of the school&apos;s leading
                startup communities. It connects students to founders, investors, and
                Israel&apos;s startup ecosystem through hands-on projects, tech consulting, and
                startup internships.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Building the club</ProjectSectionHeading>
              <ProjectSectionText>
                We built ESEC into one of UW&apos;s most active startup clubs — bringing in
                founders and speakers, and placing students directly into startup
                internships. A big part of that was partnerships: we lined up the AI2
                Incubator, Inworld AI, and others to give members real access to people
                building at the frontier.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Our flagship event</ProjectSectionHeading>
              <ProjectSectionText>
                We ran one of the biggest startup events at UW — the Zero to One
                Startup-a-thon — in partnership with Anthropic&apos;s Claude and the UW Lavin
                Entrepreneurship Program. 100+ student builders, 40 teams selected from
                100+ applications, 25+ mentors, and $5K+ in prizes, with every team
                walking in with a working proof of concept rather than just an idea.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
