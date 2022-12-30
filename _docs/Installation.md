# Setup flags
copy to your app at
public/shared/css/vendor/flags

Include in your blade
```<link href="shared/css/vendor/flags/css/flag-icon.min.css" rel="stylesheet">```


# Setup Font Awesome icons

## Files copy
copy all files from ```public/shared/css/vendor/icons/fa```
to your app at
```public/shared/css/vendor/icons/fa```

## Copy webfonts
copy
```public/shared/css/webfonts```
to
```public/shared/css/webfonts```

## Blade setup
```<link href="shared/css/vendor/icons/fa/css/all.min.css" rel="stylesheet">```

# Setup custom icon definitions
Copy ``public/shared/css/icons`` 
to your app
```public/shared/css/icons```

### Load stylesheet
add to your blade
```<link href="shared/css/icons/icon.css" rel="stylesheet">```

### Customize or add custom icon definitions
edit ```public/shared/css/icons/_variables```
and recompile icons.scss to icons.css
This is also where you can set another default fonticon set

# Ap.js
###
Import your config

```
import config from 'bedrock-menu-vue3/config/config.js';
...
VueApp.use(config)
            
```
or create a new config and load that one. 
