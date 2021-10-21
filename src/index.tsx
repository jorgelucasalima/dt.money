import React from 'react';
import ReactDOM from 'react-dom';
import {createServer, Model} from 'miragejs'
import { App } from './App';


createServer({

  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'dev',
          type: 'deposit',
          category: 'Dev',
          amount: 723,
          createdAt: new Date('2021-09-09 09:00:00')
        },
        {
          id: 2,
          title: 'dev2',
          type: 'withdraw',
          category: 'Dev2',
          amount: 500,
          createdAt: new Date('2021-02-01 09:00:00')
        }
      ]
    })
  },



  routes() {
    this.namespace = 'api';
    
    this.get('/transactions', () => {
      return this.schema.all('transaction')
    } )

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transactions', data)
    })


  }
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

