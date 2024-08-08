"use client";

import { signIn, signOut } from "next-auth/react";
import { useState } from "react";

export default function LoginBtn({ session }) {
    let [isLogin, setIsLogin] = useState(true);
    console.log(session);
    return (
        <>
            <div className="login-btn">
                <button
                    onClick={() => {
                        signIn();
                        setIsLogin(true);
                    }}
                >
                    로그인
                </button>
                <div>
                    <span>{session.user.name}</span>
                    <button
                        onClick={() => {
                            signOut();
                            setIsLogin(false);
                        }}
                    >
                        로그아웃
                    </button>
                </div>
            </div>
        </>
    );
}
