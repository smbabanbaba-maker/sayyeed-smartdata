// Server-side routing configuration; no purchase execution until secure checkout is implemented.
export type Provider = 'faiz' | 'alrahuz';
export const providerRoutes: Record<string, readonly Provider[]> = {
 'Data':['faiz','alrahuz'], 'Airtime':['faiz','alrahuz'],
 'Electricity':['faiz','alrahuz'], 'Cable TV':['alrahuz'],
 'Exam PIN':['faiz','alrahuz'], 'Bulk SMS':['faiz','alrahuz'],
 'Airtime to Cash':['faiz','alrahuz'], 'Transfer':['faiz'],
 'Cards':['faiz'], 'KYC Verification':['faiz'],
 'Service Validation':['faiz','alrahuz'], 'Gift Cards':['alrahuz'],
 'eSIM':['alrahuz'], 'International Top-up':['alrahuz'],
 'Recharge PIN':['alrahuz'], 'Data Card':['alrahuz'],
 'Data Coupon':['alrahuz'], 'Router & MiFi':['alrahuz'],
 'Voice & Internet':['alrahuz']
};
export type Quote = {provider:Provider; productKey:string; costKobo:number; available:boolean; expiresAt:number};
export function chooseQuote(service:string, productKey:string, quotes:readonly Quote[], now=Date.now()):Quote|undefined {
 return quotes.filter(q=>providerRoutes[service]?.includes(q.provider)&&q.productKey===productKey&&q.available&&Number.isSafeInteger(q.costKobo)&&q.costKobo>0&&q.expiresAt>now).sort((a,b)=>a.costKobo-b.costKobo)[0];
}
// Never switch providers on pending, timeout, or unknown status.
export function canConsiderFallback(status:string):boolean {return status==='confirmed_failed_no_delivery';}
