# Migration

## Script

```<script>```

=>

```
<script setup lang="ts">
```


### Props
import { PropType } from 'vue';
const props = defineProps({
    type: Array as PropType<string[]>,

props.propName


#### TODO
Test description in storybook


## Module not defined
ie in dompurify
```npm i @types/dompurify```
