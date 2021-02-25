import React from "react";

export type RouterType = {
  routers: RouterItem[]
}

export interface RouterItem {
  path: string | string[]
  component: React.FC
}