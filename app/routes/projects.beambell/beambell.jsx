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

const title = 'BeamBell — AI Receptionist';
const description =
  'Co-founded an AI receptionist company and built our first product, SalonAgent, from 0 to 1 — now live and booking clients across multiple salon locations.';
const roles = [
  'Co-Founder',
  'Full-Stack Engineering',
  'AI Voice Agents',
  'Go-to-Market',
];

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
          url="https://salonagent.ai"
          linkLabel="Visit SalonAgent"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Overview</ProjectSectionHeading>
              <ProjectSectionText>
                I co-founded BeamBell, an AI receptionist company, and built the
                platform from 0 to 1 — voice, text, and web agents that answer calls,
                book appointments, and handle customer questions around the clock. Our
                first product, SalonAgent, is a dedicated AI phone receptionist for
                salons that picks up every call with natural warmth so no client slips
                away.
              </ProjectSectionText>
              <ProjectSectionText>
                SalonAgent is live and taking real client calls across multiple salon
                locations. I built the full-stack platform with React, Next.js,
                Node.js, and Supabase/PostgreSQL, alongside a real-time voice pipeline
                tuned for genuine back-and-forth conversation.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Building the product</ProjectSectionHeading>
              <ProjectSectionText>
                The core of the platform is a streaming voice pipeline — speech-to-text,
                a reasoning layer over the business&apos;s own data, and text-to-speech —
                stitched together so the agent can hold a natural conversation, answer
                business-specific questions, and book straight into the calendar.
              </ProjectSectionText>
              <ProjectSectionText>
                An automated onboarding flow provisions a new receptionist by crawling a
                business&apos;s website and CRM, so an owner can go live quickly. From a
                dashboard they configure their agent, review call logs and transcripts,
                manage appointments, and connect existing tools like Google Calendar and
                their CRM.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Outcomes</ProjectSectionHeading>
              <ProjectSectionText>
                SalonAgent now answers inbound calls 24/7 across multiple salon
                locations — booking appointments, answering questions, and routing the
                calls that need a human. That lets owners capture business they would
                otherwise miss to voicemail or a busy front desk, while keeping the
                phone covered after hours and on weekends.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
