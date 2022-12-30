<script setup>
import InputCodeWrapper from '../../.vitepress/wrappers/inputs/InputCodeWrapper.vue'
</script>

# Input

The default button to press

<DemoContainer>
  <div class="py-5">
    <input-code-wrapper 
      :is-loading="false"
      label="Your code from your email"
      moreHelpDescription="Here you can put more info"
      hint-text="code from your email"
    ></input-code-wrapper>
  </div>
</DemoContainer>
