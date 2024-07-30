"use client";

import { useState } from "react";

export default function Register() {
    return (
        <>
            <div>
                <form action="/api/login" method="POST">
                    <input name="id" placeholder="ID" />
                    <input name="password" placeholder="Password" />
                    <button type="submit">버튼</button>
                </form>
            </div>
        </>
    );
}
