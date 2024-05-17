const express = require("express");
const app = express();

app.listen(8080, () => {
    console.log("https://localhost:8080 에서 서버 실행중");
});

app.get("/", (요청, 응답) => {
    응답.send("반갑다");
});
