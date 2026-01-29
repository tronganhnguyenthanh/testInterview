import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";
const nextConfig: NextConfig = {
  /* config options here */
  experimental:{
   optimizePackageImports: ['lodash', 'date-fns'],
  },
};

export default withFlowbiteReact(nextConfig);