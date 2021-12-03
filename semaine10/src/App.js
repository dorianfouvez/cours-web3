import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes, Route, Link, Outlet,
  useParams, useNavigate, useMatch
} from "react-router-dom"
import 'antd/dist/antd.css'
import { Input, Tooltip, Button, Form } from 'antd';
import { InfoCircleOutlined, UserOutlined, PlusOutlined, QuestionOutlined } from '@ant-design/icons';

const Menu = () => {
  const padding = {
    paddingRight: 5
  }
  return (
    <div>
      <Link style={padding} to="/">anecdotes</Link>
      <Link style={padding} to="/create">create new</Link>
      <Link style={padding} to="/about">about</Link>
    </div>
  )
}

const AnecdoteList = ({ anecdotes, notification }) => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <span>{notification}</span>
      <ul>
        {anecdotes.map(anecdote => <Link to={`/anecdotes/${anecdote.id}`} key={anecdote.id}><li>{anecdote.content}</li></Link>)}
      </ul>
    </div>
  )
}

const Anecdote = ({ anecdote }) => { 
  return (
    <div>
      <h2>Anecdotes</h2>
      <h4 key={anecdote.id} >{anecdote.content}</h4>
      <p>has {anecdote.votes} votes</p>
      <p>for more info see <a href={anecdote.info} >{anecdote.info}</a></p>
    </div>
  )
}

const About = () => {
  return (
    <div>
      <h2>About anecdote app</h2>
      <p>According to Wikipedia:</p>

      <em>An anecdote is a brief, revealing account of an individual person or an incident.
        Occasionally humorous, anecdotes differ from jokes because their primary purpose is not simply to provoke laughter but to reveal a truth more general than the brief tale itself,
        such as to characterize a person by delineating a specific quirk or trait, to communicate an abstract idea about a person, place, or thing through the concrete details of a short narrative.
        An anecdote is "a story with a point."</em>

      <p>Software engineering is full of excellent anecdotes, at this app you can find the best and add more.</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      Anecdote app for <a href='https://courses.helsinki.fi/fi/tkt21009'>Full Stack -websovelluskehitys</a>.

      See <a href='https://github.com/fullstack-hy/routed-anecdotes/blob/master/src/App.js'>https://github.com/fullstack-hy2019/routed-anecdotes/blob/master/src/App.js</a> for the source code.
    </div>
  )
}

const CreateNew = (props) => {
  const handleFinish = (values) => {
    props.addNew({
      ...values,
      votes: 0
    })
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <Form
        name="basic"
        labelCol={{ span: 7 }}
        wrapperCol={{ span: 10 }}
        initialValues={{ remember: true }}
        onFinish={handleFinish}
        
        autoComplete="on"
      >
        <div>
          <Form.Item
            label="Content"
            name="content"
            rules={[{ required: true, message: 'Please input a content!' }]}
          >
            <Input name='content' placeholder="Content"/>
          </Form.Item>
        </div>
        <div>
          <Form.Item
            label="Author"
            name="author"
            rules={[{ required: true, message: 'Please input the author!' }]}
          >
            <Input name='author' placeholder="Author"
              prefix={<UserOutlined className="site-form-item-icon" />}
              suffix={<Tooltip title="The name of the author"><InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} /></Tooltip>} />
          </Form.Item>
        </div>
        <div>
          <Form.Item
            label="Url for more info"
            name="info"
            rules={[{ required: true, message: 'Please input the author!' }]}
          >
            <Input name='info' placeholder="info"
              prefix={<QuestionOutlined className="site-form-item-icon" />}
              suffix={<Tooltip title="The url to find more info"><InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} /></Tooltip>} />
          </Form.Item>
        </div>
        <Button type="primary" htmlType="submit" shape="round" icon={<PlusOutlined />}>Create</Button>
      </Form>
    </div>
  )

}

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: '1'
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: '2'
    }
  ])

  const [notification, setNotification] = useState('')
  const navigate = useNavigate()

  const addNew = (anecdote) => {
    anecdote.id = (Math.random() * 10000).toFixed(0)
    setAnecdotes(anecdotes.concat(anecdote))
    //Redirect
    navigate('/')
    //setTimeout
    setNotification("You created the anecdote named "+anecdote.content)
    setTimeout(() => {setNotification('')}, 10000)
  }

  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  }

  const match = useMatch('/anecdotes/:id')
  const anecdote = match ? anecdotes.find(anecdote => anecdote.id === match.params.id) : null

  return (
    <div>
      <h1>Software anecdotes</h1>
      <Menu />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<CreateNew addNew={addNew} />} />
        <Route path="/anecdotes/:id" element={<Anecdote anecdote={anecdote} />} />
        <Route path="/" element={<AnecdoteList anecdotes={anecdotes} notification={notification} />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;