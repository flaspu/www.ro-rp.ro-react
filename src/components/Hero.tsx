import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faWikipediaW, faFacebook, faInstagram, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons'

import Play from '../assets/media/icons/play.svg';


export default function Hero() {
    return (
        <div className="container mx-auto font-poppins px-[30px] md:px-0">
            <div className="flex flex-col md:grid grid-cols-2 py-10">
                <div className="flex flex-col justify-center">
                    <h2 className="font-semibold bg-gradient-to-r from-slate-800 to-slate-400 bg-clip-text font-display text-5xl tracking-tight text-transparent">România Roleplay</h2>
                    <p className="text-gray-600 py-4 font-light text-lg">O comunitate de Hard Roleplay care rulează prin intermediul <span className="font-medium">RAGE Multiplayer</span>. Înfiinţată în data de 21 decembrie 2011, comunitatea este în continuă dezvoltare, dovadă sistemele noi, actualizările frecvente, dar şi User Control Panel-ul avansat. Având în vedere cele menţionate, comunitatea românească de hard roleplay a urcat imediat în top, fiind prima şi singura care să atingă un număr de 500 de jucători online în acelaşi timp.</p>
                    <div className="flex gap-5 mt-5">
                        <a href="https://ro-rp.ro/discord/" className="btn bg-discord text-lg text-white outline-discord"><FontAwesomeIcon icon={ faDiscord } /> Discord</a>
                        <a href="https://wiki.ro-rp.ro/" className="btn bg-primary text-lg text-slate-800 outline-primary"><FontAwesomeIcon icon={ faWikipediaW } /> Wikipedia</a>
                    </div>
                </div>
                <div className="flex justify-end flex-col gap-4">
                    <div className="flex justify-end trailer mt-10 md:mt-0 ml-auto xl:w-[620px] w-full">
                        <button className="play">
                            <img src={ Play } alt="Play" />
                        </button>
                    </div>
                    <div className="flex gap-4 justify-end">
                        <button className="btn-icon bg-white text-2xl text-facebook outline-facebook"><FontAwesomeIcon icon={ faFacebook } /></button>
                        <button className="btn-icon bg-white text-2xl text-instagram outline-instagram"><FontAwesomeIcon icon={ faInstagram } /></button>
                        <button className="btn-icon bg-white text-2xl text-youtube outline-youtube"><FontAwesomeIcon icon={ faYoutube } /></button>
                        <button className="btn-icon bg-white text-2xl text-black outline-black"><FontAwesomeIcon icon={ faTiktok } /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}