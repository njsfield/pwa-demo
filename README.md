## Overview

Trial app to demo PWA, namely offline caching support,
using React & Redux.

## Install

Clone the repo & cd into directory, then;

```
yarn install
```

## Live

```
yarn live
```

Visit http://localhost:9000 in browser

## Demo Steps
1. On landing, click log in.
2. Enter a first name & password (can be anything).  
3. Get redirected to /welcome page with real time data from server.
4. Turn off wifi. Visit http://localhost:9000 again to see last saved data
5. Turn wifi back on. Visit http://localhost:9000 again to see real time data again.
