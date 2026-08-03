import { createContext, useState } from "react";

export const ThemeContext = createContext<any>(null);


export function ThemeProvider({children}:any){

    const [dark,setDark] = useState(true);


    return(
        <ThemeContext.Provider value={{dark,setDark}}>
            <div className={dark ? "dark" : "light"}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}