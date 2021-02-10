import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import { Container } from './styles';
export default function Home() {
  const [moneyA, setMoneyA] = useState(0);
  const [oddA, setOddA] = useState(1);
  const [moneyB, setMoneyB] = useState(0);
  const [oddB, setOddB] = useState(1);
  const [amount, setAmount] = useState(0);
  const [winA, setWinA] = useState(0);
  const [winB, setWinB] = useState(0);

  useEffect(() => {
    const calculate = () => {
      const betAmount = moneyA + moneyB;
      setWinA(moneyA * oddA - betAmount);
      setWinB(moneyB * oddB - betAmount);
      if (oddA === 0 || moneyA === 0) {
        setWinA(0);
      }
      if (oddB === 0 || moneyB === 0) {
        setWinB(0);
      }
      setAmount(betAmount);
    };
    calculate();
  }, [moneyA, oddA, moneyB, oddB]);

  return (
    <Container className="container-fluid h-100">
      <Head>
        <title>Calculadora do SOGRINHA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2 className="text-center py-2">Calculadora do SOGRINHA</h2>
      <div className="row col-md-12 ">
        <form className="col-3 mx-auto align-itens-center">
          <div className="form-group">
            <label htmlFor="situationAMoney">Valor da situação A</label>
            <input
              type="number"
              className="form-control"
              id="situationAMoney"
              name="situationAMoney"
              value={moneyA}
              min={0}
              step={0.01}
              onChange={event => setMoneyA(Number(event.target.value))}
            />
          </div>
          <div className="form-group">
            <label htmlFor="situationAOdd">ODD da situação A</label>
            <input
              type="number"
              className="form-control"
              id="situationAOdd"
              name="situationAOdd"
              value={oddA}
              min={1}
              step={0.01}
              onChange={event => setOddA(Number(event.target.value))}
            />
          </div>
          <hr />
          <div className="form-group">
            <label htmlFor="situationBMoney">Valor da situação B</label>
            <input
              type="number"
              id="situationBMoney"
              name="situationBMoney"
              className="form-control"
              value={moneyB}
              min={0}
              step={0.01}
              onChange={event => setMoneyB(Number(event.target.value))}
            />
          </div>
          <div className="form-group">
            <label htmlFor="situationBOdd">ODD da situação B</label>
            <input
              type="number"
              className="form-control"
              id="situationBOdd"
              name="situationBOdd"
              value={oddB}
              min={1}
              step={0.01}
              onChange={event => setOddB(Number(event.target.value))}
            />
          </div>
        </form>
        <div className="col-4 my-auto mx-auto">
          {winA === 0 ? (
            <></>
          ) : winA < 0 ? (
            <>
              <p style={{ color: '#f00', fontSize: 12 }}>
                {'Na situação A, você perderá: R$' + moneyA.toFixed(2)}
              </p>
            </>
          ) : (
            <>
              <p style={{ color: '#111', fontSize: 12 }}>
                {'Se a situação A acontecer terá de lucro: + R$' +
                  winA.toFixed(2)}
              </p>
            </>
          )}

          {winB === 0 ? (
            <></>
          ) : winB < 0 ? (
            <>
              <p style={{ color: '#f00', fontSize: 12 }}>
                {'Na situação B, você perderá: R$' + moneyB.toFixed(2)}
              </p>
            </>
          ) : (
            <>
              <p
                style={{ color: '#111', fontSize: 12 }}
                className="text-center"
              >
                {'Se a situação B acontecer terá de lucro: + R$' +
                  winB.toFixed(2)}
              </p>
            </>
          )}
        </div>
      </div>
      <br />
      <footer className="text-center">
        Desenvolvido por{' '}
        <a
          href="https://www.linkedin.com/in/elton-marques-1baa369b"
          target="blank"
        >
          Elton Marques dos Santos
        </a>
      </footer>
    </Container>
  );
}
