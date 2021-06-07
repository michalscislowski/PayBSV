import React from 'react';
import MoneyButton from '@moneybutton/react-money-button'

export default function PayButton () {
  return (
    <MoneyButton
      to= "teslaholdsexactly0btc"
      amount= "0.0001"
      currency= "bsv"
    />
  )
}
