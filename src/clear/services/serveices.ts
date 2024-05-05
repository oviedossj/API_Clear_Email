import { IGmailRepositories, IGmailServices } from '@clear/models'; 
import { gmail_v1 } from 'googleapis';
class GmailServices implements IGmailServices < gmail_v1.Schema$Message >  {
    constructor(private readonly repository: IGmailRepositories) {}

    public async processEmails(): Promise<(gmail_v1.Schema$Message)[]> {
        try {
            const allEmails = await this.repository.getAllEmails();
            const data = allEmails[0].id
            if (data == undefined) { throw new Error("Error Data");}
            const Rto = await this.repository.getOneEmails(data)
            if (Rto == undefined) { throw new Error("Error Rto");}
            console.log(Rto)
                // --------------------------------------------------
            // const emailDetailsPromises = allEmails.map(async email => {
            //         if(email.id)  return await this.repository.getOneEmails(email.id)
            //     }
            // );
            // const detailedEmails = await Promise.all(emailDetailsPromises);
            // console.log(detailedEmails[0])
            // return detailedEmails.filter(email => email !== undefined); 
            return  allEmails
        } catch (error) {
            console.error("Failed to process emails:", error);
            throw new Error("Error processing emails");
        }
    }
}

export default GmailServices;
