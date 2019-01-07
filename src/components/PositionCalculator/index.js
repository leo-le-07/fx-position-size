// @flow

import React from 'react';
import Input from 'common/Input';
import { calculateUsdPerPip } from './utils.js';

type State = {
  accountSize: number,
  riskMoney: number,
  stopLossPips: number,
  pair: string,
  riskRatio: ?number,
  lots: ?number,
};

class PositionCalculator extends React.Component<{}, State> {
  state = {
    accountSize: 800,
    riskMoney: 20,
    stopLossPips: 10,
    pair: 'EURUSD',
    riskRatio: null,
    lots: null,
  }

  calculate = async () => {
    const { pair, riskMoney, stopLossPips, accountSize } = this.state;
    const usdPerPip = await calculateUsdPerPip(pair.toUpperCase());
    if (!usdPerPip) return this.setState({ lots: null, riskRatio:  null })
    const lotsResult = (riskMoney / (usdPerPip * stopLossPips));
    this.setState({
      lots: lotsResult,
      riskRatio: (riskMoney / accountSize) * 100
    })
  }

  handleOnChangeFor = (propertyName: string) => (event: SyntheticInputEvent<HTMLInputElement>) => {
    const value = event.target.value;
    this.setState({
      [propertyName]: value
    });
  };

  render() {
    const { accountSize, riskMoney, stopLossPips, pair, riskRatio, lots } = this.state;

    return (
      <div className="card">
        <div className="card-header">
          Position Size Calculator
        </div>
        <div className="card-body row">
          <div className="col-md-6">
            <h5 className="card-title">Inputs</h5>
            <div className="form-group row">
              <label htmlFor="account-size" className="col-md-4">Account Size (USD)</label>
              <div className="col-md-8">
                <Input
                  type="number"
                  id="account-size"
                  value={accountSize}
                  onChange={this.handleOnChangeFor('accountSize')}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="risk-money" className="col-md-4">Risk Money (USD)</label>
              <div className="col-md-8">
                <Input
                  type="number"
                  id="risk-money"
                  value={riskMoney}
                  onChange={this.handleOnChangeFor('riskMoney')}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="stop-loss-pips" className="col-md-4">Stop-Loss (pips)</label>
              <div className="col-md-8">
                <Input
                  type="number"
                  id="stop-loss-pips"
                  value={stopLossPips}
                  onChange={this.handleOnChangeFor('stopLossPips')}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="current-pair" className="col-md-4">Current Pair</label>
              <div className="col-md-8">
                <Input
                  type="text"
                  id="current-pair"
                  value={pair}
                  onChange={this.handleOnChangeFor('pair')}
                />
              </div>
            </div>
            <button className="btn btn-primary" onClick={this.calculate}>Calculate</button>
          </div>
          <div className="col-md-6">
            <h5 className="card-title">Result</h5>
            <div className="row">
              <label className="col-md-4">Risk Ratio, %</label>
              <div className="col-md-4">{riskRatio || 'N/A'} %</div>
            </div>
            <div className="row">
              <label className="col-md-4">Lots</label>
              <div className="col-md-4">{(lots && lots.toFixed(3)) || 'N/A'}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PositionCalculator;

