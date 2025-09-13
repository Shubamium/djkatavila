import { FaCalendar } from 'react-icons/fa';
import './schedule.scss';
export default function Schedule(){
	return <main id="p_sched">
		<section id='sh'>
			<img src="/g/schedhed.png" alt="" />
			<img src="/d/scl.png" alt=""  className='sch l' />
			<img src="/d/scr.png" alt=""  className='sch r' />
		</section>
		<div id="sl">
			<div className="s btn">
				<div className="date">
					<FaCalendar/> <p>SEP 20 - SEP22</p>
				</div>
				<div className="image">
					<img src="/g/evpch.png" alt="" className='ev' />
					<div className="info">
						<h2>EVENTS NAME</h2>
						<p>Event Info / Type</p>
					</div>
				</div>
				<div className="action">
					<p>Action Text</p>
					<img src="/d/longarr.svg" alt="" />
				</div>
			</div>
		
		</div>

		<section id='ytlist'>
			<img src="d/wave.png" alt=""  className='wave l'/>
			<img src="d/wave.png" alt=""  className='wave r'/>
			<div className="vid">
						<iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Q9rmgcP-G04?si=41-v_fk8MbVBNTl2&autoplay=0&loop=1"
              allow=";accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
			</div>
			<div className="vid">
						<iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Q9rmgcP-G04?si=41-v_fk8MbVBNTl2&autoplay=0&loop=1"
              allow=";accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
			</div>
			<div className="vid">
						<iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Q9rmgcP-G04?si=41-v_fk8MbVBNTl2&autoplay=0&loop=1"
              allow=";accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
			</div>
		</section>
	</main>
}