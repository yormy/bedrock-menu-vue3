# Primary Button

The default button to press

<DemoContainer>
  <div class="">
      <y-message type="info" :closable="false">Non Closable</y-message>
      <y-message type="success">Hello this is <strong>bolded</strong></y-message>
      <y-message type="warning">Hello this is <strong>bolded</strong></y-message>
      <y-message type="danger">Hello this is <strong>bolded</strong></y-message>
  </div>
</DemoContainer>

# Disappears
<DemoContainer>
  <div class="">
      <y-message-block label="Primary" type="info" :life="2000" :sticky="false">Disappears after 2 seconds</y-message-block>
  </div>
</DemoContainer>

# Inline
<DemoContainer>
  <div class="">
      <y-message-inline type="info">Non Closable</y-message-inline>
      <y-message-inline type="success">Hello this is <strong>bolded</strong></y-message-inline>
      <y-message-inline type="warning">Hello this is <strong>bolded</strong></y-message-inline>
      <y-message-inline type="danger">Hello this is <strong>bolded</strong></y-message-inline>
  </div>
</DemoContainer>
