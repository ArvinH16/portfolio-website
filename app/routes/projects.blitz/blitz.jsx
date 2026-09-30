import { CaseStudy } from '~/components/case-study/case-study';
import { baseMeta } from '~/utils/meta';

const description =
  'A mass communication platform for clubs and organizations. Blitz brings personalized SMS, email, member management, and event check-in into one workspace.';

export const meta = () =>
  baseMeta({ title: 'Blitz', description, prefix: 'Projects' });

export const Blitz = () => (
  <CaseStudy
    company="Blitz"
    title="Keeping every member in the loop."
    description={description}
    positionLabel="Full-stack development"
    url="https://github.com/ArvinH16/blitz_mass_communication"
    linkLabel="View source on GitHub"
    outcome="One workspace for club announcements, member rosters, and event attendance."
    tools={['Next.js', 'React', 'TypeScript', 'Twilio', 'Google Sheets', 'CSV imports']}
    sections={[
      {
        title: 'From a club texting tool to a communication platform',
        paragraphs: [
          'Blitz began as a mass texting system for club members. Organizers could load a roster from Google Sheets or a CSV file, personalize a message, and send it to their contacts without contacting everyone individually.',
          'The project grew to bring SMS, email, member management, and events into one workspace for clubs, chapters, and teams.',
        ],
      },
      {
        title: 'Personalized messages across SMS and email',
        paragraphs: [
          'Organizers can send announcements and event updates through texts and emails. Personalized messages use member information, while AI-assisted drafting helps compose and refine the message before it goes out.',
          'The original texting workflow includes daily message limits and feedback on sending status, giving organizers visibility into their sends.',
        ],
      },
      {
        title: 'Managing the roster and the event',
        paragraphs: [
          'Google Sheets integration and file imports bring existing contact lists into the platform. Contact deduplication and opt-out handling help keep the roster usable as membership changes.',
          'An SMS registration flow collects a new member’s name and email and associates them with their organization. For events, QR-based check-in provides a live attendee list.',
        ],
      },
      {
        title: 'How it is built',
        paragraphs: [
          'The application uses Next.js, React, and TypeScript, with Twilio for SMS and the Google Sheets API for roster integration. Messaging, contact management, and event tools share the same application.',
          'The public repository contains the application source and setup documentation, including the contact import and SMS registration workflows.',
        ],
      },
    ]}
  />
);
