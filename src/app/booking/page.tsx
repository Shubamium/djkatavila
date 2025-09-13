import { Fa4 } from 'react-icons/fa6';
import './booking.scss';
export default function Booking(){
	return <main id="p_booking">
		<section id="bh">
			<h2>BOOKING REQUEST FORM</h2>
			
		</section>
		<form id="bf">
				<div className="confine">
					<div className="l">
						<img src="/g/bookingpic.png" alt="" />
					</div>
				<div className="r">
					<div className="mail">
						<h2>For Inquiries:</h2>
						<a href="mailto:">your.email@gmail.com</a>
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
							<input type="date"  required />
						</div>
						<div className="field">
							<label htmlFor="timefrom">TIME FROM:</label>
						<select name="hour" id='timefrom' required>
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
							<label htmlFor="timefrom">Time to:</label>
						<select name="hour" id='timefrom'>
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
						<label htmlFor="misc">Music Type & Equipment:</label>
						<textarea name="misc" id="misc" required placeholder='Write the detail here...'></textarea>
					</div>
					<button className='btn btn-submit' type='submit'>SUBMIT </button>
				</div>
				</div>
		</form>
	</main>
}