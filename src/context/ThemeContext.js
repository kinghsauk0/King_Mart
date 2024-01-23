import { createContext,useContext, useState } from "react";

export const ThemeContext = createContext({
    isDrakmode: true,
    lightMode : {bg: '#FFFFFF',text: '#000000'},
    themeToggole : () => {},
})

export const ThemeProvider = ({children}) => {
    const [isDrakmode, setIsDarkmode] = useState(true)
    const [lightMode,setlightMode] =useState({bg: '#FFFFFF',text: '#000000'})
   

   const themeToggole =() => {
    setIsDarkmode((dark) => !dark)
    if(isDrakmode){
        setlightMode({bg: '#FFFFFF',text: '#000000'})
    }else{
        setlightMode({bg: '#000000',text: '#FFFFFFFF'})
    }  
   }

   return (
    <ThemeContext.Provider value={{isDrakmode, themeToggole,lightMode}}>
        {children}
    </ThemeContext.Provider>
   )
}

export const UseTheme = () => {
    return useContext(ThemeContext)
}