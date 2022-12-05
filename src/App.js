import React, { useState } from "react";
import "./App.css";
import buttons from "./libs/buttons.json";

const App = () => {
    const [result, setResult] = useState("");

    const handleClick = (val) => {
        setResult(result.concat(val));
        console.log("clicked");
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
                <input
                    className="w-full md:w-[600px] lg:w-[800px] p-2 break-words bg-slate-300 text-right"
                    type="text"
                    value={result}
                />

                {buttons.length > 0 ? (
                    <div className=" grid grid-cols-4 w-full md:w-[600px] lg:w-[800px]">
                        {buttons.map((item) => (
                            <button
                                className={`${item.name==="0" ? "col-span-2" : "col-span-1"} ${item.name==="+" || item.name==="-" || item.name==="*" || item.name==="/" ? "bg-orange-600" : "bg-slate-100"} p-2 border`}
                                onClick={() =>
                                    item.function === "clear"
                                        ? clear()
                                        : item.function === "toogleSign"
                                        ? toggleSign()
                                        : item.function === "handleClick"
                                        ? handleClick(item.name)
                                        : item.function === "percentage"
                                        ? percentage()
                                        : item.function === "calculate"
                                        ? calculate()
                                        : null
                                }
                                id={item.id}
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
                ) : null}
            </div>
        </>
    );
};

export default App;
