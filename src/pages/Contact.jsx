import '../styles/Contact.css'
import Header from '../components/Header'
import Box from '@mui/material/Box'
import { useThemeContext } from '../components/ThemeContext'

function Contact(){
  const { mode } = useThemeContext()
  return (
    <Box sx={{ bgcolor: 'background.default', color: 'text.primary' }}>
      <Header/>
    </Box>
  )
}

export default Contact