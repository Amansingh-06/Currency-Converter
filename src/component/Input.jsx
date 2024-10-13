import { useState } from "react"
import "../component/Input.css"
import useCustom from "./Hooks/useCustom.js"
function Input() {
    const [basecurrency, setBasecurrency] = useState("USD")
    const [targetcurrency, setTargetcurrency] = useState("INR")
    const [amount, setAmount] = useState();
    const [trigred,setTrigred] = useState(false)

    const { convertedamount ,currency} = useCustom(basecurrency, targetcurrency, trigred ? amount : 0)
    function handleclick() {
        setTrigred(true)
    }
    function handleSwap(event) {
        event.preventDefault();
        setBasecurrency(targetcurrency)
        setTargetcurrency(basecurrency)
    
    }




    return (
        
        <div className="main">
            
            <div className="part1">a</div>
            <div className="part2">
                <div className="wrapper">
                <form >
                    <div className="first">
                            <label>From</label>
                            <div className="inputwrapper">
                                <input type="number" placeholder="0" value={amount} onChange={(e) => {
                                    setAmount(e.target.value)
                                    setTrigred(false)
                                }
                                }></input>
                                <select
                                    value={basecurrency}
                                    onChange={(e) => {
                                        setBasecurrency(e.target.value);
                                    
                                    }}
                                >
                                    {
                                        currency.map((currencyKey) => (
                                            <option key={currencyKey} value={currencyKey}>
                                                
                                                {currencyKey}
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>
                        <button className="swapbtn"onClick={handleSwap}>Swap</button>
                        <div className="Second">
                            <label>To</label>
                            <div className="inputwrapper">
                                <input type="number" value={convertedamount} ></input>
                                <select
                                    value={targetcurrency}
                                    onChange={(e) => {
                                        setTargetcurrency(e.target.value) 
                                        
                                    }}
                                >
                                    {currency.map((currencyKey) => (
                                        <option key={currencyKey} value={currencyKey}>
                                            {currencyKey}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                       
                    </form>
                    <button type="button" className="convertbtn" onClick={handleclick}>Convert {basecurrency} to {targetcurrency}</button>
                </div>

            </div>
        </div>
    )
}
export default Input

