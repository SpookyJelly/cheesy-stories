import React, { useState } from "react";
import { AddonPanel } from "@storybook/components";
import { PanelController } from "./components/PanelController";

interface PanelProps {
  active: boolean;
}

export const Panel: React.FC<PanelProps> = (props) => {
  return (
    <AddonPanel {...props}>
      <PanelController />
    </AddonPanel>
  );
};
