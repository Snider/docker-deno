# docker_deno

A fully typed, async-first docker client library for [Deno](https://deno.land).

## Installation

```ts
import Docker from "https://deno.land/x/docker_deno/mod.ts"
```

Add this to your deno.json file, to upgrade version just edit the version here and use the above url in your code.

```json
{
  "imports": {
    "https://deno.land/x/docker_deno/": "https://deno.land/x/docker_deno@v0.3.0/"
  }
}
```

## Usage

### Simple example

```ts
import Docker from "https://deno.land/x/docker_deno/mod.ts"

const docker = new Docker("/var/run/docker.sock");
const container = await docker.containers.create("my_container", {
  Image: "alpine",
  Cmd: ["ls"],
  StopTimeout: 10,
});
await docker.containers.start(container.Id);
```

### Manipulating containers

```ts
// Fetch the list of currently running containers
const containers = await docker.containers.list({all: true});

// Create a container
const container = await docker.containers.create("my_container", {
  Image: "alpine",
  Cmd: ["echo", "hello"],
});

// Start the container
await docker.containers.start(container.Id);

// Stop a container
await docker.containers.stop(container.Id);

// Kill a container
await docker.containers.kill(container.Id, "SIGKILL");

// Restart a container
await docker.containers.restart(container.Id);

// Wait until the container has finished running
await docker.container.wait(container.Id);

// Delete a container
await docker.containers.rm(container.Id);
```

### Images

```typescript
// List images 
await docker.images.list(ImageListOptions)

// Create Image
await docker.images.create('ubuntu', {"fromImage": "ubuntu", tag: 'latest'})
```
## API reference

### Containers

* `containers.list` - [Docker API](https://docs.docker.com/engine/api/v1.40/#operation/ContainerList)
* `containers.create` - [Docker API](https://docs.docker.com/engine/api/v1.40/#operation/ContainerCreate)
* `containers.start` - [Docker API](https://docs.docker.com/engine/api/v1.40/#operation/ContainerStart)
* `containers.stop` - [Docker API](https://docs.docker.com/engine/api/v1.40/#operation/ContainerStop)
* `containers.kill` - [Docker API](https://docs.docker.com/engine/api/v1.40/#operation/ContainerKill)
* `containers.restart` - [Docker API](https://docs.docker.com/engine/api/v1.40/#operation/ContainerRestart)
* `containers.wait` - [Docker API](https://docs.docker.com/engine/api/v1.40/#operation/ContainerWait)
* `containers.rm` - [Docker API](https://docs.docker.com/engine/api/v1.40/#operation/ContainerDelete)

### Image

* `image.list` - [Docker API](https://docs.docker.com/engine/api/v1.40/#tag/Image/operation/ImageList)