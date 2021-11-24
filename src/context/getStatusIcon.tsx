import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import {ButonBox} from '../components/ButonBox'
import { api } from "../services/api";

type Status = {
    Temperatura: string;
    Vibracao: string;
    Luminosidade: string;
    Ruido: string
}

type UserStatusContextData ={
    UserStatus: Status | null
}

export const UserStatusContext = createContext({} as UserStatusContextData)

type UserStatusProvider = {
    children:  ReactNode;
}

export function UserStatusProvider(props: UserStatusProvider){

    
    return;
}