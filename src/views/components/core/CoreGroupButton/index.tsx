import { Button, Stack } from '@mui/material'

type Props = {
  content: string[]
  contentValue: (string | number)[]
  value: string | number
  onChange: (value: string | number) => void
}

export default function CoreGroupButton({ content, contentValue, value, onChange }: Props) {
  return (
    <Stack direction="row" spacing={1}>
      {content.map((txt, idx) => (
        <Button
          key={txt}
          variant={value === contentValue[idx] ? 'contained' : 'outlined'}
          size="small"
          onClick={() => onChange(contentValue[idx])}
        >
          {txt}
        </Button>
      ))}
    </Stack>
  )
}
