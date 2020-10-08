export interface NavOptions {
  title: string;
  routerLink: string[];
  icon: string;
  roles?: Array<string>;
  children?: NavOptions[];
  isCollapsed: boolean;
}
