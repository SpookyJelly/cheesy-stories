import React, { useState } from "react";
import { styled } from "@storybook/theming";
import { Button } from "@storybook/components";
import { addons } from "@storybook/manager-api";
import { EVENTS } from "../constants";

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
