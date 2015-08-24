# Intro

Hi, in this talk I'm going to be speaking about front end security to protect against malicious content on the web.

The main focus of this talk is to help us stitch better security into the web.


# Attacks

The attacks available online range from displaying adverts maliciously to stealing of financial data.

Security was traditionally considered just a back end job to protect. that is still the case;
however SPA and the internet of things really make FE security an requirement.

CSP is the concept I will be using to prevent these attacks.


# What CSP does

Content security policies are a defined set of restrictions which get transmitted when you load a web page.

I see CSP as a very similar principle to accepting app permissions on phones.

This allows website owners to define a set of capabilities their site uses and the browser will enforce those as restrictions on the code that runs.

These restrictions then prevent an attacker from executing code that really wasn't designed to run.

# CSP looks like

![Series of headers demonstrating security](response-headers.png)

# Why does CSP matter?

"I discount the probability of perfection" - Alex Russell

"We are all idiots with deadlines." - Mike West

Basically, people make mistakes and CSP is a great protection in all good browsers that support it. The more layers of security we can add the smaller the dependency there is on perfect setup.

# Demo


[No security](http://codepen.io/anon/pen/xGopeB)

[CSP enabled](http://codepen.io/anon/pen/bdPqPR)

# Who is finding it tough
- everyone?
- https://scotthelme.co.uk/
  - modpagespeed is adding data: and 'unsafe-eval' script usage
  - Disqus requires 'unsafe-eval' and 'unsafe-inline' CSS
- https://certsimple.com
  - Ractive is using 'unsafe-eval' scripts
  - Selectize using 'unsafe-inline' CSS

# Top million sites

![Graph showing low 1-2% usage of CSP in the top million sites](images/csp-usage.png)

# Why is it hard

Locking down capabilities of a big site is actually difficult. In a larger organisation where many developers are involved in each page it becomes difficult to work out what the site is doing.

- Lack of role in a company to do that

- Tooling

- visibility

Common issues

- eval

# Libraries

One of the main problems of an application developer is using third party code and libraries.

I think libraries are most used to testing their code in isolation for security flaws.
However what I think needs to be said, is that libraries are responsible for the security of the apps that use them.

## Libraries have a far reaching impact to the web.
### Demonstrate to their users
### Despite testing open up other applications
### A library is responsible to it's users

# Libs: start with the most restrictive policy first


Start with the most restrictive policy first:

```
Content-Security-Policy: default-src 'none' ; frame-ancestors 'none' ; form-action 'none' ; block-all-mixed-content; sandbox; reflected-xss block; referrer no-referrer;
```

Soon you will need to add in other policies like allowing scripts and your addon URLs.

# Libs: make it static

- Turn it all off first then turn directives back on when you 100% need them

For example `style="color:red;"` can be replaced with `dom.style.color = 'red';`

# Libs: Provide an example report

Showing users how to integrate
Users will find it hard to find out themselves; in some cases as hard as 'the halting problem'.
If you can make parts of you app optional that is cool too.

# JSON CSP

So I have started to make a new standard because; you know it's not like FE doesn't have enough to learn.

Actually all JSON CSP is for is just specifying a more universal format that can be used across the web.

JSON CSP is there for application authors to consume the policies of the libraries they use to make a composite policy that is easier to maintain.

Relationship between both application universe and library sphere.

Obviously this is at the moment mostly a goal to secure the net, however there appears to be great traction to using this through frameworks in only several weeks.



# Reporting & testing

Reporting and testing go hand in hand, testing helps stomp out most of the issues before it goes live.

Before getting to the site your code where possible should be tested.

Reporting is actually really important to review how your application is performing.
You can actually use both a policy and a report only policy. 


# secure.fail

So that is the carrots over with, Secure.fail is a site that I am working on to be the stick of FE security.

Giving libraries new resources to implement security is great, however we need to back that up with something that also tells websites and libraries that they are doing badly.

So this will only be for FE for now as the disclosure battle isn't something I want to get into.

# Thanks & any questions

http://www.cspplayground.com/
http://content-security-policy.com/
http://www.w3.org/TR/CSP2/


[Blob exploit](https://raw.githubusercontent.com/hillbrad/CSP/master/support/buildBlobEval.php)
[JSON CSP](https://gist.github.com/jonathanKingston/5699b440f608960dc089)
[Exploit handbook](https://code.google.com/p/browsersec/wiki/Part1#Cascading_stylesheets)
[CSS escape](https://github.com/mathiasbynens/cssesc)


[Security header usage](https://scotthelme.co.uk/how-widely-used-are-security-based-http-response-headers/)
[Empty violation report](http://stackoverflow.com/questions/32106363/what-should-i-do-if-i-get-an-empty-csp-violation)
