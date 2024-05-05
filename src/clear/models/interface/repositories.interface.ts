import { gmail_v1 } from "googleapis";
import { IEmailsIds } from ".";

export interface IGmailRepositories {
    // getAllEmails(): Promise<any[]>;
    getAllEmails():Promise<gmail_v1.Schema$Message[]>
    getEmailsByCriteria(criteria: string): Promise<any[]>;
    getOneEmails(_id:string): Promise<gmail_v1.Schema$Message | undefined>;
    deleteEmails(emailIds: IEmailsIds[]): Promise<void>;
}
// export interface IIGmailRepositories<T> {
//     getAllEmails(): Promise<T[]>;
//     getEmailsByCriteria(criteria: string): Promise<T[]>;
//     deleteEmails(emailIds: string[]): Promise<void>;
// }
