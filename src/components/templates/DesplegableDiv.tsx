import React, {
  PropsWithChildren,
  RefObject,
  createRef,
  useLayoutEffect,
  useState,
} from "react";

interface DesplegableDivProps extends PropsWithChildren {
  controller: boolean;
  initialW: number;
  color: string;
}

export const DesplegableDiv = ({
  children,
  initialW,
  controller,
  color,
}: DesplegableDivProps) => {
  const cont: RefObject<HTMLDivElement> = createRef();
  const [mh, setMh] = useState<number>(0);
  useLayoutEffect(() => {
    console.log(cont);
    if (!controller) setMh(initialW);
    else if (cont.current && controller) {
      console.log(cont.current.offsetHeight);
      setMh(cont.current.scrollHeight);
    }
  }, [cont, controller, initialW]);
  return (
    <>
      <div ref={cont}>{children}</div>
      <style jsx>{`
        div {
          overflow: hidden;
          height: ${mh}px;
          transition: 0.5s;
          color: var(${color});
        }
      `}</style>
    </>
  );
};
