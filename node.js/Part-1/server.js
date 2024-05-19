const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

const { MongoClient } = require("mongodb");

let db;
const url =
    "mongodb+srv://admin:qwer1234@coddingapple.pvwxzc0.mongodb.net/?retryWrites=true&w=majority&appName=CoddingApple";
new MongoClient(url)
    .connect()
    .then((client) => {
        console.log("DB연결성공");
        db = client.db("forum");
    })
    .catch((err) => {
        console.log(err);
    });
app.listen(8080, () => {
    console.log("https://localhost:8080 에서 서버 실행중");
});

app.get("/", (요청, 응답) => {
    응답.sendFile(__dirname + "/index.html");
});

app.get("/profile", (요청, 응답) => {
    응답.sendFile(__dirname + "/my-profile.html");
});

app.get("/news", (요청, 응답) => {
    응답.send("오늘 비옴");
});

app.get("/list", async (요청, 응답) => {
    let result = await db.collection("post").find().toArray();
    응답.render("list.ejs", { posts: result });
});

app.get("/shop", (요청, 응답) => {
    응답.send("쇼핑 페이지임");
});

app.get("/time", (요청, 응답) => {
    let currentTime = new Date();
    응답.render("time.ejs", { time: currentTime });
});