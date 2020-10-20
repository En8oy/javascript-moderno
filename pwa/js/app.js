// Verificar si se puede usar el serviceWorker
if (navigator.serviceWorker){
    // console.log("Podemos usarlo")
    // Lo convencional es agregar el sw en el index 
    navigator.serviceWorker.register('/sw.js')
}
