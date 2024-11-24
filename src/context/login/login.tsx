'use client'
import { ReactNode, useState } from "react"
import { authData, IauthData } from "./context"

export const LoginProvider = ({ children }: { children: ReactNode }) => {
    const [context, setContext] = useState<IauthData>({
        username:"muzaffar",
        isLogin: true,
        update: (props: IauthData) => {
            setContext(props)
        }
    }

    )

    return (
        <authData.Provider value={context}>
            {children}
        </authData.Provider>
    )
}