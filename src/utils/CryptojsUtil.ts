let CryptoJSUtil= require("crypto-js");

//Get the SALT from th esystem environment variable 
const SALT=process.env.SALT || "defaultSalt";


//Encryption Function
export function encrypt(text:string){
const cipherText=CryptoJSUtil.AES.encrypt(text,SALT).toString();
return cipherText;
}



//Decryption Function
export function decrypt(cipherText:string){
    const bytes=CryptoJSUtil.AES.decrypt(cipherText,SALT);
    
    const originalText=bytes.toString(CryptoJSUtil.enc.Utf8);
    
    return originalText;
    }