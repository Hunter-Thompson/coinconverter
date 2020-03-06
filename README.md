# coinconverter

Gets certain crypto details

## How to build and run?

```bash
git clone https://github.com/Hunter-Thompson/coinconverter && cd coinconverter
docker build -t coinconverter .
docker run -d -p 80:3000 coinconverter
```

## How to query?

```bash
curl "http://localhost/api/converter?id=BTC&id=USD&id=.5"
or
curl "http://localhost/api/price?id=BTC&id=USD"
or
curl "http://localhost/api/fullcoin?id=BTC&id=USD"
```

## Example responses

for `/api/converter`

```bash
curl "http://localhost/api/converter?id=BTC&id=USD&id=.5"
.5 BTC = 4557.595 USD
```

For `/api/price` : 

```bash
curl "http://localhost/api/price?id=BTC&id=USD"
1 BTC = 9113.83 USD
```


For `/api/fullcoin`: 

```bash
curl "http://localhost/api/fullcoin?id=BTC&id=USD"
{
  "RAW": {
    "BTC": {
      "USD": {
        "TYPE": "5",
        "MARKET": "CCCAGG",
        "FROMSYMBOL": "BTC",
        "TOSYMBOL": "USD",
        "FLAGS": "2050",
        "PRICE": 9093.92,
        "LASTUPDATE": 1583404861,
        "MEDIAN": 9084.75,
        "LASTVOLUME": 0.05,
        "LASTVOLUMETO": 455.445,
        "LASTTRADEID": "421926388",
        "VOLUMEDAY": 15108.017653017543,
        "VOLUMEDAYTO": 135315526.2505431,
        "VOLUME24HOUR": 29481.747578054194,
        "VOLUME24HOURTO": 261189064.47732475,
        "OPENDAY": 8773.84,
        "HIGHDAY": 9110.49,
        "LOWDAY": 8772.83,
        "OPEN24HOUR": 8752.17,
        "HIGH24HOUR": 9116.42,
        "LOW24HOUR": 8692.65,
        "LASTMARKET": "Bitfinex",
        "VOLUMEHOUR": 1132.7446939565948,
        "VOLUMEHOURTO": 10306775.43601233,
        "OPENHOUR": 9102.17,
        "HIGHHOUR": 9110.49,
        "LOWHOUR": 9077.95,
        "TOPTIERVOLUME24HOUR": 26450.068964934195,
        "TOPTIERVOLUME24HOURTO": 233968000.98549256,
        "CHANGE24HOUR": 341.75,
        "CHANGEPCT24HOUR": 3.904745908728921,
        "CHANGEDAY": 320.0799999999999,
        "CHANGEPCTDAY": 3.6481175859144908,
        "CHANGEHOUR": -8.25,
        "CHANGEPCTHOUR": -0.09063772704750626,
        "SUPPLY": 18253775,
        "MKTCAP": 165998369548,
        "TOTALVOLUME24H": 516789.24205864983,
        "TOTALVOLUME24HTO": 4692724434.684302,
        "TOTALTOPTIERVOLUME24H": 262596.04292567616,
        "TOTALTOPTIERVOLUME24HTO": 2381460596.506563,
        "IMAGEURL": "/media/19633/btc.png",
        "CONVERSIONTYPE": "direct",
        "CONVERSIONSYMBOL": ""
      }
    }
  },
  "DISPLAY": {
    "BTC": {
      "USD": {
        "FROMSYMBOL": "Ƀ",
        "TOSYMBOL": "$",
        "MARKET": "CryptoCompare Index",
        "PRICE": "$ 9,093.92",
        "LASTUPDATE": "Just now",
        "LASTVOLUME": "Ƀ 0.05000",
        "LASTVOLUMETO": "$ 455.45",
        "LASTTRADEID": "421926388",
        "VOLUMEDAY": "Ƀ 15,108.0",
        "VOLUMEDAYTO": "$ 135,315,526.3",
        "VOLUME24HOUR": "Ƀ 29,481.7",
        "VOLUME24HOURTO": "$ 261,189,064.5",
        "OPENDAY": "$ 8,773.84",
        "HIGHDAY": "$ 9,110.49",
        "LOWDAY": "$ 8,772.83",
        "OPEN24HOUR": "$ 8,752.17",
        "HIGH24HOUR": "$ 9,116.42",
        "LOW24HOUR": "$ 8,692.65",
        "LASTMARKET": "Bitfinex",
        "VOLUMEHOUR": "Ƀ 1,132.74",
        "VOLUMEHOURTO": "$ 10,306,775.4",
        "OPENHOUR": "$ 9,102.17",
        "HIGHHOUR": "$ 9,110.49",
        "LOWHOUR": "$ 9,077.95",
        "TOPTIERVOLUME24HOUR": "Ƀ 26,450.1",
        "TOPTIERVOLUME24HOURTO": "$ 233,968,001.0",
        "CHANGE24HOUR": "$ 341.75",
        "CHANGEPCT24HOUR": "3.90",
        "CHANGEDAY": "$ 320.08",
        "CHANGEPCTDAY": "3.65",
        "CHANGEHOUR": "$ -8.25",
        "CHANGEPCTHOUR": "-0.09",
        "SUPPLY": "Ƀ 18,253,775.0",
        "MKTCAP": "$ 166.00 B",
        "TOTALVOLUME24H": "Ƀ 516.79 K",
        "TOTALVOLUME24HTO": "$ 4.69 B",
        "TOTALTOPTIERVOLUME24H": "Ƀ 262.60 K",
        "TOTALTOPTIERVOLUME24HTO": "$ 2.38 B",
        "IMAGEURL": "/media/19633/btc.png",
        "CONVERSIONTYPE": "direct",
        "CONVERSIONSYMBOL": ""
      }
    }
  }
}
```

