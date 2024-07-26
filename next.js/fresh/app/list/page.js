import "../globals.css";

export default function List() {
    let 상품 = ["Tomatoes", "Pasta", "Coconut"];

    return (
        <div>
            <h4 className="title">상품목록</h4>
            {/* <div className="food">
                <h4>{상품[0]} $40</h4>
            </div>
            <div className="food">
                <h4>{상품[1]} $40</h4>
            </div>
            <div className="food">
                <h4>{상품[2]} $40</h4>
            </div> */}
            {상품.map((a, i) => {
                return (
                    <div className="food">
                        <h4>{a} 40$</h4>
                    </div>
                );
            })}
        </div>
    );
}
