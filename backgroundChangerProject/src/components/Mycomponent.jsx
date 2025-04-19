import React, { useState } from "react";
import ReactLogo from '../assets/react.svg'
function Mycomponent () {

    const [color, setColor] = useState('gray');

    function handlerFunction () {
        let i = 0;
        const colors = ["red", "pink", "indigo", "green", "yellow", "brown", "violet"];
        
        setInterval(() => {
            setColor(colors[i % colors.length]);
            i++;
        }, 1000);
    }
    

    return (
        <>
            <main className="w-full h-screen bg-slate-300"
            style={{backgroundColor : color, transition : 'all 0.3s linear'}}>
                <div className="flex items-center justify-center">
                <h1 className="text-black mx-auto text-5xl font-bold font-mono">Background Changer</h1>
                </div>
                <img className= "mx-auto m-12 w-32 animate-spin" src={ReactLogo} 
                alt="this is the image of react.js" 
                style={{animation : 'spin 3s linear infinite'}}/>
                <div className="flex items-center justify-center">
                <h2 className="text-black text-3xl font-semibold font-mono">Using React.js</h2>
                </div>

                <div className="fixed bottom-24 flex items-center justify-center w-full flex-col">
                    <div className="rounded-3xl bg-white text-white shadow-2xl m-4 gap-4 px-4 py-2 flex flex-wrap items-center justify-center">
                        <button onClick={ () => setColor('red')} className="focus:text-black hover:scale-105 transition-all rounded-4xl outline-none shadow-2xl font-bold bg-red-500 px-4 py-2 border-[0.5px]" >Red</button>
                        <button onClick={ () => setColor('pink')} className="focus:text-black hover:scale-105 transition-all rounded-4xl outline-none shadow-2xl font-bold bg-pink-500 px-4 py-2 border-[0.5px]" >pink</button>
                        <button onClick={ () => setColor('indigo')} className="focus:text-black hover:scale-105 transition-all rounded-4xl outline-none shadow-2xl font-bold bg-indigo-500 px-4 py-2 border-[0.5px]" >indigo</button>
                        <button onClick={ () => setColor('green')} className="focus:text-black hover:scale-105 transition-all rounded-4xl outline-none shadow-2xl font-bold bg-green-500 px-4 py-2 border-[0.5px]" >green</button>
                        <button onClick={ () => setColor('yellow')} className="focus:text-black hover:scale-105 transition-all rounded-4xl outline-none shadow-2xl font-bold bg-yellow-500 px-4 py-2 border-[0.5px]" >yellow</button>
                        <button onClick={ () => setColor('brown')} className="focus:text-black hover:scale-105 transition-all rounded-4xl outline-none shadow-2xl font-bold bg-amber-900 px-4 py-2 border-[0.5px]" >brown</button>
                        <button onClick={ () => setColor('violet')} className="focus:text-black hover:scale-105 transition-all rounded-4xl outline-none shadow-2xl font-bold bg-violet-700 px-4 py-2 border-[0.5px]" >violet</button>
                    </div>
                    <div>
                        <button className="focus:text-cyan-400 hover:scale-105 transition-all rounded-4xl outline-none shadow-2xl font-bold bg-white px-4 py-2 border-[0.5px]"
                        onClick={() => handlerFunction()}>
                            On Repeat
                        </button>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Mycomponent;