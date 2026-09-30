import { CaseStudy } from '~/components/case-study/case-study';
import { baseMeta } from '~/utils/meta';

const description =
  'I build applied AI agents for professional sports clubs at Arkero, working directly with MLS teams from discovery and technical scoping through on-site deployment.';
export const meta = () => baseMeta({ title: 'Arkero', description, prefix: 'Projects' });

export const Arkero = () => (
  <CaseStudy
    company="Arkero AI"
    title="From club data to action on the ground."
    description={description}
    positionLabel="Engineer · Seattle"
    period="February 2026 – Present"
    url="https://www.arkero.ai"
    linkLabel="Visit Arkero"
    outcome="A season-ticket outreach agent deployed at San Diego FC helped generate tens of thousands of dollars in its first month."
    tools={[
      'Enterprise memory',
      'Salesforce',
      'Asana & email',
      'Ticketing data',
      'Reverse ETL',
    ]}
    sections={[
      {
        title: 'Working with the people using the product',
        paragraphs: [
          'Arkero builds an enterprise AI platform used by professional sports clubs. My role spans the engineering work and the customer relationship: understanding how a team operates, scoping the right workflow, and helping deploy it on site.',
          'I work directly with Major League Soccer clients and bring their operational needs and feedback back into the product. That connection keeps the engineering grounded in the work club staff need to get done.',
        ],
      },
      {
        title: 'Season-ticket outreach at San Diego FC',
        paragraphs: [
          'I shipped an agent at San Diego Football Club that combines in-house risk predictions with account history to guide season-ticket outreach. It gives the team relevant context for deciding which accounts to engage and how to approach the conversation.',
          'The deployment helped generate tens of thousands of dollars in first-month revenue. My contribution connected the predictive work to a workflow the club could use in its day-to-day operations.',
        ],
      },
      {
        title: 'Memory that carries across workflows',
        paragraphs: [
          'I develop the enterprise memory layer behind chat tools and recurring workflows. I built a meeting assistant and knowledge base, and integrate Asana, Salesforce, and email so agents can retrieve relevant context and execute tasks across the tools a club already uses.',
          'The work connects conversations, organizational knowledge, and operational systems so useful context can carry forward into the next task.',
        ],
      },
      {
        title: 'Closing the loop with Salesforce',
        paragraphs: [
          'I also contributed to ticketing data synchronization and reverse ETL pipelines. These pipelines write model outputs back to Salesforce in bulk, updating ticket-buyer records so club staff can use the results in their existing CRM workflows.',
        ],
      },
    ]}
  />
);
