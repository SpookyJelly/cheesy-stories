import React, { useState } from "react";
import { styled, themes, convert } from "@storybook/theming";
import { Button, Placeholder, IconButton } from "@storybook/components";
import { CheckIcon } from "@storybook/icons";
import { PureArgsTable } from "@storybook/blocks";
import {
  useAddonState,
  useChannel,
  addons,
  useParameter,
} from "@storybook/manager-api";
import { ADDON_ID, EVENTS, PARAM_KEY } from "../constants";

export const Label = styled.span({
  fontFamily: "Nunito Sans",
  fontSize: 16,
  fontWeight: 600,
});

export const PanelController = () => {
  const [width, setWidth] = useState(0);

  const handleInput = (event: any) => setWidth(event.target.value);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    addons.getChannel().emit(EVENTS.REQUEST, width);
  };

  return (
    <div style={{ padding: "16px" }}>
      <Label>Width:</Label>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          gap: "8px",
          marginTop: "6px",
        }}
      >
        <input
          type="number"
          onChange={handleInput}
          style={{
            width: "100%",
            outline: "none",
          }}
        />
        <Button type="submit">Confirm</Button>
      </form>
    </div>
  );
};
