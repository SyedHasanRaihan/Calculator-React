import React, { useState } from "react";
import "./App.css";
const App = () => {
    const [result, setResult] = useState("");

    const handleClick = (e) => {
        setResult(result.concat(e.target.name));
    };

    const clear = () => {
        setResult("");
    };

    const toggleSign = () => {
        setResult(result * -1);
    };
    const percentage = () => {
        setResult(result / 100);
    };

    const calculate = () => {
        try {
            setResult(eval(result).toString());
        } catch (error) {
            setResult("ERROR");
            clear();
        }
    };

    return (
        <>
            <div className="flex flex-col justify-center items-center h-screen text-base md:text-xl lg:text-3xl">
                <input className="w-full md:w-[600px] lg:w-[800px] p-2 break-words bg-slate-300 text-right" type="text" value={result} />

                <div className=" grid grid-cols-4 w-full md:w-[600px] lg:w-[800px]">
                    <button className="col-span-1 bg-slate-100 p-2 border" onClick={clear} id="clear">
                        AC
                    </button>
                    <button
                        className="col-span-1 bg-slate-100 p-2 border"
                        onClick={toggleSign}
                        id="toggleSign"
                    >
                        +/-
                    </button>
                    <button
                        className="col-span-1 bg-slate-100 p-2 border"
                        onClick={percentage}
                        id="percentage"
                    >
                        %
                    </button>
                    <button
                        className="col-span-1 bg-orange-500 p-2 border"
                        name="/"
                        onClick={handleClick}
                    >
                        &divide;
                    </button>
                    <button className="col-span-1 bg-slate-100 p-2 border" name="7" onClick={handleClick}>
                        7
                    </button>
                    <button className="col-span-1 bg-slate-100 p-2 border" name="8" onClick={handleClick}>
                        8
                    </button>
                    <button className="col-span-1 bg-slate-100 p-2 border" name="9" onClick={handleClick}>
                        9
                    </button>
                    <button
                        className="col-span-1 bg-orange-500 p-2 border"
                        name="*"
                        onClick={handleClick}
                    >
                        &times;
                    </button>
                    <button className="col-span-1 bg-slate-100 p-2 border" name="4" onClick={handleClick}>
                        4
                    </button>
                    <button className="col-span-1 bg-slate-100 p-2 border" name="5" onClick={handleClick}>
                        5
                    </button>
                    <button className="col-span-1 bg-slate-100 p-2 border" name="6" onClick={handleClick}>
                        6
                    </button>
                    <button
                        className="col-span-1 bg-orange-500 p-2 border"
                        name="-"
                        onClick={handleClick}
                    >
                        &ndash;
                    </button>
                    <button className="col-span-1 bg-slate-100 p-2 border" name="1" onClick={handleClick}>
                        1
                    </button>
                    <button className="col-span-1 bg-slate-100 p-2 border" name="2" onClick={handleClick}>
                        2
                    </button>
                    <button className="col-span-1 bg-slate-100 p-2 border" name="3" onClick={handleClick}>
                        3
                    </button>
                    <button
                        className="col-span-1 bg-orange-500 p-2 border"
                        name="+"
                        onClick={handleClick}
                    >
                        +
                    </button>
                    <button className="col-span-2 bg-slate-100 p-2 border" name="0" onClick={handleClick}>
                        0
                    </button>
                    <button
                        className="col-span-1 bg-slate-100 p-2 border"
                        name="."
                        onClick={handleClick}
                    >
                        .
                    </button>
                    <button
                        className="col-span-1 bg-orange-500 p-2 border"
                        onClick={calculate}
                        id="result"
                    >
                        =
                    </button>
                </div>
            </div>
        </>
    );
};

export default App;
