<script setup>
import {YInputPassword} from 'bedrock-menu-vue3'
</script>

# Input

The default button to press

<DemoContainer>
  <div class="py-5">
<YInputPassword label="Your Password" hint-text="some help text here" secondary-label="forgottie pw?" more-help-description="fdafdadsf"/>
  </div>
</DemoContainer>

### Usage
The primary button on a page or form. 
todo : helptext, 
help modal
disabled view is not clear that it is disabled
```
        <y-input-password
            class=''
            v-model="modelValue"
            :error-text="args.errorText"
            :hide-label="args.hideLabel"
            :hint-text="args.hintText"
            :is-password="true"
            :label-help-description="args.description"
            :label-help-text="'forgot ?'"
            :label="args.label"
            :placeholder="args.placeholder"
            :rules="'required|min:3'"
            :valid-text="args.validText"
            :api-errors="args.apiErrors"

            prefix-clicked="clicked"
            prefix="<i class='icon icon-warning'></i>"
        >
<!--            @onAppendClicked="onAppendClicked"-->
<!--            @onEnter="onEnter"-->
<!--            @onEsc="onEsc"-->
<!--            @onKeyUp="onKeyUp"-->
      </y-input-password>
```


### Code
::: details Code
```js


```
:::



### Properties

| Name     | Type    | Default | Description                  |
|----------|---------|---------|------------------------------|
| id       | string  | null    | optional to set the input id |
| label    | string  | null    | the visible label            |
| disabled | boolean | false   | disabled                     |

