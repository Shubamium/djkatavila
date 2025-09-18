import { FaCalendar } from "react-icons/fa";
import "./schedule.scss";
import { getPayload } from "payload";
import payloadConfig from "@/payload.config";
export default async function Schedule() {
  const payload = await getPayload({
    config: await payloadConfig,
  });

  const sl = await payload.find({ collection: "Schedules" });

  const hd = await payload.findGlobal({ slug: "general" });

  return (
    <main id="p_sched">
      <section id="sh">
        <img src="/g/schedhed.png" alt="" />
        <img src="/d/scl.png" alt="" className="sch l" />
        <img src="/d/scr.png" alt="" className="sch r" />
      </section>
      <div id="sl">
        {/* {
				sl?.docs?.map((s,i)=>{
					return <a href={s.link ?? undefined} target='_blank' className="s btn">
				<div className="date">
					<FaCalendar/> <p>{s.date}</p>
				</div>
				<div className="image">
					<img src="/g/evpch.png" alt="" className='ev' />
					<div className="info">
						<h2>{s.name}</h2>
						<p>{s.it}</p>
					</div>
				</div>
				<div className="action">
					<p>{s.action_text}</p>
					<img src="/d/longarr.svg" alt="" />
				</div>
			</a>
				})
			} */}
        <script src="https://elfsightcdn.com/platform.js" async></script>
        <div
          className="elfsight-app-644c82f8-ff6e-4597-8900-1e1c875c9898 sched"
          data-elfsight-app-lazy=""
        ></div>
      </div>

      <section id="ytlist">
        <img src="d/wave.png" alt="" className="wave l" />
        <img src="d/wave.png" alt="" className="wave r" />
        {hd?.list_vid?.map((lv, i) => {
          return (
            <div className="vid" key={lv.id}>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${lv["Video ID"]}?autoplay=0&loop=1`}
                allow=";accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          );
        })}
      </section>
    </main>
  );
}
