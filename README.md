# Svelte Google Maps Embed

Svelte wrapper for the [official Google Maps Embed api](https://developers.google.com/maps/documentation/embed/guide).

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

## Usage

Use as a normal svelte component. 

There are two parameters that must always be present:

* `apiKey`: the API key you got from the [Google Developers Console](https://console.developers.google.com)
* `mapMode`: one of `place`, `directions`, `search`, `view`, `streetview`

Depending on the `mapMode`, you will need some other parameters, as described in the Google documentation. See examples below.

## Examples:

```html
<!-- A place -->
<GoogleMaps apiKey="YOUR_API_KEY" mapMode="place" q="Space+Needle,Seattle+WA" />

<!-- Directions -->
<GoogleMaps apiKey="YOUR_API_KEY" mapMode="directions" origin="Oslo+Norway"
  destination="Telemark+Norway" avoid="tolls|highways" />

<!-- A search -->
<GoogleMaps apiKey="YOUR_API_KEY" mapMode="search" 
  q="record+stores+in+Seattle" />

<!-- A view -->
<GoogleMaps apiKey="YOUR_API_KEY" mapMode="view" center="-33.8569,151.2152"
  zoom="18" maptype="satellite" />

<!-- A streetview -->
<GoogleMaps apiKey="YOUR_API_KEY" mapMode="streetview" 
  location="46.414382,10.013988" heading="210" pitch="10" fov="35" />

<script>
  import { GoogleMaps } from 'svelte-google-maps-embed';

  export default {
    components: {
      GoogleMaps
    }
  }
</script>
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

## Credits

* Jeroen Coussement - [@coussej](https://twitter.com/coussej) - [coussej.github.io](http://coussej.github.io)

## License

MIT