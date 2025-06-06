import React, { CSSProperties } from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, number, color, object } from "@storybook/addon-knobs";
import RoomCard from "../app/components/room-card/roomcard.component";

/* Component wrapper */
const styles: CSSProperties = {
  textAlign: "center"
};
const Wrapper = ({ children }: any) => <div style={styles}>{children}</div>;

/* Storie Title */
storiesOf("Room Card", module)
  .addDecorator(withKnobs)
  /* Sub Title */
  .add("Try The Knobs", () => (
    <Wrapper>
      <RoomCard 
        title={text("Title Room (title)", "my room")}
        color={color("Border Color (color)", "green")}
        action={action("handleClick")}
        user={object("User (user)", {"counter":  5, "max": 10})}
      ></RoomCard>
    </Wrapper>
  ));
