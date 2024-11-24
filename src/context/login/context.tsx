'use client'
import { createContext } from "react";

export interface IauthData {
    isLogin: boolean
    update?:(props:IauthData) => void
    username:string
}

export const authData = createContext<IauthData | undefined>(undefined)