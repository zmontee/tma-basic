import axios from "axios";
import {CurrencyDescriptor} from "../types/crassula.ts";

const crassulaAPIInstance = axios.create({
    baseURL: 'https://client.crassula.io',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const crassulaAPI = {
    async getCurrencies() {
        return crassulaAPIInstance.get<CurrencyDescriptor[]>('/api/public/currencies');
    }
};