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

const title = 'AI Competitive Intelligence Agent';
const description =
  'Built an autonomous outbound AI agent automating market research through phone-based competitor analysis at scale. Winner at the YC Hackathon.';
const roles = ['Full-Stack Development', 'AI/Voice Pipeline', 'Data Visualization'];

export const meta = () => {
  return baseMeta({ title: 'AI Competitive Intelligence Agent', description, prefix: 'Projects' });
};

export const AiIntelAgent = () => {
  return (
    <Fragment>
      <ProjectContainer>
        <ProjectHeader
          title={title}
          description={description}
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Overview</ProjectSectionHeading>
              <ProjectSectionText>
                Built an autonomous outbound AI agent that automates market research by
                conducting phone-based competitor analysis at scale. The agent calls
                competitor businesses, gathers structured intelligence, and populates an
                analytics dashboard — replacing hours of manual research with an automated
                pipeline.
              </ProjectSectionText>
              <ProjectSectionText>
                This project won the YC Hackathon, competing against teams building on
                cutting-edge AI infrastructure.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Voice pipeline</ProjectSectionHeading>
              <ProjectSectionText>
                Engineered a Pipecat voice pipeline combining Gemini 2.5 Flash for
                reasoning, Deepgram for speech-to-text, and ElevenLabs for
                text-to-speech. The pipeline achieves an 85% call completion rate through
                careful optimization of call flow, interruption handling, and natural
                conversation pacing.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Analytics dashboard</ProjectSectionHeading>
              <ProjectSectionText>
                Shipped an analytics dashboard built with Next.js visualizing data from
                50+ competitors. Includes ML-based detection for distinguishing human
                respondents from AI phone systems, allowing the agent to adapt its
                conversational strategy in real time. Built on Python and FastAPI with
                Twilio handling telephony.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
