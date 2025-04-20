---
title: Render
tags: [guides]
---

# Setting up Render with an is-truly-a.pro subdomain

This guide will walk you through the process of setting up a Render deployment and pointing your is-truly-a.pro subdomain to it.

## Creating a Render service

First, you'll need to create a service on Render. Follow the instructions in the [Render Documentation](https://render.com/docs).

## Creating the domain file

Create a JSON file inside domains directory (`domains/subdomain.json`) with the following content and submit a pull request:

```json
{
  "description": "Describe the use of this subdomain",
  "repo": "https://github.com/github-username/github-repository",
  "owner": {
    "username": "your-github-username",
    "email": "me@example.com"
  },
  "record": {
    "A": ["216.24.57.1"]
  }
}
```

**Note:** In the owner section, you can add any social media handle. If you add another social media account, you can skip the email field. Include your GitHub username and a preview of your website in your pull request.

## Configuring

After the pull request is merged, you may see issues with your subdomain. To fix this, go to your Render service dashboard and navigate to:

Settings > Custom Domains and add `subdomain.is-truly-a.pro` in the given field. Render will guide you through verification steps.

Wait some time and your site should be live!
