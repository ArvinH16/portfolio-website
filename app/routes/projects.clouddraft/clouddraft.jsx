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

const title = 'CloudDraft — AWS Infrastructure Builder';
const description =
  'Built a multi-agent system that discovers live AWS resources and generates validated Infrastructure-as-Code through LLM-powered workflow orchestration.';
const roles = ['Multi-Agent Systems', 'Infrastructure as Code', 'AI Integration'];

export const meta = () => {
  return baseMeta({ title: 'CloudDraft', description, prefix: 'Projects' });
};

export const CloudDraft = () => {
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
                CloudDraft is a multi-agent system that reverse-engineers existing cloud
                environments into clean, validated Infrastructure-as-Code. It discovers live
                AWS resources via Terraformer, then runs them through an LLM-powered workflow
                that generates, reviews, and validates the resulting Terraform — turning a
                manual, error-prone process into an automated pipeline.
              </ProjectSectionText>
              <ProjectSectionText>
                Built with Python and Terraform, the system orchestrates multiple agents that
                each own a stage of the generation workflow, coordinating to produce IaC that
                actually applies cleanly.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Parallel resource scanning</ProjectSectionHeading>
              <ProjectSectionText>
                Engineered a parallel resource scanner that connects to key AWS service types
                — EC2, Lambda, RDS, and S3 — to map out an account&apos;s real infrastructure
                footprint quickly. Concurrency keeps discovery fast even across large,
                sprawling environments.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Validated before production</ProjectSectionHeading>
              <ProjectSectionText>
                Integrated LocalStack so generated IaC is smoke-tested against a local AWS
                emulation before it ever touches a production account. This validation loop
                catches misconfigurations early and gives confidence that the generated
                Terraform will apply safely in the real environment.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
