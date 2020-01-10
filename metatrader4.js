import MetaTrader4 from "metatrader4";
 
const mt4 = new MetaTrader4({
    apiKey: "CHANGEME",
    reqUrl: "tcp://127.0.0.1:5555",
    pullUrl: "tcp://127.0.0.1:5556"
});
 
mt4.onConnect(() => {
    console.log("Connected");
    mt4.getAccountInfo().then((account) => {
        console.log(account);
    });
    mt4.getLastCandles("EURUSD").then((candles) => {
        console.log(candles);
    });
});
 
mt4.connect();