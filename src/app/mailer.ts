'use server'

import { createTransport } from "nodemailer";
const transport =  createTransport({
	service: "gmail",
	auth: {
		user: "vicnet.video@gmail.com",
		pass: process.env.MAIL_PASS,
	},
});


type MailData = {
	name:string
	phone:string,
	email:string,
	date:string,
	timefrom:string,
	timeto:string,
	mte:string,
}
export async function SendMail(md:MailData) {
	const info = await transport.sendMail({
		from: 'DJ Katavila Website <vicnet.video@gmail.com>',
		to: 'mgmt@djkatavila.com',
		// to: 'shuba.dev313@gmail.com',
		replyTo: md.email,
		subject: `[Booking Request Form] A new request from ${md.name}!` ,
		html:`
		<>
			<h1>Booking Request Form Sent from the website</h1>
			<hr/>
			<h2>NAME:</h2>
			<p> ${md.name}</p>
			<h2>PHONE:</h2>
			<p> ${md.phone}</p>
			<h2>EMAIL:</h2>
			<p> ${md.email}</p>
			<h2>DATE:</h2>
			<p> ${md.date}</p>
			<h2>TIME FROM:</h2>
			<p> ${md.timefrom}</p>
			<h2>TIME TO:</h2>
			<p> ${md.timeto}</p>
			<h2>MUSIC TYPE & EQUIPMENT:</h2>
			<p> ${md.mte}</p>
		</>
		`
	})

	if(info.accepted.length > 0){
		return true
	}else{
		return false
	}
	
}