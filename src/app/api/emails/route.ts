import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";

// Handles POST requests to /api

export async function POST(request: any) {
  const username = process.env.NEXT_PUBLIC_BURNER_USERNAME;
  const password = process.env.NEXT_PUBLIC_BURNER_PASSWORD;
  const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;
  const myEmail2 = process.env.NEXT_PUBLIC_PERSONAL_EMAIL_2;

  // console.log("dealing with request");
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  // create transporter object
  const transporter = nodemailer.createTransport({
    // pool: true,
    // host: "srv1.kotakemail.com",
    host: "smtp.gmail.com",
    // service: "gmail",
    port: 587,
    secure: false,
    tls: {
      // ciphers: "SSLv3",
      rejectUnauthorized: false,
    },

    auth: {
      user: username,
      pass: password,
    },
  });

  try {
    const mail = await transporter.sendMail({
      from: username,
      // to: myEmail,
      to: `${myEmail}, ${myEmail2}`,
      replyTo: email,
      subject: `Website activity from ${email} about "${subject}"`,
      html: `
            <p>Name: ${name} </p>
            <p>Email: ${email} </p>
            <p>Message: ${message} </p>
            `,
    });

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "COULD NOT SEND MESSAGE" });
  }
}
