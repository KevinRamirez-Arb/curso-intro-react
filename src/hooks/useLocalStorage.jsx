import React from "react";

function useLocalStorage(itemName, initialValue) {

    const [item, setItem] = React.useState(initialValue);

    const [loading, setLoading] = React.useState(true)

    const [error, setError] = React.useState(false)

    React.useEffect(
        ()=>{setTimeout(()=>{
            try{
                const locaStorageItem = localStorage.getItem(itemName);
                
                // throw locaStorageItem; 

                let parsedItem;
            
                if (!locaStorageItem) { // No existen datos en localStorage
                    localStorage.setItem(itemName,
                        JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else { // Si existen datos en localStorage
                    parsedItem = JSON.parse(locaStorageItem);
                }
    
                setItem(parsedItem)
                setLoading(false)
            }catch(err){
                setError(err)
            }
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, 1000)},[]);



    const saveItem = (newItem) => {
try {
    const stringfied = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringfied);
    setItem(newItem)
} catch (error) {
    setError(error  )
}
    }
    return {
        item,
        saveItem,
        loading,
        error
    }
}

export { useLocalStorage }