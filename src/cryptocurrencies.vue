<template>
    <div id="app-cryptocurrencies">
        <v-layout row wrap>
            
            <v-flex xs12>
                <h1>Cryptocurrencies</h1>
            </v-flex>
            
            <v-flex xs12>
                <v-tabs grow>
                    <v-tabs-bar class="deep-purple lighten-5">
                        <v-tabs-slider class="yellow"></v-tabs-slider>
                        <v-tabs-item key="1" href="#tab-1" v-on:click="centerScrollOBs">Orionx</v-tabs-item>
                        <v-tabs-item key="2" href="#tab-2" v-on:click="centerScrollOBs">Binance</v-tabs-item>
                    </v-tabs-bar>
                    <v-tabs-items>
                        
                        <!-- orionx -->
                        <v-tabs-content key="1" id="tab-1">
                            <v-layout row wrap>
                                
                                <v-flex xs12 sm6 md3>
                                    <div class="order-book-title">
                                        <h3>CHA/CLP</h3>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <th>Quantity</th>
                                                    <th>Price (CLP)</th>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="order-book">
                                        <table>
                                            <tbody>
                                                <tr v-for="(ask, index) in orionxCHACLPAsks">
                                                    <td>{{ ask.amount }}</td>
                                                    <td class="red--text">{{ ask.limitPrice }}</td>
                                                </tr>
                                                <tr class="ob-diff deep-purple lighten-5"><td>Diff:</td><td> {{ orionxCHACLPDiff }} </td></tr>
                                                <tr v-for="(bid, index) in orionxCHACLPBids">
                                                    <td>{{ bid.amount }}</td>
                                                    <td class="green--text">{{ bid.limitPrice }}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </v-flex>
                                
                                <v-flex xs12 sm6 md3>
                                    <div class="order-book-title">
                                        <h3>BTC/CLP</h3>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <th>Quantity</th>
                                                    <th>Price (CLP)</th>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="order-book">
                                        <table>
                                            <tbody>
                                                <tr v-for="(ask, index) in orionxBTCCLPAsks">
                                                    <td>{{ ask.amount }}</td>
                                                    <td class="red--text">{{ ask.limitPrice }}</td>
                                                </tr>
                                                <tr class="ob-diff deep-purple lighten-5"><td>Diff:</td><td> {{ orionxBTCCLPDiff }} </td></tr>
                                                <tr v-for="(bid, index) in orionxBTCCLPBids">
                                                    <td>{{ bid.amount }}</td>
                                                    <td class="green--text">{{ bid.limitPrice }}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </v-flex>
                                
                                <v-flex xs12 sm6 md3>
                                    <div class="order-book-title">
                                        <h3>LTC/CLP</h3>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <th>Quantity</th>
                                                    <th>Price (CLP)</th>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="order-book">
                                        <table>
                                            <tbody>
                                                <tr v-for="(ask, index) in orionxLTCCLPAsks">
                                                    <td>{{ ask.amount }}</td>
                                                    <td class="red--text">{{ ask.limitPrice }}</td>
                                                </tr>
                                                <tr class="ob-diff deep-purple lighten-5"><td>Diff:</td><td> {{ orionxLTCCLPDiff }} </td></tr>
                                                <tr v-for="(bid, index) in orionxLTCCLPBids">
                                                    <td>{{ bid.amount }}</td>
                                                    <td class="green--text">{{ bid.limitPrice }}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </v-flex>
                                
                                <v-flex xs12 sm6 md3>
                                    <div class="order-book-title">
                                        <h3>ETH/CLP</h3>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <th>Quantity</th>
                                                    <th>Price (CLP)</th>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="order-book">
                                        <table>
                                            <tbody>
                                                <tr v-for="(ask, index) in orionxETHCLPAsks">
                                                    <td>{{ ask.amount }}</td>
                                                    <td class="red--text">{{ ask.limitPrice }}</td>
                                                </tr>
                                                <tr class="ob-diff deep-purple lighten-5"><td>Diff:</td><td> {{ orionxETHCLPDiff }} </td></tr>
                                                <tr v-for="(bid, index) in orionxETHCLPBids">
                                                    <td>{{ bid.amount }}</td>
                                                    <td class="green--text">{{ bid.limitPrice }}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </v-flex>
                                
                            </v-layout>
                        </v-tabs-content>
                        
                        <!-- binance -->
                        <v-tabs-content key="2" id="tab-2">
                            <v-layout row wrap>
                                
                                <v-flex xs12 sm6 md3>
                                    <div class="order-book-title">
                                        <h3>LTC/BTC</h3>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <th>Quantity</th>
                                                    <th>Price (BTC)</th>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="order-book">
                                        <table>
                                            <tbody>
                                                <tr v-for="(ask, index) in binanceLTCBTCAsks">
                                                    <td>{{ ask[1] }}</td>
                                                    <td class="red--text">{{ ask[0] }}</td>
                                                </tr>
                                                <tr class="ob-diff deep-purple lighten-5"><td>Diff:</td><td> {{ binanceLTCBTCDiff }} </td></tr>
                                                <tr v-for="(bid, index) in binanceLTCBTCBids">
                                                    <td>{{ bid[1] }}</td>
                                                    <td class="green--text">{{ bid[0] }}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </v-flex>
                                
                                <v-flex xs12 sm6 md3>
                                    <div class="order-book-title">
                                        <h3>ETH/BTC</h3>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <th>Quantity</th>
                                                    <th>Price (BTC)</th>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="order-book">
                                        <table>
                                            <tbody>
                                                <tr v-for="(ask, index) in binanceETHBTCAsks">
                                                    <td>{{ ask[1] }}</td>
                                                    <td class="red--text">{{ ask[0] }}</td>
                                                </tr>
                                                <tr class="ob-diff deep-purple lighten-5"><td>Diff:</td><td> {{ binanceETHBTCDiff }} </td></tr>
                                                <tr v-for="(bid, index) in binanceETHBTCBids">
                                                    <td>{{ bid[1] }}</td>
                                                    <td class="green--text">{{ bid[0] }}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </v-flex>
                                
                            </v-layout>
                        </v-tabs-content>
                        
                    </v-tabs-items>
                </v-tabs>
            </v-flex>
            
        </v-layout>
    </div>
</template>






<style lang="scss">
.order-book-title{
    max-width:280px;
    margin-top:10px;
}
.order-book-title h3{
    text-align:center;
}
.order-book-title table th {
    width:130px;
    text-align:right;
}
.order-book {
    height: calc(100vh - 285px);
    overflow-y:auto;
    max-width:280px;
}
.order-book table td {
    width:130px;
    font-weight:bold;
    text-align:right;
}
</style>






<script>
import axios from 'axios'

export default {
    name: 'app-cryptocurrencies',
    components: {
    },
    data () {
        return {
            binance:{
                ltcbtc:{
                    bids:[[0,0]],
                    asks:[[0,0]]
                },
                ethbtc:{
                    bids:[[0,0]],
                    asks:[[0,0]]
                }
            },
            
            orionx:{
                chaclp:{
                    bids:[{amount:0, limitPrice: 0}],
                    asks:[{amount:0, limitPrice: 0}]
                },
                btcclp:{
                    bids:[{amount:0, limitPrice: 0}],
                    asks:[{amount:0, limitPrice: 0}]
                },
                ltcclp:{
                    bids:[{amount:0, limitPrice: 0}],
                    asks:[{amount:0, limitPrice: 0}]
                },
                ethclp:{
                    bids:[{amount:0, limitPrice: 0}],
                    asks:[{amount:0, limitPrice: 0}]
                }
            }
        }
    },
    mounted:function(){
        this.getBinance()
        this.getOrionx()
    },
    methods: {
        getBinance: function () {
            axios({ 
                method: "GET", 
                url: "https://pinvue-pinguinosod.c9users.io:8081/"
            }).then(result => {
                this.binance = result.data
                this.centerScrollOBs()
            }, error => {
                console.error(error)
            })
        },
        getOrionx: function() {
            axios({
                method: "POST",
                url: "https://api.orionx.io/graphql",
                data: {
                    query: `
                            {
                              chaclp: marketOrderBook(marketCode: "CHACLP", limit: 100) {
                                bids: buy {
                                  amount
                                  limitPrice
                                  accumulated
                                  accumulatedPrice
                                }
                                asks: sell {
                                  amount
                                  limitPrice
                                  accumulated
                                  accumulatedPrice
                                }
                              },
                              btcclp: marketOrderBook(marketCode: "BTCCLP", limit: 100) {
                                bids: buy {
                                  amount
                                  limitPrice
                                  accumulated
                                  accumulatedPrice
                                }
                                asks: sell {
                                  amount
                                  limitPrice
                                  accumulated
                                  accumulatedPrice
                                }
                              },
                              ltcclp: marketOrderBook(marketCode: "LTCCLP", limit: 100) {
                                bids: buy {
                                  amount
                                  limitPrice
                                  accumulated
                                  accumulatedPrice
                                }
                                asks: sell {
                                  amount
                                  limitPrice
                                  accumulated
                                  accumulatedPrice
                                }
                              },
                              ethclp: marketOrderBook(marketCode: "ETHCLP", limit: 100) {
                                bids: buy {
                                  amount
                                  limitPrice
                                  accumulated
                                  accumulatedPrice
                                }
                                asks: sell {
                                  amount
                                  limitPrice
                                  accumulated
                                  accumulatedPrice
                                }
                              }
                            }
                            `
                }
            })
            .then(resultado => {
                this.orionx = addCommaToAmountsOrionx(resultado.data.data)
                
                this.centerScrollOBs()
            }, error => {
                console.error(error)
            })
        },
        centerScrollOBs: function() {
            var elOrderBooks = this.$el.querySelectorAll(".order-book")
            
            elOrderBooks.forEach( 
                function(orderBook, currentIndex, listObj) {
                    //orderBook.scrollTop = Math.floor(orderBook.scrollHeight/2)-200
                    var obDiff = orderBook.getElementsByClassName("ob-diff");
                    var topPos = obDiff[0].offsetTop;
                    orderBook.scrollTop = topPos-Math.floor(orderBook.offsetHeight/2);
                }
            )
        }
    },
    computed: {
        // BINANCE
        binanceLTCBTCAsks() {
            return this.binance.ltcbtc.asks.slice().reverse()
        },
        binanceLTCBTCBids() {
            return this.binance.ltcbtc.bids
        },
        binanceLTCBTCDiff() {
            return (this.binance.ltcbtc.asks[0][0] - this.binance.ltcbtc.bids[0][0]).toFixed(8);
        },
        
        binanceETHBTCAsks() {
            return this.binance.ethbtc.asks.slice().reverse()
        },
        binanceETHBTCBids() {
            return this.binance.ethbtc.bids
        },
        binanceETHBTCDiff() {
            return (this.binance.ethbtc.asks[0][0] - this.binance.ethbtc.bids[0][0]).toFixed(8);
        },
        
        // ORIONX
        orionxCHACLPAsks() {
            return this.orionx.chaclp.asks.slice().reverse()
        },
        orionxCHACLPBids() {
            return this.orionx.chaclp.bids
        },
        orionxCHACLPDiff() {
            return this.orionx.chaclp.asks[0].limitPrice - this.orionx.chaclp.bids[0].limitPrice;
        },
        
        
        orionxBTCCLPAsks() {
            return this.orionx.btcclp.asks.slice().reverse()
        },
        orionxBTCCLPBids() {
            return this.orionx.btcclp.bids
        },
        orionxBTCCLPDiff() {
            return this.orionx.btcclp.asks[0].limitPrice - this.orionx.btcclp.bids[0].limitPrice;
        },
        
        orionxLTCCLPAsks() {
            return this.orionx.ltcclp.asks.slice().reverse()
        },
        orionxLTCCLPBids() {
            return this.orionx.ltcclp.bids
        },
        orionxLTCCLPDiff() {
            return this.orionx.ltcclp.asks[0].limitPrice - this.orionx.ltcclp.bids[0].limitPrice;
        },
        
        orionxETHCLPAsks() {
            return this.orionx.ethclp.asks.slice().reverse()
        },
        orionxETHCLPBids() {
            return this.orionx.ethclp.bids
        },
        orionxETHCLPDiff() {
            return this.orionx.ethclp.asks[0].limitPrice - this.orionx.ethclp.bids[0].limitPrice;
        }
    },
    updated: function () {
        this.$nextTick(function () {
            // Code that will run only after the
            // entire view has been re-rendered
        })
    }
}

function addCommaToAmountsOrionx(orionxArr) {
    orionxArr.chaclp.asks.forEach(function(item, index) {
        let amount = ""+orionxArr.chaclp.asks[index].amount
        let integer = amount.substring(0,amount.length-8)
        let decimal = amount.substring(amount.length-8,amount.length)
        if (integer == "") integer = 0
        orionxArr.chaclp.asks[index].amount = integer+","+("00000000" + decimal).substr(-8,8)
    });
    orionxArr.chaclp.bids.forEach(function(item, index) {
        let amount = ""+orionxArr.chaclp.bids[index].amount
        let integer = amount.substring(0,amount.length-8)
        let decimal = amount.substring(amount.length-8,amount.length)
        if (integer == "") integer = 0
        orionxArr.chaclp.bids[index].amount = integer+","+("00000000" + decimal).substr(-8,8)
    });
    
    orionxArr.btcclp.asks.forEach(function(item, index) {
        let amount = ""+orionxArr.btcclp.asks[index].amount
        let integer = amount.substring(0,amount.length-8)
        let decimal = amount.substring(amount.length-8,amount.length)
        if (integer == "") integer = 0
        orionxArr.btcclp.asks[index].amount = integer+","+("00000000" + decimal).substr(-8,8)
    });
    orionxArr.btcclp.bids.forEach(function(item, index) {
        let amount = ""+orionxArr.btcclp.bids[index].amount
        let integer = amount.substring(0,amount.length-8)
        let decimal = amount.substring(amount.length-8,amount.length)
        if (integer == "") integer = 0
        orionxArr.btcclp.bids[index].amount = integer+","+("00000000" + decimal).substr(-8,8)
    });
    
    orionxArr.ltcclp.asks.forEach(function(item, index) {
        let amount = ""+orionxArr.ltcclp.asks[index].amount
        let integer = amount.substring(0,amount.length-8)
        let decimal = amount.substring(amount.length-8,amount.length)
        if (integer == "") integer = 0
        orionxArr.ltcclp.asks[index].amount = integer+","+("00000000" + decimal).substr(-8,8)
    });
    orionxArr.ltcclp.bids.forEach(function(item, index) {
        let amount = ""+orionxArr.ltcclp.bids[index].amount
        let integer = amount.substring(0,amount.length-8)
        let decimal = amount.substring(amount.length-8,amount.length)
        if (integer == "") integer = 0
        orionxArr.ltcclp.bids[index].amount = integer+","+("00000000" + decimal).substr(-8,8)
    });
    
    orionxArr.ethclp.asks.forEach(function(item, index) {
        let amount = ""+orionxArr.ethclp.asks[index].amount
        let integer = amount.substring(0,amount.length-8)
        let decimal = amount.substring(amount.length-8,amount.length)
        if (integer == "") integer = 0
        orionxArr.ethclp.asks[index].amount = integer+","+("00000000" + decimal).substr(-8,8)
    });
    orionxArr.ethclp.bids.forEach(function(item, index) {
        let amount = ""+orionxArr.ethclp.bids[index].amount
        let integer = amount.substring(0,amount.length-8)
        let decimal = amount.substring(amount.length-8,amount.length)
        if (integer == "") integer = 0
        orionxArr.ethclp.bids[index].amount = integer+","+("00000000" + decimal).substr(-8,8)
    });
    return orionxArr;
}
</script>
