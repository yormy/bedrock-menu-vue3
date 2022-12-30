<script setup>
import {YButtonRow, YButtonPrimary} from 'bedrock-menu-vue3'
</script>

# Normal form button row

<DemoContainer>
<div>
  <y-button-row>
    <y-button-primary label="Primary"/>
    <y-button-secondary label="Primary"/>
    <y-button-link label="Primary"/>
  </y-button-row>
</div>
</DemoContainer>

### With alternative button
<DemoContainer>
<div>
  <y-button-row>
  <template v-slot:main>
      <y-button-primary label="Primary"/>
      <y-button-secondary label="Primary"/>
  </template>
  <template v-slot:alternative>
      <y-button-link label="Primary"/>
  </template>
  </y-button-row>
</div>
</DemoContainer>


# Steps or Wizard form button row

<DemoContainer>
<div>
  <y-button-row-steps>
    <y-button-primary label="Next"/>
    <y-button-link label="previous"/>
  </y-button-row-steps>
</div>
</DemoContainer>

### With alternative button
<DemoContainer>
<div>
  <y-button-row-steps>
  <template v-slot:main>
      <y-button-primary label="Primary"/>
      <y-button-secondary label="Primary"/>
  </template>

  <template v-slot:alternative>
      <y-button-link label="Primary"/>
  </template>
  </y-button-row-steps>
</div>
</DemoContainer>

# Modals button row

<DemoContainer>
<div>
  <y-button-row-modal>
    <y-button-primary label="Save"/>
    <y-button-link label="cancel"/>
  </y-button-row-modal>
</div>
</DemoContainer>

### With alternative button
<DemoContainer>
<div>
  <y-button-row-modal>
  <template v-slot:main>
      <y-button-primary label="Primary"/>
      <y-button-secondary label="Primary"/>
  </template>

  <template v-slot:alternative>
      <y-button-link label="Primary"/>
  </template>
  </y-button-row-modal>
</div>
</DemoContainer>

# Multi Column button row

<DemoContainer>
<div>
  <y-button-row-multi-column>
    <y-button-primary label="Primary"/>
    <y-button-secondary label="Primary"/>
    <y-button-link label="Primary"/>
  </y-button-row-multi-column>
</div>
</DemoContainer>


### With alternative button

<DemoContainer>
<div>
  <y-button-row-multi-column>
  <template v-slot:main>
      <y-button-primary label="Primary"/>
      <y-button-secondary label="Primary"/>
  </template>
  
  <template v-slot:alternative>
      <y-button-link label="Primary"/>
  </template>
  </y-button-row-multi-column>
</div>
</DemoContainer>
