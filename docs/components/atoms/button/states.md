<script setup>
import {YButtonPrimary} from 'bedrock-menu-vue3'
</script>

# Primary Button

The default button to press

<DemoContainer>
  <div class="flex justify-content-between">
      <YButtonPrimary label="Primary"/>
      <YButtonSecondary label="Secondary"/>
      <YButtonTertiary label="Tertiary"/>
      <YButtonLink label="Link"/>
  </div>
</DemoContainer>

<DemoContainer>
  <div class="flex justify-content-between">
      <YButtonPrimary label="Disabled" disabled="true"/>
      <YButtonSecondary label="Disabled" disabled="true"/>
      <YButtonTertiary label="Disabled" disabled="true"/>
      <YButtonLink label="Disabled" disabled="true"/>
  </div>
</DemoContainer>

<DemoContainer>
  <div class="flex justify-content-between">
      <YButtonPrimary label="Loading" loading="true"/>
      <YButtonSecondary label="Loading" loading="true"/>
      <YButtonTertiary label="Loading" loading="true"/>
      <YButtonLink label="Loading" loading="true"/>
  </div>
</DemoContainer>

### Usage
The primary button on a page or form. 

### Code
::: details Code
```js
<YButtonPrimary label="hellso"/>
```
:::



