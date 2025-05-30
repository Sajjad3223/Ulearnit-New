
//@ts-ignore
export const isProd = process.env.NODE_ENV === "production";

export const CurrentDomainUrl = isProd ?
    "https://ulearnit.ir":
    "http://localhost:3000";
export const ApiUrl = isProd ? "https://api.ulearnit.ir" : "http://localhost:5161";
//export const ApiUrl = "http://localhost:5161";
export const FtpUrl = "https://dl.ulearnit.ir";
//export const ApiUrl = "http://localhost:5000";