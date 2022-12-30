# Toggle

### round
<DemoContainer>
  <y-toggle label-on="ON" label-off="OFF" shape="round"></y-toggle>
</DemoContainer>

### square
<DemoContainer>
  <y-toggle label-on="ON" label-off="OFF" shape="s"></y-toggle>
</DemoContainer>

### Faded
<DemoContainer>
  <y-toggle-faded label-on="ON" label-off="OFF" shape="s"></y-toggle-faded>
</DemoContainer>

### Toggle Select
<DemoContainer>
  <y-toggle-select label-on="ON" label-off="OFF" shape="s"></y-toggle-select>
</DemoContainer>

### Toggle section
<DemoContainer>
  <y-toggle-section name="section1">
  <template v-slot:on>
    <span class="y-icon icon icon-like solid is-success"/>
  </template>
  <template v-slot:off>
    <span class="y-icon icon icon-like is-danger"/>
  </template>
  </y-toggle-section>
</DemoContainer>


### Toggle section
<DemoContainer>
  <y-toggle-section name="section2">
  <template v-slot:on>
    <YTag label="info" icon="y-icon icon icon-file-download" type="is-info-solid"/>
  </template>
  <template v-slot:off>
    <YTag label="info" icon="y-icon icon icon-file-download" type="is-info"/>
  </template>
  </y-toggle-section>
</DemoContainer>
