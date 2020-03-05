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
from=BTC
to=USD
curl "http://localhost/fullcoin?id=$from?$to"
or
curl "http://localhost/coin?id=$from?$to"
```