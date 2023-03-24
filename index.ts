import { DependencyList, useMemo } from 'react'

// hooks

export const useDependencyList = (factory: () => unknown, deps: DependencyList | undefined): void => {
  useMemo(factory, deps)
}
