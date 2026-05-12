import { ComponentsOverrides, ComponentsProps, ComponentsVariants } from '@mui/material'

export type MuiComponentType<
  Component extends keyof ComponentsProps & keyof ComponentsOverrides & keyof ComponentsVariants,
> = {
  defaultProps?: ComponentsProps[Component]
  styleOverrides?: ComponentsOverrides[Component]
  variants?: ComponentsVariants[Component]
}
