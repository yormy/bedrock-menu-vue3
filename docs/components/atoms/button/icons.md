<script setup>
import {YButtonPrimary} from 'bedrock-menu-vue3'
</script>

# Icons and Badges Button

The default button to press

<DemoContainer>
  <div class="flex justify-content-between">
      <y-button-primary icon="y-icon icon icon-loading icon-spin" label="Button" badge="9" badge-type="info"/>
      <y-button-secondary icon="y-icon icon icon-file-download" label="Button" badge="9" badge-type="success"/>
      <y-button-tertiary icon="y-icon icon icon-file-download" label="Button" badge="9" badge-type="warning"/>
      <y-button-link icon="y-icon icon icon-file-download" label="Button" badge="9" badge-type="danger"/>
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



