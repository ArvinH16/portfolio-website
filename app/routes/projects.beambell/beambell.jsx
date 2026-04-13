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

const title = 'BeamBell — AI Voice Receptionist';
const description =
  'Co-founded and built a production AI voice receptionist platform from 0 to 1, scaling to 9 live locations within 6 weeks of launch.';
const roles = ['Full-Stack Development', 'AI/Voice Pipeline', 'Product Strategy', 'GTM'];

export const meta = () => {
  return baseMeta({ title: 'BeamBell', description, prefix: 'Projects' });
};

export const BeamBell = () => {
  return (
    <Fragment>
      <ProjectContainer>
        <ProjectHeader
          title={title}
          description={description}
          url="https://beambell.com"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Overview</ProjectSectionHeading>
              <ProjectSectionText>
                Co-founded and built a production AI voice receptionist platform from 0 to
                1. Scaled to 9 live locations within 6 weeks of launch. Built the
                full-stack platform using React, Next.js, Node.js, and
                Supabase/PostgreSQL, along with a real-time voice pipeline using
                WebSockets, WebRTC, and streaming LLMs — cutting latency by 77.5% (from
                4.0s to 0.9s).
              </ProjectSectionText>
              <ProjectSectionText>
                Worked with clients daily, shipping CRM and calendar integrations along
                with automated workflows to streamline front-desk operations across
                multiple business verticals.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Technical highlights</ProjectSectionHeading>
              <ProjectSectionText>
                The voice pipeline was the core engineering challenge — reducing
                end-to-end latency from over 4 seconds to under 1 second required
                rearchitecting the streaming stack with WebRTC for audio transport,
                WebSockets for real-time LLM token streaming, and careful tuning of
                speech-to-text and text-to-speech integration points.
              </ProjectSectionText>
              <ProjectSectionText>
                The platform also included a dashboard for business owners to configure
                their AI receptionist, view call logs, manage appointments, and integrate
                with existing tools like Google Calendar and popular CRM systems.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Outcomes</ProjectSectionHeading>
              <ProjectSectionText>
                Reached 9 live client locations within 6 weeks of launch. The AI
                receptionist handled inbound calls, scheduled appointments, answered
                business-specific questions, and routed complex inquiries — allowing
                businesses to reduce staffing costs while maintaining a high-quality
                customer experience around the clock.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
