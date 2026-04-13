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

const title = 'CodeScope — AI Codebase Analytics';
const description =
  'Built a full-stack analytics application aggregating GitHub data to surface codebase insights, contributor profiling, and file ownership patterns across repositories.';
const roles = ['Full-Stack Development', 'Data Visualization', 'AI Integration'];

export const meta = () => {
  return baseMeta({ title: 'CodeScope', description, prefix: 'Projects' });
};

export const CodeScope = () => {
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
                Built a full-stack analytics application that aggregates GitHub data to
                surface actionable codebase insights. CodeScope provides contributor
                profiling, file ownership patterns, and code impact metrics — helping
                engineering teams understand how their codebase evolves over time.
              </ProjectSectionText>
              <ProjectSectionText>
                Built with React and Next.js on the frontend, Python on the backend, and
                the GitHub API for data ingestion. The application is designed to scale
                across large monorepos with thousands of contributors and millions of
                commits.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Interactive dashboards</ProjectSectionHeading>
              <ProjectSectionText>
                Designed interactive dashboards visualizing code ownership maps and impact
                metrics. Engineers can drill into individual files, see contribution
                history, identify knowledge concentration risks, and track how ownership
                shifts over time as teams grow and reorganize.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>LLM-powered queries</ProjectSectionHeading>
              <ProjectSectionText>
                Integrated LLM-based summarization to support natural language queries
                about codebase changes. Engineers can ask questions like "what changed in
                the auth module this quarter?" and receive structured summaries generated
                from commit history and diff analysis — making historical context
                immediately accessible without manual log archaeology.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
