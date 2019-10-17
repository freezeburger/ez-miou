import React, { CSSProperties } from "react";
import { action } from "@storybook/addon-actions";
import { default as Welcome } from "../app/components/me/me.component";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number, color, object } from "@storybook/addon-knobs";
import { withMarkdownNotes } from "@storybook/addon-notes";
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
        title={text("Title Room", "my room")}
        color={color("Border Color", "green")}
        action={action("handleClick")}
        user={object("User", {"counter": number("Counter", 5), "max": number("Max", 10)})}
      ></RoomCard>
    </Wrapper>
  ));
