import React, { Component } from "react";
import axios from "axios";
import qr_code from './image/monero_qr.png'

import './Converter.css';

class Converter extends Component {
    state = {
        result: null,
        fromCurrency: "USD",
        toCurrency: "GBP",
        amount: 1,
        currencies: ['USD'],
        crypto_currencies: ['BTC'],
    };

    // Initializes the currencies with values from the api
     componentDidMount() {
         axios
             .get("https://min-api.cryptocompare.com/data/blockchain/list?&api_key=67006b7cdb18b7adfd8c39f2a0f203566ec3f07d0b5b9ef9751a2fb51353cb1d")
             .then(response => {
                 const currencyAr = ["ASD"]
                 for (const key in response.data.Data) {
                     currencyAr.push(key)
                 }
                 this.setState({ crypto_currencies: currencyAr.sort() })
             })
             .catch(err => {
                 console.log("Opps", err.message);
             });


        axios
        .get("https://api.exchangeratesapi.io/latest")
        .then(response => {
            // Initialized with 'EUR' because the base currency is 'EUR'
            // and it is not included in the response
            const currencyAr = ["EUR"]
            for (const key in response.data.rates) {
                currencyAr.push(key)
            }
            this.setState({ currencies: currencyAr.sort() })
        })
        .catch(err => {
            console.log("Opps", err.message);
        });
     }


    // Event handler for the conversion
    convertHandler = () => {
        if (this.state.fromCurrency !== this.state.toCurrency) {
            axios
                .get(`https://min-api.cryptocompare.com/data/price?fsym=${this.state.fromCurrency}&tsyms=${this.state.toCurrency}`)
                .then(response => {
                    const result = this.state.amount * (response.data[this.state.toCurrency])
                    this.setState({ result: result.toFixed(5) })
                })
                .catch(err => {
                    console.log("Opps", err.message);
                });
        } else {
            this.setState({ result: "You cant convert the same currency!" })
        }
    };

    // Updates the states based on the dropdown that was changed
    selectHandler = (event) => {
        if (event.target.name === "from") {
            this.setState({ fromCurrency: event.target.value })
        }
        if (event.target.name === "to") {
            this.setState({ toCurrency: event.target.value })
        }
    }

    render() {
        return (
            <div className="Converter">
                <h2><span>Crypto </span> Converter <span role="img" aria-label="money">&#x1f4b5;</span> </h2>
                <div className="Form">
                    <input
                        name="amount"
                        type="text"
                        value={this.state.amount}
                        onChange={event =>
                            this.setState({ amount: event.target.value })
                        }
                    />
                    <select
                        name="from"
                        onChange={(event) => this.selectHandler(event)}
                        value={this.state.fromCurrency}
                    >
                        {this.state.crypto_currencies.map(cur => (
                            <option key={cur}>{cur}</option>
                        ))}
                    </select>
                    <select
                        name="to"
                        onChange={(event) => this.selectHandler(event)}
                        value={this.state.toCurrency}
                    >
                        {this.state.currencies.map(cur => (
                            <option key={cur}>{cur}</option>
                        ))}
                    </select>
                    <button onClick={this.convertHandler}>Convert</button>
                </div>
                {this.state.result && 
                    <h3>{this.state.result}</h3>
                }
                <div>
                    <text>
                        Donate:
                    </text>
                    <img src={qr_code} alt="qr"/>
                    <text>
                        monero:4B8xYuW1ufmZPMQ8JR7rmG17fu1JbniaoBFQg7YWcYV1CHpMMJLTfva1hhMnuKXF7k3rDCFTtmxFBc4kM6aDSDynPuWhx4Y
                    </text>
                </div>
            </div>
        );
    }
}

export default Converter;
