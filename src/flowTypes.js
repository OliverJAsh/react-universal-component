// @flow
import React from 'react'

// config object transformed from import() (babel-plugin-universal-import)
export type StrFun = string | ((props?: Object) => string)
export type Config = {
  chunkName: StrFun,
  path: StrFun,
  resolve: StrFun,
  load: Load,
  id: string,
  file: string
}

export type Load = (
  Object,
  AsyncFuncTools
) => Promise<[ImportModule]> | Promise<ImportModule>

// function that returns config (babel-plugin-universal-import)
// $FlowIssue
export type ConfigFunc = (props: Object) => Config

// promise containing component or function returning it
export type AsyncComponent<Props> =
  | ((props: Object, AsyncFuncTools) => Promise<Component<Props>>)
  | Promise<Component<Props>>

// OPTIONS FOR BOTH RUM + RUC

export type ModuleOptions = {
  resolve?: StrFun, // only optional when async-only
  chunkName?: string,
  path?: StrFun,
  key?: Key,
  timeout?: number,
  onError?: OnError,
  onLoad?: OnLoad,
  alwaysUpdate?: boolean,
  isDynamic: boolean,
  modCache: Object,
  promCache: Object,
  id?: string
}

export type ComponentOptions = {
  loading?: LoadingCompponent,
  error?: ErrorComponent,
  minDelay?: number,
  testBabelPlugin?: boolean,

  // options for requireAsyncModule:
  resolve?: StrFun,
  path?: StrFun,
  chunkName?: string,
  timeout?: number,
  key?: Key,
  onLoad?: OnLoad,
  onError?: OnError,
  alwaysUpdate?: boolean,
  id?: string
}

// RUM

export type AsyncFuncTools = { resolve: ResolveImport, reject: RejectImport }
export type ResolveImport = (module: ?any) => void
export type RejectImport = (error: Object) => void
export type Id = string
export type Key = string | null | ((module: ?(Object | Function)) => any)
export type OnLoad = (module: ?(Object | Function)) => void
export type OnError = (error: Object) => void

export type RequireAsync = (props: Object) => Promise<?any>
export type RequireSync = (props: Object) => ?any
export type AddModule = (props: Object) => void
export type Mod = Object | Function
export type Tools = {
  requireAsync: RequireAsync,
  requireSync: RequireSync,
  addModule: AddModule,
  shouldUpdate: () => boolean
}

export type Ids = Array<string>

// RUC

export type Props = {
  error?: ?any,
  isLoading?: ?boolean
}

export type GenericComponent<Props> =
  | Class<React.Component<{}, Props, mixed>>
  | React$Element<any>

export type Component<Props> = GenericComponent<Props>
export type LoadingCompponent = GenericComponent<{}>
export type ErrorComponent = GenericComponent<{}>

// babel-plugin-universal-import
export type ImportModule =
  | {
      default?: Object | Function
    }
  | Object
  | Function
  | ImportError

export type ImportError = {
  message: string
}
