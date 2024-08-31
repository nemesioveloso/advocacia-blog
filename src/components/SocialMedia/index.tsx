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
        onClick={() =>
          openInNewTab('https://www.instagram.com/advrafaelfonseca')
        }
        color="error"
        aria-label="Instagram"
        size="large"
      >
        <InstagramIcon />
      </IconButton>
      <IconButton
        onClick={() => openInNewTab('https://wa.me/86999546225')}
        color="success"
        aria-label="WhatsApp"
        size="large"
      >
        <WhatsAppIcon />
      </IconButton>
      <IconButton
        onClick={() =>
          openInNewTab(
            'https://www.facebook.com/share/azdNfkoSEhRT2n4P/?mibextid=qi2Omg',
          )
        }
        color="primary"
        aria-label="Facebook"
        size="large"
      >
        <FacebookIcon />
      </IconButton>
    </Box>
  )
}
