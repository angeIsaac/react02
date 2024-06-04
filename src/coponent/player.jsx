
// eslint-disable-next-line react/prop-types
export default function Player({nom, logo, age, nationalite, numero, imageUrl}){

    return(
        <div className="container mx-auto px-6 py-5 font-poppins">
            <div className="grid grid-cols-2 shadow-md w-2/4 rounded-lg dark:bg-slate-800">
                <div className="container mx-auto px-4">
                    <div>
                        <img src={imageUrl} alt={nom}
                        width={300}
                        height={300}
                        />
                    </div>
                </div>
                <div className="container mx-auto px-2 py-1">
                    <div className="grid grid-cols-2 grid-row-3 gag-y-10 gap-x-6 h-3/4 px-3 py-2 text-white">
                        <div>
                            <h2 className="text-base uppercase leading-8">Nom: <span className="text-base uppercase">{nom}</span></h2>
                        </div>
                        <div>
                            <p className="text-base uppercase leading-8">Nationalité: {nationalite}</p>
                        </div>
                        <div>
                            <p className="text-base uppercase">Dosat: {numero}</p>
                        </div>
                        <div>
                            <p className="text-base uppercase">age: {age}</p>
                        </div>
                        <div>
                            <p className="inline-flex items-center justify-center px-2">equipe: 
                                <img className="ml-4" src={logo} alt="logo city" 
                                width={40}
                                height={40}
                                />
                            </p>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className="border-none w-full py-5 px-4 text-center rounded-md text-white focus:scale-95 transition-colors duration-200 mb-3 bg-red-600 hover:bg-red-400">
                        footboller
                    </div>
                </div>
                
            </div>
        </div>
    )
}

