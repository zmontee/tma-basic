import React, {useEffect} from 'react';
import styles from './_styles.module.scss';
import type {CurrencyDescriptor} from "../../types/crassula.ts";
import {crassulaAPI} from "../../api/crassula.ts";
// import {fakeCurrencies} from "../../utils/constants.ts";

const CurrenciesList = () => {
    const [currencies, setCurrencies] = React.useState<CurrencyDescriptor[]>([]);

    useEffect(() => {
       crassulaAPI.getCurrencies().then(response => {
           setCurrencies(response.data);
           }
       )
       //  setTimeout(() => {
       //      setCurrencies(fakeCurrencies)
       //  }, 1000);
    }, []);

    return (
        <div className={styles.currencies_list}>
            <h2>Crassula Currencies</h2>
            <ul>
                {currencies.map(currency => (
                    <li key={currency.code}>
                        <span>{currency.code}</span>
                        <span className={styles.currency_name}>{currency.name} | {currency.type}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CurrenciesList;