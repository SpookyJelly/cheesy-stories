/**
 * A decorator is a way to wrap a story in extra “rendering” functionality. Many addons define decorators
 * in order to augment stories:
 * - with extra rendering
 * - gather details about how a story is rendered
 *
 * When writing stories, decorators are typically used to wrap stories with extra markup or context mocking.
 *
 * https://storybook.js.org/docs/react/writing-stories/decorators
 */
import React from "react";

import { EVENTS } from "./constants";
import type { Preview } from "@storybook/react/*";
import { useChannel, useState, addons } from "@storybook/preview-api";
import { Cheese } from "./components/Cheese";

/**
 * Note: if you want to use JSX in this file, rename it to `preview.tsx`
 * and update the entry prop in tsup.config.ts to use "src/preview.tsx",
 */

const preview: Preview = {
  decorators: [
    (Story, { parameters, ...rest }) => {
      const [width, setWidth] = useState<number | undefined>(undefined);
      useChannel({
        [EVENTS.REQUEST]: (pre) => {
          if (Number(pre)) {
            setWidth(Number(pre));
          }
        },
      });
      return (
        <Cheese width={width} setWidth={setWidth}>
          <Story />
        </Cheese>
      );
    },
  ],
  parameters: {},
};

export default preview;
