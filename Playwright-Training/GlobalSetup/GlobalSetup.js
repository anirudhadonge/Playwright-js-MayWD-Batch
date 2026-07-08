import dotenv from "dotenv";

export default function globalSetup() {
    console.log(process.env.URL);
    console.log(process.env.USERNAME);
    console.log(process.env.PASSWORD);
    dotenv.config({
        path: "./env/.env",
        override: true
    });

    console.log(process.env.URL);
    console.log(process.env.USERNAME);
    console.log(process.env.PASSWORD);
} 
