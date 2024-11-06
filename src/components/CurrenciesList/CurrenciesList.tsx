import React, {useEffect} from 'react';
import styles from './_styles.module.scss';
import {CurrencyDescriptor} from "../../types/crassula.ts";
import {crassulaAPI} from "../../api/crassula.ts";

const CurrenciesList = () => {
    const [currencies, setCurrencies] = React.useState<CurrencyDescriptor[]>([]);

    useEffect(() => {
       crassulaAPI.getCurrencies().then(response => {
           setCurrencies(response.data);
           }
       )
    }, []);

    return (
        <div className={styles.currencies_list}>
            <h2>Currencies</h2>
            <ul>
                {currencies.map(currency => (
                    <li key={currency.code}>
                        <span>{currency.code}</span>
                        <span>{currency.caption}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CurrenciesList;