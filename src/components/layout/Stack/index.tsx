import { ReactNode, FC, JSX } from "react";
import {
  gapMap,
  Gap,
  flexDirectionMap,
  alignItemsMap,
  AlignItems,
} from "@/utils";
import clsx from "clsx";

type StackProps = {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
  gap?: Gap;
  reverse?: boolean;
  align?: AlignItems;
};

/**
 * Stackコンポーネント
 * 要素を縦並びに整列するレイアウトコンポーネントです。
 *
 * @param gap - 子要素同士の間隔。
 * @param reverse - 並び順を逆にする。真偽値
 * @param align - 子要素の整列方法
 * @returns
 */
const Stack: FC<StackProps> = ({
  gap,
  children,
  as: Component = "div",
  reverse = false,
  align,
}) => {
  return (
    <Component
      className={clsx(
        "flex",
        gap !== undefined && gapMap[gap],
        flexDirectionMap[reverse ? "colReverse" : "col"],
        align !== undefined && alignItemsMap[align],
        "items-center"
      )}
    >
      {children}
    </Component>
  );
};

export default Stack;
