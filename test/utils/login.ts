import MailosaurClient from 'mailosaur';
import * as models from 'mailosaur/lib/models';

const LOANS_CLIENT_ID = process.env.LOANS_B2C_CLIENT_ID;

export async function getOTP(apiKey:string, serverID:string) {
	const clientId = LOANS_CLIENT_ID!.toLocaleLowerCase();
	const mailosaur = new MailosaurClient(apiKey)
	const criteria = {
		sentTo: `${clientId}@${serverID}.mailosaur.net`,
	}

	const email:models.Message = await mailosaur.messages.get(serverID, criteria, { receivedAfter: new Date(), timeout: 30 * 1000 })

	if (email.subject?.includes('OTP for Login')) {
		const message = email.html?.body;
		const regEx = new RegExp('([0-9]{6})')
		const matches = regEx.exec(message||'');
		if (matches) {
			return matches[0]
		}

		throw new Error('could not get OTP from email')
	}
}