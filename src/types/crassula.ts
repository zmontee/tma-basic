export type CurrencyDescriptor = {
    code: string;
    type: string;
    caption: string;
    name: string;
    symbol: string;
    token: string | null;
    tokenVariant: string | null;
    significantDecimals: number;
    decimals: number;
}