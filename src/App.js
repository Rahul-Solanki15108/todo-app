import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { Container } from '@mui/system';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import ManageTodo from './components/ManageTodo';

function App() {

  return (
    
    <div className="App">
      <BrowserRouter>
        <Link to="/create-todo" style={{ marginTop: 10,textDecoration:'none'}}>
          <Button variant="contained" style={{ marginTop: 10,textDecoration:'none'}}>Add New Task</Button>
        </Link>
        <Container>
          <Box
            sx={{
              m: 3,
            }}
          >
            <Routes>
              <Route path="/" element={<TodoList />} />
              <Route exact path="/create-todo" element={<AddTodo />} />
              <Route exact path="/edit-todo/:todoId" element={<ManageTodo />} />
            </Routes>
          </Box>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
