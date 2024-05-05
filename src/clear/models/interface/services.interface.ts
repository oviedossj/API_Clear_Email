import { gmail_v1 } from 'googleapis';

export interface IGmailServices<T> {
    processEmails(): Promise<( T )[]>;
}
