export default function handler(요청, 응답) {
    const data = 요청.body.title;
    if (요청.method == "POST") {
        return 요청.status(200).json(data);
    }
}
