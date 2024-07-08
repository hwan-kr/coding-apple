import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

let Box = styled.div`
    background: #fff2cc;
`;

function Detail(props) {
    let { id } = useParams();
    let item = props.shoes.find((x) => x.id == id);
    let [alert, setAlert] = useState(true);

    useEffect(() => {
        let a = setTimeout(() => {
            setAlert(false);
        }, 2000);
        return () => {
            clearTimeout(a);
        };
    }, []);

    return (
        <div className="container">
            {alert == true ? <Box>2초 후 박스 사라짐.</Box> : null}
            <div className="row">
                <div className="col-md-6">
                    <img
                        src="https://codingapple1.github.io/shop/shoes1.jpg"
                        width="100%"
                    />
                </div>
                <input></input>
                <div className="col-md-6">
                    <h4 className="pt-5">{item.title}</h4>
                    <p>{item.content}</p>
                    <p>{item.price}</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    );
}

export default Detail;
