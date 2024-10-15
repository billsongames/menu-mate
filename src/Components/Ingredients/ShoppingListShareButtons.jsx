import React from "react";
import { InlineReactionButtons } from 'sharethis-reactjs';
import { InlineShareButtons } from 'sharethis-reactjs';
import { StickyShareButtons } from 'sharethis-reactjs';
import { InlineFollowButtons } from 'sharethis-reactjs';

const ShoppingListShareButtons = () => {
  return (
    <div>
      <InlineShareButtons
        config={{
          alignment: "left",
          enabled: true,
          networks: [
            "whatsapp"
          ],
          size: 40,
          radius: 4,

          description: "tester"
        }}
      />
    </div>
  )
}

export default ShoppingListShareButtons