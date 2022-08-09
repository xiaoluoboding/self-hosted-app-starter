---
layout: doc

title: Deployment
---

# Deployment

## Docker Image

We use GitHub Workflows to auto-push the docker image to the docker hub.

And you need to provide your DOCKER username & password

Don't worry, It can configuring at your own repo's settings, not in public.

![](/action-secrets.png)

And then it will work with the GitHub Action.

```bash
# .github/workflows/build-and-push-dev-image.yml
with:
  username: ${{ secrets.DOCKER_USERNAME }}
  password: ${{ secrets.DOCKER_PASSWORD }}
```

## Railway

[Railway](https://railway.app/) can help you deploy an App to Production in Minutes.

### Deploy from Railway Button

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template/prX7No?referralCode=UEM9NF)

### Deploy from GitHub Repo

![Deploy from GitHub Repo](/railway-github-repo.png)

- Fork the repo first.

- When you selected the GitHub repo, It will automatically look for and use the [Dockerfile](https://github.com/xiaoluoboding/self-hosted-app-starter/blob/main/Dockerfile) at the repo's root, and deploy the services.

- It will generate a random service domain, it has not finished yet.

### Add Environment Variable

![Add Variable](/railway-add-variables.png)

- We must add a variable named `PORT`, value is `8080`, because the back-end server is running at `8080`

- When you click the `Add` button, it will redeploy the service automatically.

- And now you can visit the service domain.

### Change Service Domain

Now you can change the service domain as you wish

like: [https://sha-starter.up.railway.app/](https://sha-starter.up.railway.app/)

## Render

[Render](https://render.com) Render is a unified cloud to build and run all your apps and websites with free TLS certificates, a global CDN, DDoS protection, private networks, and auto deploys from Git.

### Deploy from GitHub Repo

1. First of all, click the `New` button.

![](/render-web-service.png)

2. Then, create a Web Service on render, and click the `Connect` button

![](/render-create-a-new-web-service.png)

### Add Environment Variable

3. Last thing we must do is that `Add Environment Variable`, we must add a variable named PORT, value is 8080, because the back-end server is running at 8080

![](/render-add-variables.png)

and click the `Create Web Service`

### Change Service Domain

Now you can change the service domain as you wish

like: [https://sha-starter.onrender.com/](https://sha-starter.onrender.com/)
