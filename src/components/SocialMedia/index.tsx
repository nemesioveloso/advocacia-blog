import { Box, IconButton } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import FacebookIcon from '@mui/icons-material/Facebook'

export const SocialMedia = () => {
  const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }
  return (
    <Box>
      <IconButton
        onClick={() => openInNewTab('https://www.instagram.com')}
        color="error"
        aria-label="Instagram"
        size="large"
      >
        <InstagramIcon />
      </IconButton>
      <IconButton
        onClick={() => openInNewTab('https://wa.me/99999999999')}
        color="success"
        aria-label="WhatsApp"
        size="large"
      >
        <WhatsAppIcon />
      </IconButton>
      <IconButton
        onClick={() => openInNewTab('https://www.facebook.com')}
        color="primary"
        aria-label="Facebook"
        size="large"
      >
        <FacebookIcon />
      </IconButton>
    </Box>
  )
}
