## Libs: Most restrictive policy first

Lock all the doors and turn the lights off... then start building your application.

```
Content-Security-Policy:
default-src 'none';
frame-ancestors 'none';
form-action 'none';
block-all-mixed-content;
sandbox;
reflected-xss block;
referrer no-referrer;
```

