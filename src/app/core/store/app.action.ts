export class ThemeState {
  constructor(public theme: string) {} // construct theme string
  static readonly type = '[App] Theme State'; // initiate type for the state see app.state.ts
}
  