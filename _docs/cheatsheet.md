# Props
```javascript

const props = defineProps({

    id: {
        type: String,
        default: '',
    },
});

```

# computed
```javascript

const type = computed(() => {
    return ...
})

```

# watcher
```javascript

watch(
    () => checked.value,
    (newValue) => {
        if (newValue) {
            emit('isOn');
            console.log('on');
        }
        if (!newValue) {
            emit('isOff');
            console.log('off');
        }
    }
);

```
# Emits

```javascript

?? validator ?
const emits = defineEmits<{
  (eventName: 'onComplete', code: string): void
  (eventName: 'onEsc'): void
}>();

```


# Wrapper include json:
    // :menuButtonProps= "{icon: 'y-icon icon icon-users'}"


# eslint
## Disable file
<!--eslint-disable-->

## Disable line
// eslint-disable-next-line


# JEST
// expect(wrapper.html()).toBe('<button class="p-button p-component p-button-danger" type="button"><span class=""></span></button>');


# Proptypes
        type: Array as PropType<Array<
            {
                moreHelpTitle: string,
                moreHelpContent: string,
            }>> ,

