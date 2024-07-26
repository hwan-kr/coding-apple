import Link from "next/link";

export default function Home() {
    let name = "jeon";
    return (
        <div>
            <h4 style={{ color: "red", fontSize: "30px" }} className="title">
                승환후레시
            </h4>
            <p className="title-sub">by dev {name}</p>
        </div>
    );
}
