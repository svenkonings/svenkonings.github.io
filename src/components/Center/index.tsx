import type { ReactNode } from "react"

type Center = {
    children: ReactNode
}

export default function Center({
    children = undefined
}: Center) {
  return (
    <div className="text--center">
        {children}
    </div>
  );
}
