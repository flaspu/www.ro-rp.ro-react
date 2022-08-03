import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faDownload, faCheck } from '@fortawesome/free-solid-svg-icons'

import BuyGame from '../assets/media/backgrounds/buy-game.png';
import DownloadClient from '../assets/media/backgrounds/download-client.png';
import CreateAccount from '../assets/media/backgrounds/create-account.png';

export default function Steps() {
    return (
        <div className="container mx-auto font-poppins mt-5 px-[30px] xl:px-0">
            <h2 className="text-4xl font-semibold text-[#333] mb-4">Pașii preliminari</h2>
            <div className="flex flex-col gap-4">
                <div className="step shadow-lg flex flex-col xl:flex-row items-center xl:h-[200px] h-auto p-10 xl:p-0" style={ { backgroundImage: `url('${BuyGame}')` } }>
                    <div className="flex items-center justify-between flex-col xl:flex-row">
                        <div className="icon mx-20 mt-4 xl:mt-0">
                            <FontAwesomeIcon icon={ faShoppingBasket } />
                        </div>
                        <div className="step-content text-white xl:w-[30vw] w-full my-10 xl:my-0">
                            <h2 className="font-semibold text-3xl">Achiziționarea jocului</h2>
                            <div className="separator"></div>
                            <p className="text-xl">Primul pas pentru a putea juca la noi pe comunitate este
                                achizitionarea jocului Grand Theft Auto V.</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-end w-full mx-20">
                        <a href="#" className="btn bg-primary text-slate-800 outline-primary font-medium">Cumpără</a>
                    </div>
                </div>
                <div className="step shadow-lg flex flex-col xl:flex-row items-center xl:h-[200px] h-auto p-10 xl:p-0" style={ { backgroundImage: `url('${DownloadClient}')` } }>
                    <div className="flex items-center justify-between flex-col xl:flex-row">
                        <div className="icon mx-20 mt-4 xl:mt-0">
                            <FontAwesomeIcon icon={ faDownload } />
                        </div>
                        <div className="step-content text-white xl:w-[30vw] w-full my-10 xl:my-0">
                            <h2 className="font-semibold text-3xl">Descărcarea clientului</h2>
                            <div className="separator"></div>
                            <p className="text-xl">Al doilea pas este descărcarea clientului. Puteți face asta accesând butonul din partea dreaptă.</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-end w-full mx-20">
                        <a href="#" className="btn bg-primary text-slate-800 outline-primary font-medium">Descarcă</a>
                    </div>
                </div>
                <div className="step shadow-lg flex flex-col xl:flex-row items-center xl:h-[200px] h-auto p-10 xl:p-0" style={ { backgroundImage: `url('${CreateAccount}')` } }>
                    <div className="flex items-center justify-between flex-col xl:flex-row">
                        <div className="icon mx-20 mt-4 xl:mt-0">
                            <FontAwesomeIcon icon={ faCheck } />
                        </div>
                        <div className="step-content text-white xl:w-[30vw] w-full my-10 xl:my-0">
                            <h2 className="font-semibold text-3xl">Crearea contului</h2>
                            <div className="separator"></div>
                            <p className="text-xl">Ultimul pas este crearea contului. Pentru mai multe informații, puteți accesa pagina oficială de Wikipedia.</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-end w-full mx-20">
                        <a href="#" className="btn bg-primary text-slate-800 outline-primary font-medium">Înregistrare</a>
                    </div>
                </div>
            </div>
        </div>
    );
}