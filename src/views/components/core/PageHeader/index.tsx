import * as Styles from './style'

type Props = {
  title: string
  subtitle?: string
}

export default function PageHeader({ title, subtitle }: Props) {
  return (
    <Styles.Root>
      <Styles.Title variant="h5">{title}</Styles.Title>
      {subtitle ? <Styles.Subtitle variant="body2">{subtitle}</Styles.Subtitle> : null}
    </Styles.Root>
  )
}
