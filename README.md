# Hi, I'm Colin, co-founder and CEO of LayerCI (YC S20)

At Layer, we're merging staging servers, CI, and pull requests into [a Continuous Staging](https://continuousstaging.com) workflow.

### 1. Create a Layerfile
These are based on Dockerfiles, but build entire staging VMs instead of just containers.
![Layerfile](https://raw.githubusercontent.com/ColinChartier/colinchartier/master/static/images/layerfile.svg)


### 2. Install Layer
- [Login to Layer](https://layerci.com)
- [Install Layer onto GitHub](https://github.com/apps/layerci/installations/new)

### 3. Every time you push a Layerfile, we'll create a new staging server per-commit for you in seconds
![Layer dash](https://raw.githubusercontent.com/ColinChartier/colinchartier/master/static/images/dash.svg)


## Sanic
I've also built [sanic](https://sanic.io) which we use for the deployment process at Layer - it lets you
build and deploy a bunch of Docker images to a kubernetes cluster with minimal effort.

## ParseHub
Prior to all of this, I was CTO at [ParseHub](https://parsehub.com) which is an excellent no-code webscraper
that you can use to scrape difficult websites, such as those with javascript or infinite scrolling.