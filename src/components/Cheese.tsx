import React from "react";
import { useState, useEffect } from "@storybook/preview-api";
import { Resizable } from "re-resizable";
import { HandleIcon } from "./HandleIcon";
import styled from "@emotion/styled";
import { useFloating } from "@floating-ui/react";
import { useAddonState, useChannel, addons } from "@storybook/manager-api";
import { EVENTS } from "../constants";

// import { styled as S } from "@storybook/theming";

// const Foos = S("div")`
//   color: red;
// `;

const BLOCK = "internal__preview";

const Wrapper = styled.div`
  border: solid 1px #e2e5ed;
  background: #ededed;
  min-height: 50px;
  & .-resizable {
    display: grid;
    background: white;
    max-width: 100%;
    min-width: fit-content;
    grid-template:
      "content handle" 1fr
      "warnings warnings" auto/auto 16px;
  }

  & .-handle-wrapper {
    box-shadow:
      -1px 0 #e3e5ed,
      1px 0 #e2e5ed;
    display: flex;
    align-items: center;
    background-color: white;

    &:active {
      background-color: #eaf6fc;
    }

    & .-handle {
      position: relative !important;
      width: 16px !important;
      height: 16px !important;
      right: 0px !important;
    }
  }
  & .internal__preview__content {
    padding: 8px;
  }
`;

export function Cheese({
  children,
  className = BLOCK,
  width = undefined,
  ...rest
}: Props) {
  return (
    <Wrapper className={className} {...rest}>
      <Resizable
        handleComponent={{
          right: <HandleIcon />,
        }}
        enable={{ right: true }}
        className={"-resizable"}
        handleWrapperClass={"-handle-wrapper"}
        handleClasses={{ right: "-handle" }}
        size={{
          width: width || "100%",
          height: "100%",
        }}
        onResizeStop={(e, direction, ref, d) => {
          const currentEl = ref.querySelector(`.${BLOCK}__content`);
          const clientWidth = currentEl.clientWidth;
          rest.setWidth(clientWidth + 16);
        }}
      >
        <div className={BLOCK + "__content"}>{children}</div>
      </Resizable>
    </Wrapper>
  );
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  width: number | undefined;
  setWidth: (width: number) => void;
}
