import { google, gmail_v1 } from 'googleapis';
import { IEmailsIds, IGmailRepositories } from '@clear/models';
import { config } from '@shared/index';

class GmailRepositories implements IGmailRepositories {
    private oauth2Client;

    constructor() {
        this.oauth2Client = new google.auth.OAuth2(
            config.web.client_id,
            config.web.client_secret,
            config.web.redirect_uri,
        );
    }

    private async authenticate() {
        this.oauth2Client.setCredentials({
            access_token: config.web.access_Token,
            refresh_token: config.web.refrest_token
        });
        await this.oauth2Client.getAccessToken();
    }
    
    // Este metodo retorna Each 100 los correos recibidos 
    public async getAllEmails(): Promise<gmail_v1.Schema$Message[]> {
        await this.authenticate();
        const gmail = google.gmail({ version: 'v1', auth: this.oauth2Client });
        const response = (await gmail.users.messages.list({ userId: 'me' }));
        return response.data.messages || [];
    }

// Este metodo retorna todos los correos recibidos 
    // public async getAllEmails(): Promise<gmail_v1.Schema$Message[]> {
    //     await this.authenticate();
    //     const gmail = google.gmail({ version: 'v1', auth: this.oauth2Client });
    //     let allMessages: gmail_v1.Schema$Message[] = [];
    //     let nextPageToken: string | null | undefined = undefined;
    //     do {
    //         const response = await gmail.users.messages.list({
    //             userId: 'me',
    //             maxResults: 500,
    //             pageToken: nextPageToken
    //         });
    //         const responseData: gmail_v1.Schema$ListMessagesResponse = response.data;
    //         const messages = responseData.messages || [];
    //         allMessages = allMessages.concat(messages);
    //         nextPageToken = responseData.nextPageToken;
    //     } while (nextPageToken);
    //     console.log('Find Emails '+ allMessages.length)
    //     return allMessages;
    // }
    public async getOneEmails(_id: string): Promise<gmail_v1.Schema$Message | undefined> {
        await this.authenticate();
        const gmail = google.gmail({ version: 'v1', auth: this.oauth2Client });
        try {
            const response = await gmail.users.messages.get({ userId: 'me', id: _id });
            return response.data; 
        } catch (error) {
            console.error("Failed to retrieve email:", error);
            return undefined;
        }
    }
    public async getEmailsByCriteria(criteria: string): Promise<any[]> {
        await this.authenticate();
        const gmail = google.gmail({ version: 'v1', auth: this.oauth2Client });
        const response = await gmail.users.messages.list({ userId: 'me', q: criteria });
        return response.data.messages || [];
    }

    public async deleteEmails(emailIds: IEmailsIds[]): Promise<void> {
        console.log(emailIds[0].id)
        await this.authenticate();
        // const id = emailIds[0]
        const gmail = google.gmail({ version: 'v1', auth: this.oauth2Client });
        // for (let id of emailIds) {
        //         await gmail.users.messages.delete({ userId: 'me', id });
        //     }
        await gmail.users.messages.delete({ userId: 'me', id:emailIds[0].id });
    }
}
export default  GmailRepositories 

