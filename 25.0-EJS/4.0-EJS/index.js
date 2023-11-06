import express from "express";

const app = express();
const port = 3000;
const today = new Date("October 30, 2023 01:15:00");
const dayOfWeek = today.getDay();

if((dayOfWeek === 0) || (dayOfWeek === 6)){
    app.get("/", (req, res) => {
        res.render("index.ejs", 
        { 
            dayType: "a weekend", 
            advice: "it's time to have fun",
        });
    });
}

if((dayOfWeek >= 1) && (dayOfWeek <= 5)){
    app.get("/", (req, res) => {
        res.render("index.ejs", 
        { 
            dayType: "a weekday", 
            advice: "it's time to work hard",
        });
    });
}

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});