# Reeval inputbase !!

fix storybook zonder theme
- set autofocus to loginname on login
- toggle select has hardcoded colors

vue3:
- input text with pre-icon => recode from primevue
- phone number (see storybook)=> recode from primevue

- check group
a group of multi selectable checkboxes, values as array


# Loginwrapper
- appearingbullets redirects on async completed
- translations of messages

### Translation function
Translation function template needs 
```
{{ i18ntc.t('validation.required') }} 
const i18ntc: any = inject('i18ntc');
```
can it be reduced to just t()


fix failed tests:
- inputPassword
- modalHelp

## COMPONENTS TO CREATE
- Table
- 

# TODO
### Checkbox
* Color cannot be changed
* Old for checkmark and colors
* Checkbox icon PR is ready : https://github.com/primefaces/primevue/pull/3428/files

### Password
Cannot make 100% - bugreport : https://github.com/primefaces/primevue/issues/3414#issuecomment-1356818771

### Dropdown button
cannot change dropdown icon from chevron to something else - bugreport
when this is fixed, create more alternative dropdown buttons


docs:build failed

# Buttons
- with font-awesome predefined icon + pos + abstraction
- dropdown
- selectable change color (fill color)


# Naming convention
components
 - Button <singular / camelcase>




# GULP to compile styles
"build:package" ??
&& gulp build-styles
for precompilers SCSS

# Build META 
to do additional stuff
This can be copying js or creating some files



# JEST
https://github.com/kouts/vue3-ts-vite-starter-template


Designer / prime:
run the follwing before npm run serve
```
export NODE_OPTIONS=--openssl-legacy-provider
```
