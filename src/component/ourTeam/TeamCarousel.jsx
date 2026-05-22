import { FaFacebookF, FaTwitter, FaInstagram, FaGlobe } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import abuyousuf from "../../assets/image/investorImage/abuyousuf.jpg";
import mdsolaiman from "../../assets/image/investorImage/solaiman.jpeg";
import msaifulislam from "../../assets/image/investorImage/saiful.jpeg";
import abdullah from "../../assets/image/investorImage/abdullah.jpeg";
import sakhawot from "../../assets/image/investorImage/sakhawot.jpeg";
import minar from "../../assets/image/investorImage/minar.jpg";
import abdur from "../../assets/image/investorImage/abdur.jpg"
import "swiper/css";
import { useLang } from "../../i18n/LanguageContext";

const teamMembers = [
  { name: "ABU YOUSUF", role: "Founder & CEO", exp: "12+", img: abuyousuf, desc: "Expert in visa processing, investor license and business setup." },
  { name: "MD SOLAIMAN", role: "Senior Consultant", exp: "10+", img: mdsolaiman, desc: "Handles visa processing and documentation support." },
  { name: "MD MINAR", role: "Visa Specialist", exp: "8+", img: minar, desc: "Expert in tourist and family visa processing." },
  { name: "ABDUR RAHMAN", role: "Ticket Manager", exp: "9+", img:abdur, desc: "Specialist in Saudi investor license and company setup." },
  { name: "M SAIFUL ISLAM", role: "Business Consultant", exp: "7+", img: msaifulislam, desc: "Expert in air ticket booking worldwide." },
  { name: " SHAKHAWYAT HOSSAIN", role: "Travel Advisor", exp: "6+", img: sakhawot, desc: "Guides clients for best travel solutions." },
  { name: "ABDULLAH", role: "Support Executive", exp: "5+", img: abdullah, desc: "Handles client communication and support." },
    { name: "ABDULLAH", role: "Support Executive", exp: "5+", img: abdullah, desc: "Handles client communication and support." },
];

const TeamCarousel = () => {
  const { t } = useLang();
  return (
    <section className="py-20 bg-[#f7f9fc]">
      <div className="container mx-auto p-6">
        <div className="text-center mb-14">
          <p className="inline-block bg-[#0B3B75] text-white px-4 py-1 rounded-full text-sm">{t.team.tag}</p>
          <h2 className="text-4xl font-bold mt-4 text-[#0B3B75]">{t.team.title}</h2>
        </div>
        <Swiper modules={[Autoplay]} autoplay={{ delay: 2500, disableOnInteraction: false }} loop={true} spaceBetween={30} breakpoints={{ 0: { slidesPerView: 1 }, 640: { slidesPerView: 2 }, 1024: { slidesPerView: 4 } }}>
          {teamMembers.map((member, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition h-[340px] flex flex-col justify-between">
                <div className="relative flex justify-center mb-5 h-[90px]">
                  {member.img
                    ? <img src={member.img} className="w-24 h-24 rounded-full object-cover" alt={member.name} />
                    : <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#0B3B75] to-[#1E6FB8] flex items-center justify-center text-white text-2xl font-bold">{member.name[0]}</div>
                  }
                  <span className="absolute top-0 right-6 bg-red-500 text-white text-xs px-3 py-1 rounded-full">{member.exp} yrs</span>
                </div>
                <h3 className="font-semibold text-lg text-[#0B3B75] uppercase">{member.name}</h3>
                <p className="text-sm text-blue-500">{member.role}</p>
                <p className="text-gray-500 text-sm mt-3 leading-relaxed h-[60px]">{member.desc}</p>
                <div className="border-t my-4"></div>
                <div className="flex justify-center gap-4 text-gray-500">
                  <FaFacebookF className="hover:text-[#0B3B75] cursor-pointer" />
                  <FaGlobe className="hover:text-[#0B3B75] cursor-pointer" />
                  <FaTwitter className="hover:text-[#0B3B75] cursor-pointer" />
                  <FaInstagram className="hover:text-[#0B3B75] cursor-pointer" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default TeamCarousel;
