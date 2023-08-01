import { sign } from 'jsonwebtoken';
import { AES } from 'crypto-js';
import { ENV } from './config'

const B2C_CLIENT_ID = process.env.LOANS_B2C_CLIENT_ID;
const B2B_CLIENT_ID = process.env.LOANS_B2B_CLIENT_ID;
const key = ENV('JWT_SYMMETRIC_KEY');

export async function generateToken(isB2C: boolean): Promise<string> {
  if (!key) {
    throw new Error('env variables JWT_SYMMETRIC_KEY is not set');
  }
  let clientId = isB2C ? B2C_CLIENT_ID : B2B_CLIENT_ID;
  if (process.env.DEBUG) {
    console.log("using clientId :" + clientId + " to generate a token");
  }
  return sign({ userData: { user_id: clientId } }, key, { algorithm: 'HS256', expiresIn: '2h' });
}

export async function encryptToken(token: string, tokenEncryptionPassPhrase: string) {
  return token ? AES.encrypt(JSON.stringify(token),tokenEncryptionPassPhrase).toString() : null
} 
