import { MailAdapter, SendMailData } from '../mail-adapter';
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'c171735cb71997',
    pass: '6f373e3caea82e',
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedbacks <feedback@feedback.com>',
      to: 'Italo Souza Melo<italosm29@gmail.com>',
      subject,
      html: body,
    });
  }
}
