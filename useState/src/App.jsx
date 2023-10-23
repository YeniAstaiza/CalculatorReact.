import { useState } from 'react'
import Button from './components/Button'



const App = () => {
  const [result, setResult] = useState(0)
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)

  const sumaAdd = () => {
    const add = parseInt(num1) + parseInt(num2)
    setResult(add)
}

const restaAdd = () => {
  const add = parseInt(num1) - parseInt(num2)
  setResult(add)
}

const multiplicacionAdd = () => {
  const add = parseInt(num1) * parseInt(num2)
  setResult(add)
}

const divisionAdd = () => {
  const add = parseInt(num1) / parseInt(num2)
  setResult(add)
}

const porcentajeApp = () => {
  const add = parseInt(num1) * parseFloat(num2 / 100)
  setResult(add)
}

const borrarAdd = () =>{}

const borrarTodo = () =>{}

const agregarNumero = () =>{}

const totalAdd = () =>{}

const decimal = () => {}

  console.log(num1,num2)

  const calculator = [
    {
      label:'CE',
      handleClick: borrarTodo
    },
    {
      label:'%',
      handleClick: porcentajeApp
    },
    {
      label:'🗑️',
      handleClick: borrarAdd
    },
    {
      label:'+',
      handleClick: sumaAdd
    },
   
    {
      label:'1',
      handleClick: () => agregarNumero (1)
    },
    {
      label:'2',
      handleClick:  () =>  agregarNumero (2)
    },
    {
      label:'3',
      handleClick:  () =>  agregarNumero (3)
    },
    {
      label:'-',
      handleClick: restaAdd
    },
    {
      label:'4',
      handleClick:  () => agregarNumero (4)
    },
    {
      label:'5',
      handleClick:  () => agregarNumero (5)
    },
    {
      label:'6',
      handleClick:  () =>  agregarNumero (6)
    },
    {
      label:'*',
      handleClick: multiplicacionAdd
    },
    {
      label:'7',
      handleClick:  () => agregarNumero (7)
    },
    {
      label:'8',
      handleClick:  () => agregarNumero (8)
    },
    {
      label:'9',
      handleClick:  () => agregarNumero (9)
    },
    {
      label:'/',
      handleClick: divisionAdd
    },
    {
      label:',',
      handleClick:  () => decimal (',')
    },
    {
      label:'0',
      handleClick:  () => agregarNumero (0)
    },
    {
      label:'=',
      handleClick: totalAdd
    },
  ]

  const listButtons = calculator.map((sign) =>
  <Button key={sign.label.toString()}
      handleClick={sign.handleClick}> {sign.label}
  </Button>
  );

  return (

      <div className="container mx-auto px-20">
        <div class="box-content h-85  p-4 border-4">
          <h1 className='border border-grqay-800 bg-gray-400 rounded-md px-8 py-4 text-gray-80 hover:bg-purple-500' >Resultado = {result} </h1>
          <input 
            type="number" 
            onChange={(e) => setNum1(e.target.value)}
            />
          <input 
            type="number" 
            onChange={(e) => setNum2(e.target.value)}
            />
          <div className=" grid grid-cols-4 gap-1">
            {listButtons}
          </div>
        </div>
      </div>
    
  )
}


/*function App() {
  const [count, setCount] = useState(0)
  const handleApp =() =>{
    setCount(count +1)
  }

  const restApp =() =>{
    setCount(count -1)
  }

 
  return (
    <div>
      <h1 className='text-8x1'>{count}</h1>
      <button className='border border-grqay-700 bg-gary-400 rounded-md px-4 py-2 text-gray-80' 
        onClick={ ()=> handleApp()}>
        +
      </button>
      <button className='border border-grqay-700 bg-gary-400 rounded-md px-4 py-2 text-gray-80' 
        onClick={ ()=> restApp()}>
        -
      </button>
      
    </div>
  )
}*/

export default App
