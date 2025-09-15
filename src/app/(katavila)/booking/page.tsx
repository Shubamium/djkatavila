'use client'
import { Fa4 } from 'react-icons/fa6';
import './booking.scss';
import { SendMail } from '@/app/mailer';
import { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
export default function Booking(){
	const [loading,setLoading] = useState(false);
	const [statusText,setStatusText] = useState('Loading . . .');
	return <main id="p_booking">
		<section id="bh">
			<h2>BOOKING REQUEST FORM</h2>
			
		</section>

		<div className={`loading ${loading ? 'active' : ''}`}>
			<FaSpinner/>
			<p>{statusText}</p>
		</div>
		<form id="bf" onSubmit={async (e)=>{
			e.preventDefault();
			const form = new FormData(e.target as HTMLFormElement);
			// console.log(form.get('date'));
			// return;
			setStatusText('Sending...');
			setLoading(true);
			const res = await SendMail(
				{
					name: form.get('name') as string,
					phone: form.get('phone') as string,
					email: form.get('email') as string,
					date: new Date(form.get('date') as string).toLocaleDateString(), 
					timefrom: form.get('timefrom') as string,
					timeto: form.get('timeto') as string,
					mte: form.get('mte') as string,
				}
			)

			if(res){
				setStatusText('Your request has been sent successfully.');
			}else{
				setStatusText('There was an error sending your request.');
			}
			setTimeout(()=>{
				setLoading(false);
			},2000)
		}}>
				<div className="confine">
					<div className="l">
						<img src="/g/bookingpic.png" alt="" />
					</div>
				<div className="r">
					<div className="mail">
						<h2>For Inquiries:</h2>
						<a href="mailto:mgmt@djkatavila.com">mgmt@djkatavila.com</a>
					</div>
					<p>or submit a message:</p>
					<div className="fg">
						<div className="field">
							<label htmlFor="name">Name:</label>
							<input type="text" name='name' required placeholder='Write your name here...' />
						</div>
						<div className="field">
							<label htmlFor="phone">Phone:</label>
							<input type="tel" name='phone' required placeholder='+1 (123) 456 7890' />
						</div>
						<div className="field">
							<label htmlFor="email">Email:</label>
							<input type="email" name='email' required placeholder='your.email@gmail.com' />
						</div>
					</div>
					<div className="fg">
						<div className="field">
							<label htmlFor="date">DATE:</label>
							<input type="date" name='date'  required />
						</div>
						<div className="field">
							<label htmlFor="timefrom">TIME FROM:</label>
						<select name="timefrom" id='timefrom' required>
  <option value="12:00 AM">12:00 AM</option>
  <option value="1:00 AM">1:00 AM</option>
  <option value="2:00 AM">2:00 AM</option>
  <option value="3:00 AM">3:00 AM</option>
  <option value="4:00 AM">4:00 AM</option>
  <option value="5:00 AM">5:00 AM</option>
  <option value="6:00 AM">6:00 AM</option>
  <option value="7:00 AM">7:00 AM</option>
  <option value="8:00 AM">8:00 AM</option>
  <option value="9:00 AM">9:00 AM</option>
  <option value="10:00 AM">10:00 AM</option>
  <option value="11:00 AM">11:00 AM</option>
  <option value="12:00 PM">12:00 PM</option>
  <option value="1:00 PM">1:00 PM</option>
  <option value="2:00 PM">2:00 PM</option>
  <option value="3:00 PM">3:00 PM</option>
  <option value="4:00 PM">4:00 PM</option>
  <option value="5:00 PM">5:00 PM</option>
  <option value="6:00 PM">6:00 PM</option>
  <option value="7:00 PM">7:00 PM</option>
  <option value="8:00 PM">8:00 PM</option>
  <option value="9:00 PM">9:00 PM</option>
  <option value="10:00 PM">10:00 PM</option>
  <option value="11:00 PM">11:00 PM</option>
</select>

						</div>
							<div className="field">
							<label htmlFor="timeto">Time to:</label>
						<select name="timeto" id='timeto'>
  <option value="12:00 AM">12:00 AM</option>
  <option value="1:00 AM">1:00 AM</option>
  <option value="2:00 AM">2:00 AM</option>
  <option value="3:00 AM">3:00 AM</option>
  <option value="4:00 AM">4:00 AM</option>
  <option value="5:00 AM">5:00 AM</option>
  <option value="6:00 AM">6:00 AM</option>
  <option value="7:00 AM">7:00 AM</option>
  <option value="8:00 AM">8:00 AM</option>
  <option value="9:00 AM">9:00 AM</option>
  <option value="10:00 AM">10:00 AM</option>
  <option value="11:00 AM">11:00 AM</option>
  <option value="12:00 PM">12:00 PM</option>
  <option value="1:00 PM">1:00 PM</option>
  <option value="2:00 PM">2:00 PM</option>
  <option value="3:00 PM">3:00 PM</option>
  <option value="4:00 PM">4:00 PM</option>
  <option value="5:00 PM">5:00 PM</option>
  <option value="6:00 PM">6:00 PM</option>
  <option value="7:00 PM">7:00 PM</option>
  <option value="8:00 PM">8:00 PM</option>
  <option value="9:00 PM">9:00 PM</option>
  <option value="10:00 PM">10:00 PM</option>
  <option value="11:00 PM">11:00 PM</option>
</select>

						</div>
						
					</div>
					<div className="field">
						<label htmlFor="mte">Music Type & Equipment:</label>
						<textarea name="mte" id="mte" required placeholder='Write the detail here...'></textarea>
					</div>
					<button className='btn btn-submit' type='submit'>SUBMIT </button>
				</div>
				</div>
		</form>
	</main>
}