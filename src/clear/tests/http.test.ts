import GmailRepositories from '../https/repositories.google'; 
import { mock_Return } from './mock';

jest.mock('googleapis', () => {
    const messagesMock = {
        list: jest.fn(),
        delete: jest.fn(),
    };
    return {
        google: {
            auth: {
                OAuth2: jest.fn(() => ({
                    setCredentials: jest.fn(),
                    getAccessToken: jest.fn(),
                })),
            },
            gmail: jest.fn(() => ({
                users: {
                    messages: messagesMock,
                },
            })),
        },
        messagesMock,
    };
});
describe('GmailService', () => {
    let gmailRepositories: GmailRepositories;
    const { messagesMock } = jest.requireMock('googleapis'); 

    beforeEach(() => {
        gmailRepositories = new GmailRepositories();
        jest.clearAllMocks();
    });
// (retorna una respuesta verifica que se autentica y retorna data)
    test('should authenticate and fetch all emails', async () => {
        messagesMock.list.mockResolvedValue({
            data: {
                messages: [{ id: '123', threadId: '456' }],
            },
        });

        const emails = await gmailRepositories.getAllEmails();

        expect(emails).toEqual(mock_Return.Response_List);
        expect(messagesMock.list).toHaveBeenCalledWith({ userId: 'me' });
    });
//(retorna una respuesta vacia)
    test('should handle no emails found when fetching all emails', async () => {
        messagesMock.list.mockResolvedValue({
            data: { messages: [] },
        });

        const emails = await gmailRepositories.getAllEmails();

        expect(emails).toEqual([]);
        expect(messagesMock.list).toHaveBeenCalledWith({ userId: 'me' });
    });
});
