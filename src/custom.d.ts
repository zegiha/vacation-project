// declare module "*.svg" {
//   const content: React.FunctionComponent<React.SVGAttributes>;
//   export default content;
// }
declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: REact.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
declare module "*.jpg";
declare module "*.png";
declare module "*.jpeg";
declare module "*.gif";