
import { useEffect, useState } from "react";

function useCustom(basecurrency, targetcurrency, amount) {
    const [convertedamount, setconvertedamount] = useState(null);
    const [error, seterror] = useState(null);
    const [currency,setcurrency]=useState([])

    useEffect(() => {
        const fetchFunction = async () => {
            try {
                const response = await fetch(`https://v6.exchangerate-api.com/v6/d5ee2ed750eb02a2055f2554/latest/${basecurrency}`);
                const data = await response.json();

                if (response.ok) {
                    const rate = data.conversion_rates[`${targetcurrency.toUpperCase()}`];
                   
                    setcurrency(Object.keys(data.conversion_rates))
                    // console.log(currency)

                    // Check if the target currency rate exists
                    if (rate) {
                        const result = amount * rate;
                        setconvertedamount(result);
                        seterror(null);  // Clear any previous errors
                    } else {
                        seterror(`Currency rate for ${targetcurrency} not found`);
                    }
                } else {
                    seterror("Failed to fetch data from the API");
                }
            } catch (err) {
                seterror("An error occurred: " + err.message);
            }
        };
        

            fetchFunction();
        
        
    }, [basecurrency, targetcurrency, amount]);

    return { convertedamount, error ,currency};
}

export default useCustom;
