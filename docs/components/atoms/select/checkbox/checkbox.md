<script setup>
import {YCheckbox} from 'bedrock-menu-vue3'
</script>

# Checkbox

<DemoContainer>
  <y-checkbox label="hello" :model-value='true' :required="true"></y-checkbox>
</DemoContainer>

# Checkbox with second line
<DemoContainer>
  <y-checkbox label="hello" label-extended="more text on label" :model-value='true' :required="true"></y-checkbox>
</DemoContainer>

# Checkbox with popup help
<DemoContainer>
  <y-checkbox 
    label="hello"
    label-extended="more text on label" 
    more-help-label="more-help"
    more-help-description="This is where more help can be"
    more-help-header="header"
    :model-value='true' 
    :required="true">
</y-checkbox>
</DemoContainer>
