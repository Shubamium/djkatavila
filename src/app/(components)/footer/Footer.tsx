import Link from 'next/link';
import './footer.scss';
export async function Footer(){
	return <footer id="footer">
		<img src="/d/footer-circ-l.png" alt="" className='footer-circ l' />
		<img src="/d/footer-circ-r.png" alt="" className='footer-circ r' />
		<img src="/g/logo_f.png" alt="" className='logo' />
		<div className="socials">
			<a href="#" className='btn btn-sc'>
				<img src="/g/ic_ig.png" alt="" />
			</a>
			<a href="#" className='btn btn-sc'>
				<img src="/g/ic_tt.png" alt="" />
			</a>
			<a href="#" className='btn btn-sc'>
				<img src="/g/ic_yt.png" alt="" />
			</a>
			<a href="#" className='btn btn-sc'>
				<img src="/g/ic_sp.png" alt="" />
			</a>
			<a href="#" className='btn btn-sc'>
				<img src="/g/ic_mc.png" alt="" />
			</a>
		</div>
		<nav id='fnav'>
			<Link href={'/'} className='btn'> ABOUT</Link>
			<Link href={'/schedule'} className='btn'> SCHEDULE</Link>
			<Link href={'/booking'} className='btn'> BOOKING</Link>
		</nav>
		<a href='https://x.com/shubamium2' className="attrib">
			<p>website design by <span>SHUBAMIUM</span></p>
		</a>
	</footer>
}