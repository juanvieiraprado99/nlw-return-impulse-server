import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "ab2cd8636a9322",
      pass: "eb55dfd6bcb83a"
    }
});

export class NodermailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Juan Vieira Prado <juanprado99@gmail.com>',
            subject,
            html: body,
        });
    };
}