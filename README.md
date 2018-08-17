Hubot script for showing random pictures with pugs.

The main goal of the project is to resurrect the original [pugme](https://github.com/hubot-scripts/hubot-pugme) which is written in CoffeScript. Thus, the first version of the script was based on the original code of pugme converted into JavaScript (with slight changes) using [decaffeinate](https://github.com/decaffeinate/decaffeinate). Then, a couple of enhancements were added to the script:
* the `PUGS_LIMIT` environment variable to limit the number of pugs when invoking `hubot pug bomb N`;
* a possibility to request pugs asynchronously. 

## Installation

In hubot project repo, run:

`npm install git+https://github.com/tolstoyevsky/hubot-pugme --save`

Then add **hubot-pugme** to your `external-scripts.json`:

```json
[
  "hubot-pugme"
]
```

## Configuration

The script supports the only configuration parameter which is `PUGS_LIMIT`. It allows the administrators to limit the maximum number of pugs. By default, the parameter is equal to **5**.

## Sample Interaction

```
user>> hubot pug me
hubot>> http://29.media.tumblr.com/tumblr_lisw5rptyA1qbbpjfo1_500.jpg
user>> hubot pug bomb
hubot>> http://30.media.tumblr.com/tumblr_lsw1m0u7ry1qb08qmo1_500.jpg
hubot>> http://25.media.tumblr.com/tumblr_lk7v8zCcIn1qaa50yo1_500.jpg
hubot>> http://26.media.tumblr.com/tumblr_ltee8lg9wd1qb08qmo1_500.jpg
hubot>> http://26.media.tumblr.com/tumblr_ll7aoxHGfW1qb08qmo1_500.jpg
hubot>> http://28.media.tumblr.com/tumblr_lk8iieigtQ1qzj3syo1_500.jpg
```

## Authors

See [AUTHORS](AUTHORS.md).

## Licensing

hubot-vote-or-die is available under the [Apache License, Version 2.0](LICENSE).

