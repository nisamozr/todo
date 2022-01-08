import './style/App.css'
// import List from './components/list'
import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([])
  const [todoend, setTodoend] = useState([])
  const [todo, setTodo] = useState('')
  const add = () => {
    setTodos([...todos, { Title: todo, status: false, id: Date.now() }])
    console.log(todos)
  }
  const delet = (id) => {
    setTodos(todos.filter((item) => item.id !== id))
  }
  const deletend = (id) => {
    setTodoend(todoend.filter((item) => item.id !== id))
  }

  return (
    <div className="App">
      <div className="box">
        <div className="head">
          <h2>Todo</h2>
          <div className="feels">
            <input
              type="text"
              value={todo}
              onChange={(e) => {
                setTodo(e.target.value)
              }}
            />

            <div className="addButton">
              <i className="far fa-plus-square" onClick={add}></i>
            </div>
          </div>
        </div>
        <div className="todo">
          {todos.map((obj) => {
            return (
              // <List Title={obj.Title} key={obj.id} status={obj.status} setTodos={setTodos} />
              <div className="eachTodoList" key={obj.id}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    type="checkbox"
                    value={obj.status}
                    onChange={(e) => {
                      setTodos(
                        todos.filter((item) => {
                          if (item.id === obj.id) {
                            item.status = e.target.checked
                            setTodoend([...todoend, item])
                            console.log(todoend)
                          }

                          return item.id !== obj.id
                        }),
                      )
                    }}
                    className="check"
                    name=""
                    id=""
                  />
                  <p>{obj.Title}</p>
                </div>

                <i
                  className="fas fa-trash delet"
                  onClick={() => delet(obj.id)}
                ></i>
              </div>
            )
          })}
          <hr />

          {todoend.map((obj) => {
            return (
              <div className="eachTodoList" key={obj.id}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    type="checkbox"
                    value={obj.status}
                    checked={true}
                    onChange={(e) => {
                      setTodoend(
                        todoend.filter((item) => {
                          if (item.id === obj.id) {
                            setTodos([...todos, item])
                          }

                          return item.id !== obj.id
                        }),
                      )
                    }}
                    className="check"
                    name=""
                    id=""
                  />
                  <p className="todoComlited">
                    <del>{obj.Title}</del>
                  </p>
                </div>

                <i
                  className="fas fa-trash delet"
                  onClick={() => deletend(obj.id)}
                ></i>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
