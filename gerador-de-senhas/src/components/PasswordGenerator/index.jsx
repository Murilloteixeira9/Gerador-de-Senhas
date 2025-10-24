import { useState, useEffect } from "react";
import "./style.css";
import PasswordBox from "../PasswordBox";
import CopyPasswordButton from "../CopyPasswordButton";

const PasswordGenerator = () => {
    const [password, setPassword] = useState("")
    const [passwordLenght, setPasswordLength] = useState(8)
    const [digitsLenght, setDigitsLenght] = useState(2)
    const [symbolsLenght, setSymbolsLenght] = useState(2)

    useEffect(() => {
        const draftPassword = [];
        
        let lettersLenght = passwordLenght - digitsLenght - symbolsLenght;
        if (lettersLenght < 0) lettersLenght = 0;

        draftPassword.push(...Array.from({ length: digitsLenght }, randomDigits))
        draftPassword.push(...Array.from({ length: symbolsLenght }, randomSymbols))
        draftPassword.push(...Array.from({ length: lettersLenght }, randomLetter))
        



        setPassword(
            draftPassword
            .slice(0, passwordLenght)
            .sort(() => Math.random() - 0.5)
            .join("")
        ); 
    }, [passwordLenght, digitsLenght, symbolsLenght]);

    const randomDigits = () =>{
        const digits = "0123456789"; 
        return digits[Math.floor(Math.random() * digits.length)]
    }

    const randomSymbols = () =>{
        const symbols = "!@#$%¨&*()-+`{}/?"; 
        return symbols[Math.floor(Math.random() * symbols.length)]
    }

    const randomLetter= () =>{
        const letters = "abcdefghijklmnopqrstuvwxyz"; 
        const letter = letters[Math.floor(Math.random() * letters.length)]
        return Math.random() >= 0.5 ? letter : letter.toUpperCase();
    };

    return (
        <>
            <div className='slider'>
                <label htmlFor='password-lenght'>Tamanho</label>
                <input id='password-lenght' type='range' min={4} max={64} value={passwordLenght} onChange={({target}) => setPasswordLength(parseInt(target.value))}></input>
                <span>{passwordLenght}</span>
            </div> 

            <div className='slider'>
                <label htmlFor='digits-lenght'>Digitos</label>
                <input id='digits-lenght' type='range' min={0} max={10} value={digitsLenght} onChange={({target}) => setDigitsLenght(parseInt(target.value))}></input>
                <span>{digitsLenght}</span>
            </div> 

            <div className='slider'>
                <label htmlFor='symbols-lenght'>Símbolos</label>
                <input id='symbols-lenght' type='range' min={0} max={10} value={symbolsLenght} onChange={({target}) => setSymbolsLenght(parseInt(target.value))}></input>
                <span>{symbolsLenght}</span>
            </div> 
            <PasswordBox password={password}/>
            <CopyPasswordButton password={password}/>
        </>
            
    )
}
export default PasswordGenerator