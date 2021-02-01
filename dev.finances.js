const Modal = {
    open() {
        document.querySelector('.modal-overlay').classList.add('active')
  
    },
    close() {
        document.querySelector('.modal-overlay').classList.remove('active')
    }
     }  
     
     
     const transactions = [{
         id: 1,
         description: 'Luz',
         amout: -50000,
         date: '23/01/2021'
     },
     {
         id: 2,
         description: 'Website',
         amout: 500000,
         date: '23/01/2021'
     },
     {
         id: 3,
         description: 'Internet',
         amout: -20000,
         date: '23/01/2021'
     },

     {
        id: 4,
        description: 'App',
        amout: 200000,
        date: '23/01/2021'

     }
    
    ]

     const Transaction = {
         // Somar as entradas
         incomes() {
             
         },
         // Somar as saidas
         expenses() {

         },
         // Entradas - Saidas
         total() {

         }
     }

     const DOM = {
         transactionsConteiner: document.querySelector('#data-table tbody'),

         addTransaction(transaction, index){
             const tr = document.createElement('tr')
             tr.innerHTML = DOM.innerHTMLTransaction(transaction)

             DOM.transactionsConteiner.appendChild(tr)


         },
         innerHTMLTransaction() {
             const CSSclass = transactions.amount > 0 ? "income" : "expense"

             const amount = Ultils.formatCurrency(transactions.amount)

            const html = `
            
            <td class="description">${transactions.description}</td>
            <td class="${CSSclass}">${transactions.amount}</td>
            <td class="date">${transactions.date}</td>
            <td><img src="./assets/minus.svg" alt="Remover Transações"></td>

        
        `

        return html
        }
     }

     const Ultils = {
         formatCurrency(value) {
             const signal = Number(value) < 0 ? "-" : ""

             value = String(value).replace(/\D/g, "")

             value = Number(value) / 100

             value = value.toLocaleString("pt-BR" {
                 style: "currency",
                 currency: "BRL"
             })

             return signal + value
             
         }
     }


     transaction.forEach(function(transaction) {

     })