import { CaseStudy } from '~/components/case-study/case-study';
import { baseMeta } from '~/utils/meta';

const description =
  'I co-founded BeamBell and took our first product, SalonAgent, from 0 to 1: a customer communication and back-office automation platform now used by paying salons across four countries.';
export const meta = () =>
  baseMeta({ title: 'BeamBell', description, prefix: 'Projects' });

export const BeamBell = () => (
  <CaseStudy
    company="BeamBell"
    title="Building the product. Earning the customer."
    description={description}
    positionLabel="Co-Founder & CEO · Seattle"
    period="February 2025 – Present"
    url="https://beambell.com"
    linkLabel="Visit BeamBell"
    outcome="From the first customer conversation to a live platform serving paying salons across four countries."
    tools={[
      'Node.js',
      'Twilio',
      'Deepgram',
      'ElevenLabs',
      'CRM & scheduling integrations',
      'Conversation evaluations',
    ]}
    sections={[
      {
        title: 'From customer discovery to delivery',
        paragraphs: [
          'BeamBell started with the work salon owners needed help handling: customer conversations, scheduling, and the administrative tasks behind them. I co-founded the company and built our first product, SalonAgent, from 0 to 1.',
          'As Co-Founder and CEO, I own customer discovery, technical scoping, and delivery. Working directly with paying salons helps me decide what to build and understand how the product performs in real businesses.',
        ],
      },
      {
        title: 'Agents that can complete the task',
        paragraphs: [
          'I engineered agents that execute tasks inside salon CRM and scheduling systems, together with the execution harnesses that support those actions. The product connects customer communication to the back-office work needed to act on a request.',
          'The real-time voice pipeline is built with Node.js, Twilio, Deepgram, and ElevenLabs. It connects live calls, speech recognition, agent execution, and spoken responses into one conversation.',
        ],
      },
      {
        title: 'Reliability during real customer calls',
        paragraphs: [
          'I built service health checks that run during live calls, alongside scheduled cron checks. When a component fails, the failure-handling workflow routes alerts and diagnostic context to the engineer responsible for it.',
          'Monitoring is tied to component ownership, giving the person responding to an issue the context needed to investigate it.',
        ],
      },
      {
        title: 'A daily feedback loop, with human review',
        paragraphs: [
          'I built a daily evaluation framework that scores customer conversations for successful assistance and checks whether the agent followed its configured prompts.',
          'Evaluation findings and follow-up questions help refine customer context and prompts under human review. That gives us a repeatable way to improve the service as we learn from conversations across different salons.',
        ],
      },
    ]}
  />
);
