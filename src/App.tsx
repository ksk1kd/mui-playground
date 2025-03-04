import {
  Button,
  type ButtonProps,
  GlobalStyles,
  TextField,
  styled,
} from '@mui/material'
import { useState } from 'react'

const CustomButton = styled(Button)<ButtonProps>(({ theme }) => ({
  width: 300,
  backgroundColor: theme.palette.warning.main,
}))

function App() {
  const [input, setInput] = useState('')

  return (
    <>
      <GlobalStyles
        styles={(theme) => ({
          h2: { color: theme.palette.primary.main },
        })}
      />

      <div className="container">
        <section>
          <h1>Global Style</h1>
          <h2>Heading 2</h2>
        </section>

        <section>
          <h1>The styled() utility</h1>
          <CustomButton variant="contained">Hello world</CustomButton>
        </section>

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
