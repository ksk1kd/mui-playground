import { Button, TextField } from '@mui/material'
import { useState } from 'react'

function App() {
  const [input, setInput] = useState('')

  return (
    <>
      <div className="container">
        <section>
          <h1>The sx prop</h1>
          <Button
            variant="contained"
            sx={{ p: 2, color: 'white', bgcolor: 'secondary.main' }}
          >
            Hello world
          </Button>
        </section>

        <section>
          <h1>Text Field</h1>
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            margin="normal"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setInput(event.target.value)
            }}
          />
          <p>{input}</p>
        </section>

        <section>
          <h1>Button</h1>
          <Button variant="contained">Hello world</Button>
        </section>
      </div>
    </>
  )
}

export default App
