import { gmailRepositories } from '@clear/https';
import GmailServices from './serveices';

const gmailServices = new GmailServices(gmailRepositories);

export { gmailServices };
