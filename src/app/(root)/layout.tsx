import { ChildProps } from "../../../types";

function Layout({ children }: ChildProps) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}

export default Layout;
