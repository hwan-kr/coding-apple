"use client";

export default function Cart() {
    let 장바구니 = ["Tomatoes", "Pasta"];

    return (
        <div>
            <h4 className="title">Cart</h4>
            <CartItem 장바구니={장바구니[0]}></CartItem>
            <CartItem 장바구니={장바구니[1]}></CartItem>
            <Banner content="현대카드"></Banner>
            <ColorBtn color="blue"></ColorBtn>
        </div>
    );
}

function Banner({ content }) {
    return <h5>{content} 결제 행사중</h5>;
}

function ColorBtn({ color }) {
    return (
        <div>
            <button style={{ background: color }}>버튼</button>
        </div>
    );
}

function CartItem({ 장바구니 }) {
    return (
        <div className="cart-item">
            <p>{장바구니}</p>
            <p>$40</p>
            <p>1개</p>
        </div>
    );
}
