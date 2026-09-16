import React, { useEffect, useRef, useState } from "react";
import "./jar.css";

function DecisionJar() {
    const [option, setOption] = useState([]);
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");
    const inputRef = useRef(null);

    function Results() {
        if (option.length === 0) {
            alert("First add something!");
            return;
        }

        const len = option.length;
        console.log(len);

        const showResult = Math.floor(Math.random() * len);

        setResult(option[showResult]);
    }

    function AddOption() {
        if (input.trim() === "") {
            alert("Please type something!");
            return;
        }

        setOption([...option, input]);
        setInput("");

        inputRef.current.focus();
    }

    function remove(index) {
        const arr = option.filter((item, itemindex) => {
            return itemindex != index;
        });

        setOption(arr);
    }

    function reset() {
        setOption([]);
        setResult("");
    }

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div className="decision-page">

            <div className="decision-card">

               

                <div className="header">

                    <div className="jar-icon">
                        🎲
                    </div>

                    <h1>Decision Jar</h1>

                    <p>
                        Add your options, shake the jar and let destiny decide!
                    </p>

                </div>


                {/* ================= INPUT SECTION ================= */}

                <div className="input-section">

                    <label>
                        ✎ &nbsp; Enter your option
                    </label>

                    <div className="input-row">

                        <input
                            type="text"
                            ref={inputRef}
                            placeholder="e.g. React.js, Javascript, DSA..."
                            value={input}
                            onChange={(e) =>
                                setInput(e.target.value)
                            }
                        />

                        <button
                            className="add-btn"
                            onClick={AddOption}
                        >
                            Add ＋
                        </button>

                    </div>


                    {/* Reset */}

                    <div className="action-row">

                        <span className="option-count">
                            {option.length} option
                            {option.length !== 1 ? "s" : ""}
                        </span>

                        <button
                            className="reset-btn"
                            onClick={reset}
                        >
                            ↻ &nbsp; Reset
                        </button>

                    </div>

                </div>


     

                <div className="options-section">

                    <div className="section-title">

                        <h2>
                            ☷ &nbsp; Your Options
                            <span className="option-count">
                                &nbsp;({option.length})
                            </span>
                        </h2>

                    </div>


                    {option.length === 0 ? (

                        /* EMPTY STATE */

                        <div className="empty-state">

                            <span>🫙</span>

                            <p>
                                No options added yet!
                            </p>

                            <small>
                                Start by adding your first option above.
                            </small>

                        </div>

                    ) : (

                        /* OPTION LIST */

                        <ol>

                            {option.map((item, index) => (

                                <li key={index}>

                                    {item}

                                    <button
                                        className="remove-btn"
                                        onClick={() =>
                                            remove(index)
                                        }
                                    >
                                        ×
                                    </button>

                                </li>

                            ))}

                        </ol>

                    )}

                </div>


             

                <button
                    className="result-btn"
                    onClick={Results}
                >
                    🎲 &nbsp; Show Results &nbsp; →
                </button>


           

                <div className="result-box">

                    <span>Your Decision</span>

                    <h2>
                        {result || "—"}
                    </h2>

                </div>

            </div>

        </div>
    );
}

export default DecisionJar;